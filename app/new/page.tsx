'use client'

import compile from "@/app/[id]/components/compiler";
import {useState} from "react";

export default function NewPost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <main className='flex justify-center gap-2 mt-4'>
            <div className='flex flex-col w-1/3'>
                <input type="text" className='bg-transparent border border-white'
                       onChange={e => setTitle(e.target.value)}></input>
                <textarea rows={20} onChange={e => setContent(e.target.value)}
                          className="backdrop-brightness-75 bg-transparent p-1"
                          placeholder="Write an article..." required></textarea>
            </div>
            <Preview title={title} content={compile(content)}/>


        </main>
    )
}

function Preview({title, content}: any) {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

    return (
        <div className='w-1/2 h-full'>
            <div className='flex items-center'>
                <p className='flex-auto text-4xl'>{title}</p>
                <p className='text-gray-500 text-2xl'>{'date'}</p>
            </div>
            {/*<p>{lorem}</p>*/}
            <div className='flex flex-col p-2 border ' dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}
