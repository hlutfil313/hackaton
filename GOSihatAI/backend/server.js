import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.use(cors());
app.use(express.json());

if (!GEMINI_API_KEY) {
  console.error('❌ Gemini API key not set. Please add GEMINI_API_KEY to your .env file.');
  process.exit(1);
}

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=' + GEMINI_API_KEY;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }
  try {
    const geminiRes = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });
    const data = await geminiRes.json();
    console.log('Gemini API response:', JSON.stringify(data, null, 2));
    const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || data?.error?.message || 'Sorry, I could not get a response.';
    res.json({ reply: aiText });
  } catch (err) {
    console.error('Gemini API error:', err);
    res.status(500).json({ error: 'Failed to contact Gemini API.' });
  }
});

app.listen(PORT, () => {
  console.log(`GoSihatAI backend running on http://localhost:${PORT}`);
}); 