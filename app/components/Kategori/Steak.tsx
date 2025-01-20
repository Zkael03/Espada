'use client'

import React, { useEffect, useState } from 'react'
import SteakCard from './SteakCard'

const Steak = () => {
  const [steaks, setSteaks] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchSteaks = async () => {
      try {
        const response = await fetch('/api/steak')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch steaks')
        }

        setSteaks(data)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchSteaks()
  }, [])

  // Fungsi untuk menambahkan item ke keranjang
 // Steak.tsx
 const handleAddToCart = async (item: { id: number; name: string; price: string; }) => {
  try {
    const response = await fetch('/api/users/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: 1, // Ganti dengan user_id yang valid
        item_id: item.id,
        jumlah: 1, // Tambah jumlah sesuai kebutuhan
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Item added to cart:', data.message);
    } else {
      console.error('Error adding item to cart:', data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className='pt-16 pb-12'>
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Steak
      </h1>
      <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {steaks.map(data => (
          <div key={data.id}>
            <SteakCard data={data} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steak
