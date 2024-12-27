const express = require('express');
const router = express.Router();
const { createReservation, getReservations } = require('../controllers/reservationController');

router.post('/', createReservation); // 予約作成
router.get('/', getReservations);   // 予約一覧

module.exports = router;
