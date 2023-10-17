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
    title: 'Title',
    desc: 'Description of Handout material.',
}

]


export default function ListHandouts () {
    const listHandouts = handouts.map(handout => 
        <div className="p-6 h-32 grid grid-cols-3 border-2 rounded-md">
            <BsFileText className='text-2xl' />
            <h2>{handout.title}</h2>
            <p>{handout.desc}</p>
        </div>
    );
    return <div>{listHandouts}</div>;
}