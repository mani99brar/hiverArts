"use client"
import {React,useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Header = () => {
    const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
          const savedCart = localStorage.getItem('cart');
          return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
      });
      // Initialize cartSize state
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        // Update the cart size when the cart changes
        setCartSize(cart.length);
    }, [cart]);
      
  return (
    <div className='w-[100%] flex justify-center items-center pt-4 pb-4 bg-[#2C332F] text-white'>
        <div className='w-[80%] flex justify-between items-center'>
            <div className='lg:hidden'>
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
             

             <Link href="/cart" className='lg:w-[25%] relative flex text-2xl justify-end'>            
                <FontAwesomeIcon icon={faCartShopping} />       
                <p className='absolute text-sm bg-[#f00] p-2 rounded-xl bottom-4'>{cartSize}</p>
            </Link>
        </div>
    </div>
  )
}
