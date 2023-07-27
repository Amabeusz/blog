import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <main className='flex flex-col items-center'>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <Project/>
                <Project id={2}/>
                <Project id={2}/>
                <Project id={2}/>
                <Project id={2}/>
                <Project id={2}/>
            </div>
        </main>
    )
}

function Project({id = 1, post}: any) {
    // const {content, title, date} = post;

    const title = 'Lorem ipsum dolor sit amet'
    const date = '20.10.2023'
    const technologies = ['java', "react", 'typescript', "javaScript"]

    return (
        <Link href={`/projects/${id}`}>
            <div className='flex flex-col max-w-sm gap-2'>
                <Image className='place-self-center' src={'/favicon.ico'} alt={'test'}
                    width={200} height={100}></Image>
                <p className='text-3xl'>{title}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        technologies.map(technology => <Technology technology={technology}/>)
                    }
                </div>
            </div>
        </Link>
    );
}


function Technology({ technology}: {technology: string }) {
    return (
        <div className='backdrop-brightness-125 py-1 px-4 rounded-2xl'>
            <p>{technology}</p>
        </div>
    );
}