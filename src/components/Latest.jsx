import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import axios from 'axios';

export const Latest = () => {
    const paintingId = '2';
    const [latestPainting, setLatestPainting] = useState({});

    useEffect(() => {
        // Function to fetch the latest painting
        const fetchLatestPainting = async () => {
            try {
                const response = await axios.post('http://localhost:3000/latestPainting'); // Adjust the URL as needed
                console.log("Latest painting:", response.data);
                setLatestPainting(response.data);
            } catch (error) {
                console.error("Error fetching the latest painting:", error);
            }
        };

        fetchLatestPainting();
    }, []); // Empty dependency array means this effect runs once on mount
  return (
    <div className='w-[100%] mt-8 flex justify-center'>
        <div className='lg:w-[60%] w-[95%] lg:h-[70vh]  flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] w-[100%] h-[50vh] flex justify-center'>
                <img className='h-[100%]' src={"p1.jpg"} alt="" />
            </div>
            <div className='lg:w-[50%] w-[100%]'>
                <h1 className='text-4xl mb-8 font-bold'>{latestPainting.name}</h1>
                <div className='flex items-center lg:mt-0 mt-4'>
                    <p className='mr-2 text-xl'>Rs. {latestPainting.price}</p>
                    <p className='bg-black text-white p-2 rounded-md'>Exclusive</p>
                </div>
                <button className='border-2 w-[100%] p-2 mt-4'>Add to cart</button>
                <p className='mt-8 mb-6'>The Mona Lisa, painted by Leonardo da Vinci, captivates with her enigmatic smile, transcending time as an iconic masterpiece of art.</p>
                <Link href={`/painting?p=${latestPainting._id}`} className='underline underline-offset-4'>View full details</Link>
            </div>
        </div>
        
    </div>
  )
}
