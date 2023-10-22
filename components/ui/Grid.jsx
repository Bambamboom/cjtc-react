import Link from 'next/link'
import Image from 'next/image'
import "../../app/globals.css";

export default function Grid() {
  return (
    <div className='mt-12 w-full h-96 grid grid-cols-3 grid-rows-2 gap-2'>
        <div className='w-full col-span-2 row-span-2 bg-cover bg-center rounded-md' style = {{
      backgroundImage:
      'url("https://i.imgur.com/fZWkMxW.png")',
   }}>
          <div className='ml-4 mr-auto mt-4 p-2 transition bg-black/60 w-3/4 rounded-md'>
            <h1 className='h-192 text-gold text-2xl'>MASTER PPB DOWNLOAD</h1>
            <h2 className='text-white text-sm'>Includes all student handouts for PPB.</h2>
          </div>
        </div>
        <div className='col-span-1 row-span-1 bg-cover bg-center rounded-md' style = {{
      backgroundImage:
      'url("https://i.imgur.com/dR33EBV.png")',
   }}>
          <div className='ml-4 mr-auto mt-4 p-2 bg-black/60 w-3/4 rounded-md'>
            <h1 className='text-gold text-lg'>EXTERNAL RESOURCES</h1>
            <h2 className='text-white text-sm'>*Some information may be inaccurate or outdated.*</h2>
          </div>
        </div>
        <div className='col-span-1 row-span-1 bg-cover bg-center rounded-md' style = {{
      backgroundImage:
      'url("https://i.imgur.com/IwSMDcy.png")',
   }}>
          <div className='ml-4 mr-auto mt-4 p-2 bg-black/60 w-3/4 rounded-md'>
            <h1 className='text-gold text-lg'>PPB OVERVIEW</h1>
            <h2 className='text-white text-sm'>Introductory Documents to the Patrol Procedures Basic Curriculum.</h2>
          </div>
        </div>
    </div>
  )
}
