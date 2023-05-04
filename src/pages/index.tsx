import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { oswald } from '@/fonts/font'


export default function Home() {
  return (
    <>
    <h1 className='text-4xl font-bold'>Learn every utilities with us !</h1>
      <Link href="/test">Test</Link>
      <Link href="/login">login</Link>
    </>
  )
}
