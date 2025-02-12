'use client'

import React, { useEffect, useState } from 'react'
import SideDishCard from './SideDishCard'

const SideDish = () => {
  const [sideDishes, setSideDishes] = useState<any[]>([]) // Menyimpan data side dish
  const [error, setError] = useState<string>('') // Menyimpan error jika terjadi masalah saat fetching data

  useEffect(() => {
    const fetchSideDishes = async () => {
      try {
        const response = await fetch('/api/sidedish') // Memanggil API yang sudah dibuat
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch side dishes')
        }

        setSideDishes(data) // Menyimpan data yang didapat dari API
      } catch (error: any) {
        setError(error.message) // Menangani error jika gagal mengambil data
      }
    }

    fetchSideDishes() // Menjalankan fungsi fetching data ketika komponen di-mount
  }, [])

  // Fungsi untuk menambahkan item ke keranjang
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
        Side Dish
      </h1>
      <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sideDishes.map(data => (
          <div key={data.id}>
            <SideDishCard data={data} onAddToCart={handleAddToCart} /> {/* Menggunakan fungsi handleAddToCart */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideDish
