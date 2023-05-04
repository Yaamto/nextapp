import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { oswald } from '@/fonts/font'



export default function Home() {
  return (
    <div className='header'>
    <div className='flex pt-[150px] justify-around'> 
      <div className='flex flex-col items-start ml-[350px]'>
        <h1 className='text-[64px] font-bold'>SchoolFPS</h1>
        <p className='text-[40px] lg:w-2/3 w-100'>Learn everything about utilities and strategies on Counter Strike.</p>
        <button className='dark:bg-white dark:text-dmode bg-dmode text-white text-[23px] px-5 py-1 rounded mt-5'>Getting Started</button>
      </div>
      <Image src="/cs-hero.png" width={800} height={700} alt="" className='mr-[150px]'/>
    </div>
   
      {/* <div className='w-full h-[300px] dark:bg-[url("/dwave.svg")] bg-no-repeat absolute top-[580px] left-0'>

      </div> */}
    </div>
  )
}
