"use client";
import {React,useState} from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartItem } from '@/components/CartItem';
const CartPage = () => {
    const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
          const savedCart = localStorage.getItem('cart');
          return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
      });
    return (
        <>
            <Header />
            <div className='flex flex-col justify-between items-center'>
                <h1>Your Cart</h1>
                <div className='flex flex-col justify-between items-center'>
                    {/* Loop over each item in the cart and pass it to the CartItem component */}
                    {cart.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CartPage;
