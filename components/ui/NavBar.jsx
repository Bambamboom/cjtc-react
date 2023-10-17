import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='mx-6 my-2'>
      <nav className='h-32 flex justify-between items-center'>
        <img src='https://i.imgur.com/guz3vQE.jpg' className='w-32 h-32' alt="CJTC Logo" />
        <div>
          <h1 className='text-4xl md:text-5xl text-gold text-center'>Patrol Procedures Basic</h1>
          <h2 className='mt-3 text-2xl md:text-3xl text-drkblue text-center'>Student Material</h2>
        </div>
        <ul>
          <li><Link href="/picker" className="bg-lightgray transition-colors duration-500 ease-out p-4 rounded-md mr-3 hover:scale-125 hover:bg-gold hover:text-drkblue">Skill Picker</Link></li>
        </ul>
      </nav>
      <hr className='w-2/3 mt-4 mx-auto bg-drkblue/50'/>
    </div>
  )
}
