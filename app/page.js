import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/ui/NavBar'
import HeroGrid from '@/components/ui/HeroGrid'
import ListHandouts from '@/components/ui/HandoutList'

export default function Home() {
  return (
    <body className='mt-4'>
      <header className='mb-16'>
        <NavBar />
      </header>
      <main className="w-2/3 mt-24 mx-auto rounded-md">
        <HeroGrid />
        <div className='mt-12 mb-8 w-1/2'>
          <h1 className='text-4xl text-gold'>Student Handouts</h1>
          <ListHandouts />
        </div>
      </main>
    </body>
  )
}
