const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// 予約一覧取得API
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reservations ORDER BY date, time');
    console.log(result.rows); // ここで結果を確認
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('サーバーエラー');
  }
});

// 予約登録API
router.post('/', async (req, res) => {
  const { name, date, time } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO reservations (name, date, time) VALUES ($1, $2, $3) RETURNING *',
      [name, date, time]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('サーバーエラー');
  }
});

module.exports = router;
