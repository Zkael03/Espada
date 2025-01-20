'use client'

import React, { useEffect, useState } from 'react'
import MinumanCard from './MinumanCard'

const Minuman = () => {
  const [minuman, setMinuman] = useState<any[]>([]) // Menyimpan data minuman
  const [error, setError] = useState<string>('') // Menyimpan error jika terjadi masalah saat fetching data

  useEffect(() => {
    const fetchMinuman = async () => {
      try {
        const response = await fetch('/api/minuman') // Memanggil API yang sudah dibuat
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch minuman')
        }

        setMinuman(data) // Menyimpan data yang didapat dari API
      } catch (error: any) {
        setError(error.message) // Menangani error jika gagal mengambil data
      }
    }

    fetchMinuman() // Menjalankan fungsi fetching data ketika komponen di-mount
  }, [])

  const handleAddToCart = async (item: any) => {
    try {
      const response = await fetch("/api/users/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,       // ID user
          item_id: item.id, // ID item dari objek item
          jumlah: 1,        // Jumlah item
          name: item.name,  // Nama item
          price: item.price, // Harga item
          image: item.image // Gambar item
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Item added to cart:", data);
      } else {
        console.error("Failed to add item to cart:", data);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div> // Menampilkan error jika ada
  }

  return (
    <div className='pt-16 pb-12'>
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Minuman
      </h1>
      <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {minuman.map(data => (
          <div key={data.id}>
            <MinumanCard data={data} onAddToCart={handleAddToCart} /> {/* Pass handleAddToCart sebagai prop */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Minuman
