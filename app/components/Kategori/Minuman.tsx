'use client'

import React, { useEffect, useState } from 'react'
import MinumanCard from './MinumanCard'

const Minuman = () => {
  const [minuman, setMinuman] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchMinuman = async () => {
      try {
        const response = await fetch('/api/minuman')  // Menggunakan API untuk mengambil data minuman
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch minuman')
        }

        setMinuman(data)  // Menyimpan data yang diterima dalam state minuman
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchMinuman()
  }, [])

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className='pt-16 pb-12'>
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Minuman
      </h1>
      <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {minuman.map(data => (
          <div key={data.id}>
            <MinumanCard data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Minuman
