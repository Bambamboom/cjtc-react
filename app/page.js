import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/ui/NavBar'
import Grid from '@/components/ui/Grid'
import ListHandouts from '@/components/ui/HandoutList'
import Hero from '@/components/ui/Hero'

export default function Home() {
  return (
    <body className='mt-4'>
      <header>
        <NavBar />
      </header>
      <Hero />
      <main className="w-2/3 mx-auto rounded-md">
        <Grid />
        <div className='mt-32 mb-8'>
          <div>
            <ListHandouts />
          </div>
        </div>
      </main>
    </body>
  )
}
