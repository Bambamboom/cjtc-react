import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='mx-6 my-2'>
      <nav className='flex justify-between items-center'>
        <img src='https://i.imgur.com/guz3vQE.jpg' className=' w-32 h-32' alt="CJTC Logo" />
        <ul>
          <li><Link href="/picker" className="bg-lightgray transition-colors duration-500 ease-out p-4 rounded-md mr-3 hover:scale-125 hover:bg-gold hover:text-drkblue">Skill Picker</Link></li>
        </ul>
      </nav>
    </div>
  )
}
