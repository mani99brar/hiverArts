import Image from 'next/image'
import React from 'react'

export const Latest = () => {
  return (
    <div className='w-[100%] mt-8 flex justify-center'>
        <div className='lg:w-[60%] w-[95%] lg:h-[70vh] flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] w-[100%]'>
                <img className='h-[100%]' src="p1.jpg" alt="" />
            </div>
            <div className='lg:w-[50%] w-[100%]'>
                <div className='flex items-center lg:mt-0 mt-4'>
                    <p className='mr-2 text-xl'>Rs. 1000</p>
                    <p className='bg-black text-white p-2 rounded-md'>Exclusive</p>
                </div>
                <button className='border-2 w-[100%] p-2 mt-4'>Add to cart</button>
                <p className='mt-8 mb-6'>The Mona Lisa, painted by Leonardo da Vinci, captivates with her enigmatic smile, transcending time as an iconic masterpiece of art.</p>
                <a href="" className='underline underline-offset-4'>View full details</a>
            </div>
        </div>
        
    </div>
  )
}
