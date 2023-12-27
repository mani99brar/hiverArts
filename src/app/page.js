"use client";
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Latest } from '@/components/Latest' 
import {Slider} from '@/components/Slider'
import { Prints } from '@/components/Prints'
import {Footer} from '@/components/Footer'
import React, { useState,useEffect } from 'react';


export default function Home() {

  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  

  // Update local storage when the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  const addToCart = (newItem) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevCart.findIndex(item => item.id === newItem.id);

      // If item is found, update quantity
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + (newItem.quantity || 1),
        };
        return updatedCart;
      } else {
        // Item not in cart, add as new item
        return [...prevCart, newItem];
      }
    });
  };

  return (
    <>
      <Header />
      <Slider />
      <Latest addToCart={addToCart} />
      <Prints />
      <Footer />
    </>
  )
}
