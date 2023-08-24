export default function ContactPage() {

    return (
        <main className='flex flex-col items-center'>
            <div className='w-[60%] flex flex-col'>
                <div className='text-center'>
                    <p className='text-5xl'>Get in touch</p>
                    <p>Contact us</p>
                </div>
                <div className='grid grid-cols-3 items-stretch gap-2 h-60'>
                    <div className='grid place-items-center rounded-2xl hover:backdrop-brightness-150'>
                        <p>location</p>
                    </div>
                    <div className='grid place-items-center rounded-2xl hover:backdrop-brightness-150'>
                        <p>email</p>
                    </div>
                    <div className='grid place-items-center rounded-2xl hover:backdrop-brightness-150'>
                        <p>phone</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col justify-around'>
                        <label htmlFor='name'>Name</label>
                        <input id='name' className='rounded-lg text-xl p-1 outline-none bg-transparent border'/>
                        <label htmlFor='mail'>Mail</label>
                        <input id='mail' className='rounded-lg text-xl p-1 outline-none bg-transparent border'/>
                        <label htmlFor='phone'>Phone</label>
                        <input id='phone' className='rounded-lg text-xl p-1 outline-none bg-transparent border'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='message'>Message</label>
                        <input className='grow rounded-lg text-xl p-1 outline-none bg-transparent border' id='message'/>
                    </div>
                    <div className='flex col-span-2 justify-center'>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </main>
    );
}