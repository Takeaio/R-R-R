const pool = require('../db');  // db.jsをインポート

const getReservations = async (req, res) => {
  try {
    // データベースから予約情報を取得するクエリ
    const result = await pool.query('SELECT * FROM reservations');
    res.json(result.rows);  // 結果をフロントエンドに返す
  } catch (err) {
    console.error('エラーが発生しました:', err);
    res.status(500).json({ message: '予約情報の取得に失敗しました' });
  }
};

const createReservation = async (req, res) => {
  const { name, date, time } = req.body;

  try {
    // データベースに新しい予約を挿入するクエリ
    const result = await pool.query(
      'INSERT INTO reservations (name, date, time) VALUES ($1, $2, $3) RETURNING *',
      [name, date, time]
    );

    res.status(201).json({ message: '予約が完了しました', reservation: result.rows[0] });
  } catch (err) {
    console.error('エラーが発生しました:', err);
    res.status(500).json({ message: '予約の作成に失敗しました' });
  }
};

module.exports = { getReservations, createReservation };
