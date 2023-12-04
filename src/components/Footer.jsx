import React from 'react'

export const Footer = () => {
  return (
    <div className='w-[100%] pt-8 bg-[#2C332F] flex justify-center text-white'>
        <div className='lg:w-[80%] w-[95%] flex flex-col items-center'>
            <h1 className='text-4xl'>Get latest Updates</h1>
            <p className='mb-4 text-center'>Subscribe for latest launch upadtes and other stuff.</p>
            <input type="text" placeholder='Email' className='lg:w-[50%] w-[100%] text-xl p-4 rounded-md text-[#2C332F]'/>
            <p className='m-8'>© 2023 Hiver Arts. All rights reserved.</p>
        </div>
    </div>
  )
}
