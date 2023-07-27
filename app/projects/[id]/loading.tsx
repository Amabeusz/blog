import React from "react";
import ImageCarousel from "@/app/projects/[id]/component/image_carousel";

export default function ProjectPage() {
    return (
        <main className='flex flex-col items-center mt-4'>
        {/*<div className='flex flex-col max-w-[75%] gap-4'>*/}
        {/*    <ImageCarousel />*/}
        {/*    <p className='text-5xl'>adsdasasd</p>*/}
        {/*    <div className='flex flex-wrap gap-2'>*/}
        {/*    </div>*/}
        {/*    <div className=''>*/}
        {/*        <p className='text-2xl'>dasdsdass</p>*/}
        {/*    </div>*/}
        {/*</div>*/}
            <p>LOADING</p>
        </main>
    );
}


function Technology({technology}: { technology: string }) {
    return (
        <div className='backdrop-brightness-125 py-1 px-4 rounded-2xl'>
            <p>{technology}</p>
        </div>
    );
}