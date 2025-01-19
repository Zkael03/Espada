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
            <DessertCard data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dessert
