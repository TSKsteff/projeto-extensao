
'use client'

import { useRouter } from "next/navigation"

interface PostProps{
    id: string
    url: string
    texto: string
    titulo: string
    className: string
}

const Post = (props:PostProps) => {


    const router = useRouter()

    const url = props.url ?? ''
   
    return( 
        <div onClick={() => router.push(`/blog/${props.id}`)} style={{
            backgroundImage: `url(${url})`
        }} className={`flex flex-col justify-end rounded-md bg-no-repeat h-96 w-80  bg-cover ${props.className}`}>
            <h3 className="text-white font-semibold font-lg line-clamp-1 ml-1 mr-1 bg-black bg-opacity-50 p-2 rounded-lg">{props.titulo}</h3>
        </div>
    )
}

export default Post