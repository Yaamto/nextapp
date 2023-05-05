import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { oswald } from '@/fonts/font'
import Discover from '@/components/Discover'
import Strategie from '@/components/Strategie'



export default function Home() {
  return (
    <div>

    <div className='header'>
    <div className='md:flex pt-[150px] md:justify-around items-center'> 
      <div className='flex flex-col text-center md:text-start items-center md:items-start justify-center md:justify-start lg:ml-[200px] md:ml-[100px]  '>
        <h1 className='text-[64px] font-bold'>SchoolFPS</h1>
        <p className='text-[40px] w-100'>Learn everything about utilities and strategies on Counter Strike.</p>
        <button className='dark:bg-white dark:text-dmode bg-dmode text-white text-[23px] px-5 py-1 rounded mt-5'>Getting Started</button>
      </div>
      <div className='lg:mr-[150px]  md:w-50 xl:w-100 hidden md:block'>
        <Image src="/cs-hero.png" width={800} height={700} alt="" className=''/>
      </div>
    </div>
    </div>
    <Strategie />
    <Discover />
    </div>
  )
}
