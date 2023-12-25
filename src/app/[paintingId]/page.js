
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Painting } from '@/components/Painting';
import { ExtraPainting } from '@/components/ExtraPainting';
const PaintingDetail = ({}) => {
 
  return (
    <div className='flex flex-col justify-between'>
      <Header />
      <Painting />
      <ExtraPainting />
      <Footer />
    </div>
  );
};



export default PaintingDetail;
