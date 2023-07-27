import compile from "@/app/[id]/components/compiler";

async function getPost(id : string) {

    return {
        title: 'Lorem ipsum dolor sit amet',
        date: '20.10.2023',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
    }
}

export default function PostPage({params} : any) {
    const content =
        `** bold **
        * italic *
        \`\`\`
            code1 
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code2
            code3
        \`\`\`
        * italic *
        code2
        code3
        > siema 
        > nara
        `

    return (
        <div className='flex flex-col items-center'>
            <Post content={compile(content)}/>
        </div>
    )
}

async function Post({content}: any) {
    const {title, date} = await getPost("1");
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

    return (
        <div className='max-w-2xl'>
            <div className='flex items-center'>
                <p className='flex-auto text-4xl'>{title}</p>
                <p className='text-gray-500 text-2xl'>{date}</p>
            </div>
            <p>{lorem}</p>
            <div className='flex flex-col p-2 border' dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}