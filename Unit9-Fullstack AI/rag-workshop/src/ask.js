// Command-line entry point: `npm run ask -- "your question"`.
// This is the fastest way to exercise the whole pipeline while following

import { ingestFolder, ask } from './rag.js';

// Every run starts fresh (the store in rag.js lives only in memory), so we
// re-ingest everything in ./docs before answering anything.
await ingestFolder('docs');

// process.argv is ['node', 'src/ask.js', 'your', 'question', 'words'] --
// slice off the first two and rejoin the rest into one question string.
const { answer, chunks } = await ask(process.argv.slice(2).join(' '));

console.log('\nANSWER:', answer);
console.log('\nSOURCES:');
// Show which chunks were retrieved and how confident the match was, so you
// can sanity-check retrieval quality alongside the answer itself.
chunks.forEach((c) => console.log(`  ${c.score.toFixed(2)}  ${c.id}`));