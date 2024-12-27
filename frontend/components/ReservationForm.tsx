"use client"
import { useState } from 'react';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { name, date, time });  // データが送信される前にログに出力
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        date,
        time,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      setMessage('予約が完了しました');
    } else {
      setMessage('予約に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="お名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">予約する</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ReservationForm;
