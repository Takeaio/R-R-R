const db = require('../config/db');

const addReservation = async (name, date, time) => {
  const result = await db.query('INSERT INTO reservations (name, date, time) VALUES ($1, $2, $3) RETURNING *', [name, date, time]);
  return result.rows[0];
};

const getAllReservations = async () => {
  const result = await db.query('SELECT * FROM reservations ORDER BY date, time');
  return result.rows;
};

module.exports = { addReservation, getAllReservations };
