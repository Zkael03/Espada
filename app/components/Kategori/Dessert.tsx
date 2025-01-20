'use client'

import React, { useEffect, useState } from 'react'
import DessertCard from './DessertCard'

type Dessert = {
  id: number;
  name: string;
  image: string;
  price: string;
}

const Dessert = () => {
  const [desserts, setDesserts] = useState<Dessert[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        const response = await fetch('/api/dessert')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch desserts')
        }

        setDesserts(data)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchDesserts()
  }, [])

  // Fungsi untuk menambahkan item ke keranjang
  const handleAddToCart = async (item: Dessert) => {
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
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className='pt-16 pb-12'>
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Dessert
      </h1>
      <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {desserts.map(data => (
          <div key={data.id}>
            <DessertCard data={data} onAddToCart={handleAddToCart} /> {/* Menambahkan onAddToCart */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dessert
