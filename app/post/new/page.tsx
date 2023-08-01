'use client'

import compile from "@/app/post/[id]/components/compiler";
import {createRef, useState} from "react";

export default function NewPostPage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <main>
            <div className='flex flex-col items-center'>
                <div className='gap-2 mt-4 w-[75%] flex flex-col lg:flex-row'>
                    <div className='lg:w-[50%]'>
                        {/*<input type="text" className='w-full bg-transparent text-4xl p-1 outline-none overflow-auto'*/}
                        {/*       placeholder='Title...'*/}
                        {/*       onChange={e => setTitle(e.target.value)}></input>*/}
                        {/*<textarea rows={20} onChange={e => setContent(e.target.value)}*/}
                        {/*          className="backdrop-brightness-75 bg-transparent p-1 w-full outline-none"*/}
                        {/*          placeholder="Write an article..." required></textarea>*/}
                        <NewPostForm content={content} setContent={setContent}/>
                    </div>
                    <Preview title={title} content={compile(content)}/>
                </div>
                <button className='border p-4'>Post</button>
            </div>
        </main>
    );
}

function NewPostForm({content, setContent}: { content: string, setContent: Function }) {
    const textAreaRef = createRef();

    const putAroundSelection = (marker : string) => {
        let {selectionStart, selectionEnd} = textAreaRef.current
        return setContent(content.slice(0, selectionStart)
                         + ` ${marker} `
                         + content.slice(selectionStart, selectionEnd)
                         + ` ${marker} `
                        + content.slice(selectionEnd));
    }

    const putAtBegginingSelection = (marker : string) => {
        let {selectionStart, selectionEnd} = textAreaRef.current

        let l1 = content.slice(0, selectionStart).lastIndexOf('\n')


        return setContent(content.slice(0, l1)
                         + ` ${marker} `
                         + content.slice(l1))
    }

    return (
        <form>
            <div
                className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                        <div className="flex items-center space-x-1 sm:pr-4">
                            <button type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    onClick={event => putAroundSelection('**')}>
                                B
                            </button>
                            <button type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    onClick={event => putAroundSelection('*')}>
                                I
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                            <button type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    onClick={event => putAtBegginingSelection('1.')}>
                                OL
                            </button>
                            <button type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    onClick={event => putAtBegginingSelection('-')}>
                                UL
                            </button>
                            <button type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    onClick={event => putAroundSelection('```\n')}>
                                CODE
                            </button>
                            <button type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    onClick={event => putAroundSelection('*')}>
                                BLOCK
                            </button>

                        </div>
                    </div>
                </div>
                <div className="p-2 bg-gray-800">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea id="editor"
                              rows={20}
                              ref={textAreaRef}
                              className="w-full text-gray-200 bg-gray-800 placeholder-gray-400 outline-none"
                              placeholder="Write an article..."
                              required
                              value={content}
                              onChange={e => setContent(e.target.value)}/>
                </div>
            </div>
            {/*<button type="submit"*/}
            {/*        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">*/}
            {/*    Publish post*/}
            {/*</button>*/}
        </form>
    )
}

function Preview({title, content}: any) {
    return (
        <div className='border border-white lg:w-[50%] flex flex-col'>
            {/*<p className='text-4xl p-1 max-w-full overflow-hidden'>{title}</p>*/}
            {/*<div className='flex flex-row max-w-full'>*/}
            {/*    <p className='text-4xl p-1 grow'>{title}</p>*/}
            {/*    <p className='text-gray-500 text-2xl'>{new Date().toDateString()}</p>*/}
            {/*</div>*/}
            <div className='p-1 overflow-auto grow' dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}
