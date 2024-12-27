// app/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Data {
  message: string;
}

const HomePage = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/endpoint`);
      const data: Data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>APIからのデータ:</h1>
      <p>{data ? data.message : 'データ読み込み中...'}</p>
    </div> 
  );
};

export default HomePage;
