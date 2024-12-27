// server.js またはバックエンドのエントリーポイントファイルで
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const reservationRoutes = require('./routes/reservationRoutes');
const port = process.env.PORT || 3010;

dotenv.config();

// CORSの設定
app.use(cors({
  origin: 'http://localhost:3000', // フロントエンドのURL
  methods: ['GET', 'POST'],
}));

app.use(express.json()); // JSONのリクエストボディをパース
app.use('/api/reservations', reservationRoutes); // 予約APIルート

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});

