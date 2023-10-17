import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/ui/NavBar'

export default function Home() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main className="p-8 md:p-16 lg:p-24 rounded-md">
        <h1 className='text-4xl md:text-5xl text-gold text-center'>Patrol Procedures Basic</h1>
        <h2 className='mt-3 text-2xl md:text-3xl text-drkblue text-center'>Student Material</h2>
      </main>
    </body>
  )
}
