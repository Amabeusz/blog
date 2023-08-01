import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center">
                <p className='text-9xl'>TITLE</p>
                <div className='max-w-[60%]'>
                    <Post/>
                    <Post id={2}/>
                    <Link href={'/post/new'}>
                        Add new
                    </Link>
                </div>
            </div>
        </main>
    )
}

function Post({id = 1, post}: any) {
    // const {content, title, date} = post;

    const title = 'Lorem ipsum dolor sit amet'
    const date = '20.10.2023'
    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

    return (
        <Link href={`/post/${id}`}>
            <div className='flex flex-col py-4 border-b-2 border-gray-800'>
                <div className='flex items-center'>
                    <p className='flex-auto text-4xl'>{title}</p>
                    <p className='text-gray-500 text-lg'>{date}</p>
                </div>
                <p className='text-gray-400 pt-2'>{content}</p>
            </div>
        </Link>
    );
}

