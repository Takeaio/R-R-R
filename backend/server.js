// server.js またはバックエンドのエントリーポイントファイルで
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3010;

// CORSの設定
app.use(cors({
  origin: 'http://localhost:3000', // フロントエンドのURL
  methods: ['GET', 'POST'],
}));

app.get('/api/endpoint', (req, res) => {
  res.json({ message: 'こんにちは、Next.jsとAPIが連携しました！' });
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});

