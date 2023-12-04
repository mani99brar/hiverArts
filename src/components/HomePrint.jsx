import React from 'react'
import Image from 'next/image'
export const HomePrint = () => {
  return (
    <div className='lg:w-[23%] w-[45%] mb-4 border rounded-lg border-[#d8ddda]'>
        <img src="p1.jpg" className='w-[100%]' alt="" />
        <div className='p-4'>
            <p className='text-xl'>Mona Lisa</p>
            <p>From Rs. 1000</p>
        </div>
    </div>
  )
}
