'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

type Props = {
  data: {
    id: number;
    image: string;
    name: string;
    price: string;
  };
  onAddToCart: (item: { id: number; name: string; price: string }) => void; // Properti onAddToCart
}

const SteakCard = ({ data, onAddToCart }: Props) => {
  return (
    <Tilt>
      <div className="rounded-lg border-2 cursor-pointer border-gray-300 border-opacity-30 p-6">
        <div className="w-full h-[180px]">
          <Image src={data.image} alt={data.name} width={300} height={280} className='w-full h-full object-cover' />
        </div>
        <div className="">
          <div className="flex mt-6 items-center justify-between">
            <h1 className="text-blue-950 hover:text-blue-700 transition-all duration-200 text-base font-bold">{data.name}</h1>
          </div>
          <div className="w-full my-2">
            <p className="text-sm text-gray-600"> <span className="text-yellow-600">Rp.{data.price}</span></p>
          </div>
          <div className="flex mt-3 items-center justify-between">
            <div className="text-blue-950 text-base font-bold text-sm">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => onAddToCart(data)}  // Memanggil fungsi onAddToCart ketika tombol ditekan
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default SteakCard
