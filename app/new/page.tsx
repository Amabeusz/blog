'use client'

import compile from "@/app/[id]/components/compiler";
import {useState} from "react";

export default function NewPost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <main className='flex flex-col items-center'>
            <div className='flex justify-center w-full gap-2 mt-4'>
                <div className='flex flex-col'>
                    <input type="text" className='bg-transparent text-4xl p-1'
                           placeholder='Title...'
                           onChange={e => setTitle(e.target.value)}></input>
                    <textarea rows={20} onChange={e => setContent(e.target.value)}
                              className="backdrop-brightness-75 bg-transparent p-1"
                              placeholder="Write an article..." required></textarea>
                </div>
                <Preview title={title} content={compile(content)}/>
            </div>
            <button className='border p-4'>Post</button>
        </main>
    )
}

function Preview({title, content}: any) {
    return (
        <div className='w-1/2 flex flex-col'>
            <div className='flex items-center'>
                <p className='flex-auto text-4xl p-1'>{title}</p>
                <p className='text-gray-500 text-2xl'>{new Date().toDateString()}</p>
            </div>
            <div className='flex flex-col flex-grow p-1' dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}
