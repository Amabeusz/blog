'use client'

import Link from "next/link";
import React, {useState} from "react";

export default function Menu(){
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='md:hidden'>
            <button onClick={event => setShowMenu(!showMenu)}>open</button>
            <div
                className={`${showMenu ? '' : 'hidden'} absolute right-0 top-[53px] p-3 space-y-2 flex flex-col backdrop-brightness-75`}>
                <Link href='/'>
                    <p>Home</p>
                </Link>
                <Link href='/projects'>
                    <p>Projects</p>
                </Link>
                <Link href='/faq'>
                    <p>FAQ</p>
                </Link>
                <Link href='/contact'>
                    <p>Contact</p>
                </Link>
                <Link href='/about'>
                    <p>About</p>
                </Link>
            </div>
        </div>
    )
}