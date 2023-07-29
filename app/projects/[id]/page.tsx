import Image from "next/image";
import React from "react";
import ImageCarousel from "@/app/projects/[id]/component/image_carousel";

export default function ProjectPage() {
    return (
        <main className='flex flex-col items-center mt-4'>
            <Project/>
        </main>
    )
}

function Project({id = 1, post}: any) {
    const title = 'Lorem ipsum dolor sit amet'
    const technologies = ['java', "react", 'typescript', "javaScript", "react", 'typescript', "javaScript", "react", 'typescript', "javaScript"]

    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

    return (
        <div className='flex flex-col max-w-[60%] gap-4'>
            <ImageCarousel />
            <p className='text-5xl'>{title}</p>
            <div className='flex flex-wrap gap-2'>
                {
                    technologies.map((technology, index) => <Technology key={index} technology={technology}/>)
                }
            </div>
            <div className=''>
                <p className='text-2xl'>{content}</p>
                <br/>
                <p className='text-2xl'>{content}</p>
                <br/>
                <p className='text-2xl'>{content}</p>
            </div>
        </div>
    );
}


function Technology({technology}: { technology: string }) {
    return (
        <div className='backdrop-brightness-125 py-1 px-4 rounded-2xl'>
            <p>{technology}</p>
        </div>
    );
}