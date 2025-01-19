import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Banner () {
  return (
    <div className='mt-[10rem] md:mt-[9rem] lg:mt-[10rem] w-full flex justify-center flex-col'>
      <div className="w-4/5 mx-auto items-center grid lg:grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Image */}
        <div className="flex justify-center lg:col-span-3">
          <Image src={'/images/banner espada.avif'} alt='' width={500} height={500} />
        </div>
        {/* text content */}
        <div className="col-span-2">
          <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-blue-900 font-bold text-center lg:text-left mt-8'>
            Temukan Hidangan Favoritmu
          </h1>
            <p className="text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium text-center lg:text-left">
            Nikmati hidangan favorit Anda langsung dari restoran terbaik dengan layanan cepat dan praktis. Bergabunglah dengan Espada, 
            dan rasakan pengalaman makan yang memuaskan di setiap gigitan!
            </p>
          <div className="flex items-center justify-center lg:justify-start space-x-3 mt-10">
          <Link href="/Menu">
            <button className="w-36 rounded-full py-3 px-8 text-center bg-rose-900 font-semibold text-white transition-all hover:bg-rose-950">Explore</button>
          </Link>
          </div>
        </div>
       
      </div>      
    </div>
  )
}

export default Banner
