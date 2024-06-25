
'use client'

const Post = (props:any) => {

    return( 
        <div className={`py-4 px-5 flex flex-col justify-end rounded-md no-repeat h-60 bg-cover bg-[url('https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ${props.className}`}>
            <h3 className="text-white font-semibold font-lg line-clamp-1 ">{props.titulo}</h3>
            <p className="text-white font-sm line-clamp-2">{props.texto}</p>
        </div>
    )
}

export default Post