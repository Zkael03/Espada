import React from 'react'
import { UlasanData } from '@/app/constants/Constants'
import UlasanCard from './UlasanCard'

const Ulasan = () => {
  return (
    <div className='pt-16 pb-12'>
      <h2 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Best Review <span className="text-amber-600"></span>
      </h2>
      <div className="mt-16 w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
        {UlasanData.map(data => (
            <div className="" key={data.id}>
                <UlasanCard data={data}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Ulasan
