import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/app/component/layout_menu";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className='flex justify-between items-center border-b-2 border-gray-800 text-xl p-2'>
            <Link href='/'>
                <div className='flex'>
                    <Image src={'/ant-svgrepo-com.svg'} alt={'test'} width={35} height={35}></Image>
                    <Image src={'/ant-svgrepo-com.svg'} alt={'test'} width={35} height={35}></Image>
                    <Image src={'/ant-svgrepo-com.svg'} alt={'test'} width={35} height={35}></Image>
                    <Image src={'/ant-svgrepo-com.svg'} alt={'test'} width={35} height={35}></Image>
                </div>
            </Link>
            <div className='hidden md:flex space-x-6'>
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
            <Menu/>
        </div>
        {children}
        </body>
        </html>
    )
}
