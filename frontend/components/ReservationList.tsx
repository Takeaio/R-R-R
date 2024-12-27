"use client"
import { useEffect, useState } from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]); // 型を指定
  const [error, setError] = useState<string>(''); // 型を指定

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reservations`);
        if (!res.ok) throw new Error('Failed to fetch reservations');
        const data: Reservation[] = await res.json(); // 型を指定
        setReservations(data);
      } catch (err) {
        setError('予約情報の取得に失敗しました');
      }  
    };

    fetchReservations();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>予約一覧</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.name} - {reservation.date} - {reservation.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
