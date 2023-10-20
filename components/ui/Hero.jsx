import { Button } from "./button";

export default function Hero() {
    return (
        <div className='mb-80 mt-56 h-96 justify-center items-start flex'>
            <div className="w-2/3 ml-64">
                <h1 className='text-7xl text-gold'>Patrol Procedures Basics</h1>
                <h4 className="mt-6 text-3xl">Get all of your student handouts in one click!</h4>
                <Button className='text-lg rounded-xl text-drkblue mt-16 p-6 border-2 shadow-lg hover:bg-gold hover:scale-110 transition ease-in-out border-gold' >Download</Button>
            </div>
            <div className="w-1/3">
                <img className='h-96 bg-cover bg-center' src="https://i.imgur.com/emaA70B.png" alt="Police Officer" />
            </div>

        </div>
    )
}