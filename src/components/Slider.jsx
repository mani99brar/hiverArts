import React from 'react'
import Image from 'next/image'
export const Slider = () => {
  return (
    <div className='w-[100%] lg:h-[50vh] h-[30vh]   flex flex-col justify-center items-center relative overflow-hidden bg-[#EFECEC]'>
        <img src="sliderBg1.jpeg" className='absolute h-[100vh] w-[100%] z-10' alt="" />
        <div className='text-lg p-8 bg-[#EFECEC] z-20 lg:w-[25%] w-[60%] h-[70%] rounded-md flex items-center justify-center'>
            <div className='flex flex-col '>
                <p>
                "Every artist was first an amateur." 
                </p>
                <p className='text-end mt-10'>- Ralph Waldo Emerson</p>
            </div>
            
        </div>
        
    </div>
  )
}
