const express = require('express');
const router = express.Router();

// 予約を受け取るPOSTリクエスト
router.post('/', (req, res) => {
  const { name, date, time } = req.body;

  // ここで予約の処理を行う
  if (!name || !date || !time) {
    return res.status(400).json({ error: 'すべてのフィールドを入力してください' });
  }

  // 仮の予約処理（例: データベースに保存）
  // データベース保存処理をここで行うことができます

  res.status(200).json({ message: '予約が完了しました' });
});

module.exports = router;
