'use client'

import React, { useEffect, useState } from 'react'
import BestSellerCard from './BestSellerCard'

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  // Mengambil data best seller dari API
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch('./api/items/best-seller'); // Ubah URL sesuai query string
        const data = await res.json()

        if (res.ok) {
          // Menambahkan "Rp" dan format harga
          const formattedData = data.map((item: any) => ({
            ...item,
            price: `Rp ${parseInt(item.price).toLocaleString()}`, // Format harga dengan "Rp"
          }));
          setBestSellers(formattedData); // Menyimpan data yang sudah diformat
        } else {
          setError(data.error || 'Failed to fetch data')
        }
      } catch (error) {
        setError('An error occurred while fetching data')
      }
    }

    fetchBestSellers()
  }, [])

  if (error) return <div>{error}</div> // Menampilkan error jika ada

  return (
    <div className='pt-16 pb-12'>
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Best Seller
      </h1>
      <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
          bestSellers.map(data => (
            <div key={data.id}>
              <BestSellerCard data={data} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
