"use client";
import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Create a custom hook for using the cart context
export const useCart = () => useContext(CartContext);

// Define the provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    setCart(currentCart => {
      // Check if item is already in the cart
      const itemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);
      if (itemIndex > -1) {
        // If item is already in the cart, update the quantity
        const newCart = [...currentCart];
        newCart[itemIndex].quantity += item.quantity;
        return newCart;
      } else {
        // If item is not in the cart, add it
        return [...currentCart, item];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== itemId));
  };

  // Provide the context value
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
