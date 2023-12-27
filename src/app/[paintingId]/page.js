"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Painting } from '@/components/Painting';
export default function PaintingDetail() {
  const searchParams = useSearchParams();
 
  const painting = searchParams.get("p");

  useEffect(() => {
    // This code runs when `search` changes

    console.log("The value of 'p' query parameter is:", painting);
  }, [painting]);

  // Rest of your component logic...
  return (
    <>
      <Header />
      <Painting paintingId={painting}/>
      <Footer />
    </>
    
  );
}
