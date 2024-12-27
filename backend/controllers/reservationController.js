const { addReservation, getAllReservations } = require('../models/reservationModel');

const createReservation = async (req, res) => {
  const { name, date, time } = req.body;

  try {
    const reservation = await addReservation(name, date, time);
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ message: '予約の作成に失敗しました' });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await getAllReservations();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: '予約情報の取得に失敗しました' });
  }
};

module.exports = { createReservation, getReservations };
