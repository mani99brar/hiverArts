import Image from 'next/image'
import { Header } from '@/components/Header'
import { Latest } from '@/components/Latest' 
import {Slider} from '@/components/Slider'
import { Prints } from '@/components/Prints'
import {Footer} from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Latest />
      <Prints />
      <Footer />
    </>
  )
}
