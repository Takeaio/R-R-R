const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const reservationRoutes = require('./routes/reservationRoutes'); // 正しいパスを指定
const app = express();
const port = process.env.PORT || 3010;

dotenv.config();

// CORSの設定
app.use(cors({
  origin: 'http://localhost:3000', // フロントエンドのURL（Next.jsのデフォルトURL）
  methods: ['GET', 'POST'],
}));

app.use(express.json()); // JSONのリクエストボディをパース
app.use('/api/reservations', reservationRoutes); // 予約APIルート

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
