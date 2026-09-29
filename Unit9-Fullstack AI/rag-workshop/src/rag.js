import 'dotenv/config';
import fs from 'node:fs';
import { GoogleGenAI } from '@google/genai';
import { checkInput, systemPrompt, REFUSAL } from './safety.js';
import { startTrace } from './trace.js';


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // free tier

const EMBED_MODEL = 'gemini-embedding-001';
const CHAT_MODEL = 'gemini-flash-latest'; 

// ---------- 1. CHUNK: split text into overlapping pieces ----------
// Why chunk at all? We never want to hand an LLM an entire document -- it's
// slow, expensive. Instead
// we cut the document into small pieces up front, so later we can search for
// just the 2-3 pieces that actually answer a given question.
//
// `overlap` matters because a plain slice can cut a sentence in half at the
// boundary. Sliding the window forward by (size - overlap) instead of by
// `size` means each new chunk repeats the tail of the previous one, so a
// sentence split at an edge still appears whole in at least one chunk.
export function chunkText(text, size = 150, overlap = 30) {
  const chunks = [];
  for (let start = 0; start < text.length; start += size - overlap) {
    chunks.push(text.slice(start, start + size).trim());
    if (start + size >= text.length) break; // reached the end, stop
  }
  return chunks;
}

// ---------- 2. EMBED: text -> list of numbers (meaning) ----------
// An embedding is a list of a few thousand numbers that represents what a
// piece of text MEANS, not just which words it contains. Two texts about the
// same topic end up with similar numbers, even if they don't share any
// exact words. That's what lets us do "search by meaning" in step 4.
//
async function embed(texts) {
  const res = await ai.models.embedContent({ model: EMBED_MODEL, contents: texts });
  return res.embeddings.map((e) => e.values); // e.values is the actual number array
}

// ---------- 3. STORE: just an array in memory ----------
// This plain JS array IS our "vector database" for this workshop. Every
// entry is one chunk plus the embedding we computed for it. In a real app
// this would be a proper vector database so it can persist and scale to millions of chunks --
// but the underlying idea (store text next to its embedding) is identical.
const store = []; // { id, text, embedding }

// The full pre-processing pipeline for ONE document: chunk it, embed every
// chunk, then push { id, text, embedding } triples into the store.
export async function ingest(name, text) {
  const chunks = chunkText(text);
  const embeddings = await embed(chunks);
  chunks.forEach((c, i) => store.push({ id: `${name}#${i}`, text: c, embedding: embeddings[i] }));
  return chunks.length;
}

// Convenience: ingest every file in a folder (used to load ./docs on startup).
export async function ingestFolder(dir = 'docs') {
  for (const file of fs.readdirSync(dir)) {
    await ingest(file, fs.readFileSync(`${dir}/${file}`, 'utf8'));
  }
}

// ---------- 4. SEARCH: cosine similarity, top k ----------
// Cosine similarity measures how closely two vectors point in the same
// direction, ignoring their length:
//   1.0  -> same direction (near-identical meaning)
//   0.0  -> unrelated
//  -1.0  -> opposite meaning
// It's the dot product divided by the product of the two vectors'
// magnitudes 
function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] ** 2;
    nb += b[i] ** 2;
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// Embed the incoming question with the SAME model used for the chunks (this
// matters -- vectors from two different embedding models aren't comparable),
// score every stored chunk against it, and keep the top k by score.
//
// Note what this does NOT do: it doesn't pick "the one right answer." It just
// narrows thousands of chunks down to a small relevant set. Reading that set
// and actually answering the question is the LLM's job in step 5.
async function search(query, k = 3) {
  const [q] = await embed([query]);
  return store
    .map((c) => ({ id: c.id, text: c.text, score: cosine(q, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

// ---------- 5. GENERATE: put the chunks in the prompt ----------
// This is the "generation" half of RAG. We don't send the retrieved chunks
// as a separate parameter -- we bake them into the system prompt as plain
// text (see systemPrompt() in safety.js) and let the model read them like
// a person would, then answer using only what it finds there.
// temperature: 0 asks the model to be as deterministic/literal as possible,
// rather than creative
async function generate(system, question) {
  const res = await ai.models.generateContent({
    model: CHAT_MODEL,
    contents: question,
    config: { systemInstruction: system, temperature: 0 },
  });
  return { text: res.text, tokens: res.usageMetadata?.totalTokenCount };
}

// ---------- The whole pipeline (with tracing + safety) ----------
// This is the single function the rest of the app calls. It wires together
// every piece above, in order, and wraps each step in a trace span so we can
// see exactly what happened on every request (see trace.js).
export async function ask(question) {
  const trace = startTrace(question);

  // Safety layer 1: reject obviously bad input (empty, too long, or an
  // attempted prompt injection) before we spend any money calling the model.
  const ok = await trace.span('input-check', async () => checkInput(question));
  if (!ok) return finish(trace, REFUSAL, []);

  // Retrieval: find the chunks most likely to contain the answer.
  const chunks = await trace.span('retrieval', () => search(question));

  // Safety layer 2 (hallucination guard): if even the BEST match is a weak
  // match, the documents probably don't contain the answer at all. Refuse
  // instead of letting the model guess or make something up.
  if (chunks[0].score < 0.3) return finish(trace, REFUSAL, chunks);

  // Generation: build a system prompt around the retrieved chunks (safety
  // layer 3 -- see systemPrompt() in safety.js) and ask the model to answer.
  const { text } = await trace.span('llm-call', () => generate(systemPrompt(chunks), question));
  return finish(trace, text, chunks);
}

// Small helper so every early-return above and the normal path end the trace
// and return the same { answer, chunks } shape.
function finish(trace, answer, chunks) {
  trace.end(answer);
  return { answer, chunks };
}