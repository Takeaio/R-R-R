import Link from 'next/link';

const HomePage = () => (
  <div className='mt-16'>
    <h1>予約システム </h1>
    <Link href="/reservations/create">
      予約する
    </Link>
    <Link href="/reservations/list">
      予約一覧
    </Link>
  </div>
);

export default HomePage;
