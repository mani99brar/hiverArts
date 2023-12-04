import React from 'react'

export const Header = () => {
  return (
    <div className='w-[100%] flex justify-center items-center pt-4 pb-4 bg-[#2C332F] text-white'>
        <div className='w-[80%] flex justify-between items-center'>
            <div>
                ---
            </div>
            <div className='text-6xl lg:w-[25%] flex flex-start'>
                H
            </div>
            <div className='lg:flex hidden w-[50%] justify-around'>
                <a href="" className='underline underline-offset-4'>Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className='lg:w-[25%] flex justify-end'>
                
                <p>
                    Cart
                </p>
                    
            </div>
        </div>
    </div>
  )
}
