"use client"

import Image from "next/image";
import React from "react";

export default function Home() {
  // Menggunakan useEffect untuk memanggil API saat komponen pertama kali dimuat
  React.useEffect(() => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => console.log(data.message))  // Menampilkan pesan koneksi di console browser
      .catch((err) => console.error('Error fetching test connection:', err));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Database Connection Test</h1> {/* Menampilkan judul */}
      </main>
    </div>
  );
}
