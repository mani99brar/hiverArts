"use client";
import Image from 'next/image'
import React, { useState,useRef,useEffect } from 'react';
import axios from 'axios';

export const Painting = ({paintingId}) => {
  const [painting, setPainting] = useState(null);
  const fetchPainting = async () => {
    try {
      const response = await axios.post('http://localhost:3000/get-painting', { paintingId });
      setPainting(response.data); // Update state with the painting data
      console.log(painting);
    } catch (error) {
      console.error('Error fetching painting:', error);
      // Handle errors, such as showing an alert or updating the UI
    }
  };


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
    fetchPainting();
    // console.log(cart);
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
    // State to keep track of the selected size
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedFrame, setSelectedFrame] = useState('Print');
  const [quantity, setQuantity] = useState(1); // Start with a default quantity of 1


  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);

  // Effect to set the height of the first div equal to the second's
  useEffect(() => {
    if (firstDivRef.current && secondDivRef.current) {
      // Calculate the height of the second div
      const secondDivHeight = secondDivRef.current.offsetHeight;
      // Apply the height of the second div to the first div
      firstDivRef.current.style.height = `${secondDivHeight}px`;
    }
  }, [selectedSize, selectedFrame, quantity]);

  const handleQuantityChange = (e) => {
    // Ensure the quantity is always a number and not less than 1
    const newQuantity = Math.max(1, Number(e.target.value));
    setQuantity(newQuantity);
  };
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };
  // Function to update the selected size
  const handleSizeChange = (size) => {
    console.log(size);
    setSelectedSize(size);
  };
  const handleFrameChange = (frame) => {
    setSelectedFrame(frame);
  } 

  const handleAddToCart = () => {
    addToCart({
      id: paintingId,
      size: selectedSize,
      frame: selectedFrame,
      quantity,
    });
  };

 

  return (
    painting&&(<div className='w-[100%] h-[100vh] flex justify-center mt-8 mb-8'>
        <div className='lg:w-[70%] w-[95%] flex lg:flex-row flex-col lg:justify-between'>
            <div ref={firstDivRef} className='lg:w-[48%] w-[100%] relative no-scrollbar overflow-scroll flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center top-0 absolute justify-center'>
                  <div className='w-[100%] z-[10] absolute left-10 h-[100%]'></div>
                    <img className='w-[80%] rounded-md' src="p1.jpg" alt="" />
                    <div className='flex justify-between flex-wrap w-[100%] '>
                    <img className='w-[48%] mt-4 rounded-md' src="p1.jpg" alt="" />
                    <img className='w-[48%] mt-4 rounded-md' src="p1.jpg" alt="" />
                    <img className='w-[48%] mt-4 rounded-md' src="p1.jpg" alt="" />
              
                    </div>
                </div>
                
                
            </div>
            <div ref={secondDivRef} className='lg:w-[48%] flex flex-col justify-between h-[min] w-[100%]mb-8'>
                <h1 className='text-6xl mb-8'>{painting.name}</h1>
                <div className='flex items-center lg:mt-0 mt-4'>
                    <p className='mr-2 text-xl'>Rs. {painting.price}</p>
                    <p className='bg-black text-white p-2 rounded-md'>Exclusive</p>
                </div>
                <div>
                <p className='text-xl mt-4'>Size</p>
                 {painting.availableSizes.map((size, index) => (
                  <button key={index} className={`p-4 rounded-md border-2 ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}
                  onClick={() => handleSizeChange(size)}
                  >
                      {size}
                  </button>
                  ))}
                </div>
                <div>
                <p className='text-xl mt-4'>Frame</p>
                
                {painting.isPrint && (
                  <button
                    className={`p-4 rounded-md border-2 ${selectedFrame === 'Print' ? 'bg-black text-white' : 'bg-white'}`}
                    onClick={() => handleFrameChange('Print')}
                  >
                    Print
                  </button>
                )}

                {painting.isOriginal && (
                  <button
                    className={`p-4 rounded-md border-2 ${selectedFrame === 'Original' ? 'bg-black text-white' : 'bg-white'}`}
                    onClick={() => handleFrameChange('Original')}
                  >
                    Original
                  </button>
                )}
                </div>

                <div className='w-[50%]'>
                    <p className='text-xl mt-4'>Quantity</p>
                    <div className='flex items-center border-2 p-2 mt-4'>
        <button onClick={decrementQuantity} className='p-2'>-</button>
        <input
          className='border-0 text-center w-full'
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1" // Minimum value is 1
        />
        <button onClick={incrementQuantity} className='p-2'>+</button>
      </div>
                </div>

                <button onClick={handleAddToCart} className='border-2 w-[100%] p-2 mt-4'>Add to cart</button>
                <p className='mt-8 mb-6'>The Mona Lisa, painted by Leonardo da Vinci, captivates with her enigmatic smile, transcending time as an iconic masterpiece of art.</p>
                {/* <Link href={`/${paintingId}`} className='underline underline-offset-4'>View full details</Link> */}
            </div>
        </div>
        
    </div>)
  )
}
