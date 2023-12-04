import React from 'react'
import { HomePrint } from './HomePrint'
export const Prints = () => {
  return (
    <div className='w-[100%] flex flex-col items-center mt-16 pt-16 pb-16 bg-[#EFECEC]'>
        <h1 className='text-6xl p-8'>Art Prints</h1>
        <div className='w-[100%] flex justify-around flex-wrap'>
            <HomePrint /> 
            <HomePrint /> 
            <HomePrint /> 
            <HomePrint /> 
        </div>
        <button className='mt-10 bg-[#2C332F] text-white pr-8 pl-8 pt-4 pb-4 rounded-lg'>View All</button>
    </div>
  )
}
