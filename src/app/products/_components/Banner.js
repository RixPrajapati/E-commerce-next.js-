import Image from 'next/image'
import React from 'react'
import watchImage from "@/assets/images/rolex.png"

const ProductBanner = () => {
  return (
    <div className='p-10 bg-linear-to-r from-blue-800 via-blue-300 to-blue-700 shadow-xl grid grid-col-3 items-center justify-between'>
        <h2 className='font-black text-white text-7xl'>New Arrival</h2>
        <Image src={watchImage} height={400} width={400} className='h-64 auto'/>
        <div>50% Off</div>
    </div>
  )
}

export default ProductBanner