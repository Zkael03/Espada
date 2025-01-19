import React from 'react'
import SpecialityCard from './SpecialityCard'

const CreateSellNft = () => {
  return (
    <div className='pt-16 pb-20'>
      <h2 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Keistimewaan Kami
      </h2>
      <div className="w-[80%] h-[80%] mt-8 md:mt:16 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        <div className="">
            <SpecialityCard image="/images/hygiene food.jpeg" title="1. Makanan Higienis"/>
        </div>
        <div className="">
            <SpecialityCard image="/images/best.jpeg" title="2. Bahan Berkualitas"/>
        </div>
        <div className="">
            <SpecialityCard image="/images/pelayanan.png" title="3. Pelayanan Cepat"/>
        </div>
        <div className="">
            <SpecialityCard image="/images/best price.png" title="4. Harga Terjangkau"/>
        </div>
      </div>
    </div>
  )
}

export default CreateSellNft
