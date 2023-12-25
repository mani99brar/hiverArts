"use client";
import Image from 'next/image'
import React, { useState,useRef,useEffect } from 'react';


export const Painting = () => {
    const paintingId = '2';
    // State to keep track of the selected size
  const [selectedSize, setSelectedSize] = useState('21cm x 30cm, 8.3inches x 11.7inches');
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
      console.log(secondDivHeight);
      console.log(firstDivRef.current.offsetHeight);
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
    setSelectedSize(size);
  };
  const handleFrameChange = (frame) => {
    setSelectedFrame(frame);
  } 

  



  return (
    <div className='w-[100%] h-[100vh] flex justify-center mt-8 mb-8'>
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
                <h1 className='text-6xl mb-8'>Mona Lisa</h1>
                <div className='flex items-center lg:mt-0 mt-4'>
                    <p className='mr-2 text-xl'>Rs. 1000</p>
                    <p className='bg-black text-white p-2 rounded-md'>Exclusive</p>
                </div>
                <div>
                <p className='text-xl mt-4'>Size</p>
                <button className={`p-4 rounded-md border-2 ${selectedSize === '21cm x 30cm, 8.3inches x 11.7inches' ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleSizeChange('21cm x 30cm, 8.3inches x 11.7inches')}
                >
                    21cm x 30cm, 8.3inches x 11.7inches
                </button>

                <button className={`p-4 rounded-md border-2 ${selectedSize === '30cm x 42cm, 11.7inches x 16.5inches' ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleSizeChange('30cm x 42cm, 11.7inches x 16.5inches')}
                >
                    30cm x 42cm, 11.7inches x 16.5inches
                </button>

                </div>
                <div>
                <p className='text-xl mt-4'>Frame</p>
                <button className={`p-4 rounded-md border-2 ${selectedFrame === 'Print' ? 'bg-black text-white' : 'bg-white'}`} onClick={() => handleFrameChange('Print')}>Print</button>
                <button className={`p-4 rounded-md border-2 ${selectedFrame === 'Original' ? 'bg-black text-white' : 'bg-white'}`} onClick={() => handleFrameChange('Original')} >Original</button>

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

                <button className='border-2 w-[100%] p-2 mt-4'>Add to cart</button>
                <p className='mt-8 mb-6'>The Mona Lisa, painted by Leonardo da Vinci, captivates with her enigmatic smile, transcending time as an iconic masterpiece of art.</p>
                {/* <Link href={`/${paintingId}`} className='underline underline-offset-4'>View full details</Link> */}
            </div>
        </div>
        
    </div>
  )
}
