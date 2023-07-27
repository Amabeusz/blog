'use client'

import Image from "next/image";
import {useState} from "react";

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        '/anteater-svgrepo-com.svg',
        '/bee-svgrepo-com.svg',
        '/bison-svgrepo-com.svg',
        '/bulldog-svgrepo-com.svg',
        '/butterflyfish-svgrepo-com.svg']

    const previousImage = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }
    }

    const nextImage = () => {
        if(currentIndex < images.length-1){
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div className='flex justify-around items-center'>
            <button className='backdrop-brightness-125 p-4 rounded-full'
                    onClick={event => previousImage()}>{'<'}</button>
            {
                images.map((image, index) =>
                    <Image key={index} className={`h-full ${index == currentIndex ? '' : 'hidden'}`}
                           priority
                           src={image} alt={'test'} width={400} height={100}></Image>)
            }
            <button className='backdrop-brightness-125 p-4 rounded-full'
                    onClick={event => nextImage()}>{'>'}</button>
        </div>
    )
}