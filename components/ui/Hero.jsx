import { Download } from "lucide-react"

export default function Hero() {
    return (
        <div className='mb-72 mt-48 h-96 justify-center items-start flex'>
            <div className="w-2/3 ml-64">
                <h1 className='text-7xl font-medium text-drkblue'>Patrol Procedures Basics</h1>
                <h4 className="mt-6 text-3xl">Get all of your student handouts in one click below!</h4>
                <div className='flex justify-start w-1/2 mt-16'>
                    <button className='flex p-4 pr-5 rounded-2xl bg-drkblue hover:scale-105 transition hover:ring ring-offset-4 ring-gold text-white'><Download className="mr-2"/>Download</button>
                    <button className='ml-12 p-4 font-medium rounded-2xl underline underline-offset-8 hover:scale-105 transition text-drkblue'>Details</button>
                </div>
            </div>
            <div className="w-1/3">
                <img className='h-72 bg-cover bg-center' src="https://i.imgur.com/guz3vQE.jpg" alt="CJTC" />
            </div>

        </div>
    )
}