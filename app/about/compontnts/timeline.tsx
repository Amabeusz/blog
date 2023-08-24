export default function Timeline() {

    const milestones = ['1', '2', '1', '2', '1', '2', '1', '2',]


    return (
        <div className='w-full grid grid-cols-12 grid-rows-3'>
            <div className='col-span-2'>1</div>
            <div className='col-span-2'>3</div>
            <div className='col-span-2'>5</div>
            <div className='border border-gray-300 col-span-full'></div>
            <div className='col-span-2 text-center'>2</div>
            <div className='col-span-2 text-center'>4</div>
        </div>
    )
}