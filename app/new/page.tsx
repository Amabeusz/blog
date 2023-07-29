'use client'

import compile from "@/app/[id]/components/compiler";
import {useState} from "react";

export default function NewPostPage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <main>
            <div className='flex flex-col items-center'>
                <div className='gap-2 mt-4 w-[75%] flex flex-col lg:flex-row'>
                    <div className='lg:w-[50%]'>
                        <input type="text" className='w-full bg-transparent text-4xl p-1 outline-none overflow-auto'
                               placeholder='Title...'
                               onChange={e => setTitle(e.target.value)}></input>
                        <textarea rows={20} onChange={e => setContent(e.target.value)}
                                  className="backdrop-brightness-75 bg-transparent p-1 w-full outline-none"
                                  placeholder="Write an article..." required></textarea>
                    </div>
                    <Preview title={title} content={compile(content)}/>
                </div>
                <button className='border p-4'>Post</button>
            </div>
        </main>
    )
}

function Preview({title, content}: any) {
    return (
        <div className='border border-white lg:w-[50%] flex flex-col'>
            <p className='text-4xl p-1 max-w-full overflow-hidden'>{title}</p>
            {/*<div className='flex flex-row max-w-full'>*/}
            {/*    <p className='text-4xl p-1 grow'>{title}</p>*/}
            {/*    <p className='text-gray-500 text-2xl'>{new Date().toDateString()}</p>*/}
            {/*</div>*/}
            <div className='p-1 overflow-auto grow' dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}
