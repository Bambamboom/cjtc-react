import { BsFileText } from 'react-icons/bs'

const handouts = [{
    id: 0,
    title: 'Patrol Procedures Concepts',
    desc: 'An overview of all concepts related to PPB.',
}, {
    id: 1,
    title: 'Interview Format',
    desc: 'General interview questions to be utilized during scenarios.',
}, {
    id: 2,
    title: 'Report Writing Format',
    desc: 'A template with guidelines for general report writing.',
}, {
    id: 3,
    title: 'PPB Key Learning Points',
    desc: 'Lesson teaching notes and learning points for all skills.',
}

]


export default function ListHandouts () {
    const listHandouts = handouts.map(handout => 
        <div className='w-full h-32 flex items-center justify-between p-4 rounded-md bg-gradient-to-br text-drkblue from-gold/50 to-gold col-span-1'>
                <div className='w-1/6'>
                    <BsFileText className='text-4xl' />
                </div>
                <div className='w-5/6'>
                    <h2 className='mr-5 text-2xl'>{handout.title}</h2>
                    <p>{handout.desc}</p>
                </div>
        </div>
    );
    return <div className='my-6 grid grid-cols-2 gap-4'>{listHandouts}</div>;
}