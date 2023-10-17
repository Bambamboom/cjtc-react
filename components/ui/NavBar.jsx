import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='mx-6 my-2'>
      <nav className='h-32 flex justify-between items-center'>
        <Image src='/img/cjtc.jpg' width={300} height={300} alt="CJTC Logo" />
        <ul>
          <li><Link href="/picker" className="bg-lightgray transition-colors duration-500 ease-out p-4 rounded-md mr-3 hover:scale-125 hover:bg-gold hover:text-drkblue">Skill Picker</Link></li>
        </ul>
      </nav>
      <hr className='w-2/3 mx-auto bg-drkblue'/>
    </div>
  )
}
