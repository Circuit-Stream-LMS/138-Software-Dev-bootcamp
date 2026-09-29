import express from 'express';
import { ingest, ingestFolder, ask } from './rag.js';

const app = express();
app.use(express.json());
app.use(express.static('public')); // serves public/index.html

app.post('/api/ingest', async (req, res) => {
  const { name, text } = req.body;
  const chunks = await ingest(name, text);
  res.json({ chunks });
});

app.post('/api/chat', async (req, res) => {
  const { answer, chunks } = await ask(req.body.question);
  res.json({ answer, sources: chunks });
});

await ingestFolder('docs');
app.listen(3000, () => console.log('http://localhost:3000'));
