'use client'

import posts from '@/Arquivo';
import Post from '@/components/post';
import music from '@/img/event.jpg'
import { useRouter } from 'next/navigation';
export default function Home({ params }: { params: { id: string } }) {
    const id = params.id

    const findedPost = posts.find(p => p.id == id)
    
  return (
    <>
   <div style={{
            backgroundImage: `url(${findedPost.url ?? ''})`
        }} className=" w-full  flex justify-center items-center bg-center h-96 no-repeat bg-cover ">
      <div className="w-[1000px] z-40 text-center"> 
          <h2 className="text-white text-7xl font-bold bg-black bg-opacity-50 p-3 rounded-lg">
            {findedPost?.title}
          </h2>
        </div>
   </div>
   <div className="w-full flex justify-start items-center p-3 ml-5">
   {findedPost?.content}
    </div>
   </> 
  );
}