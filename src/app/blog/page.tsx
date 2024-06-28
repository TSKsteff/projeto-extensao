'use client'

import posts from '@/Arquivo';
import Post from '@/components/post';
import music from '@/img/event.jpg'
export default function Home() {
  return (
    <>
   <div className=" w-full  flex justify-center items-center bg-center h-96 no-repeat bg-cover bg-[url('https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg')]">
      <div className="w-[1000px] z-40 text-center"> 
          <h2 className="text-white text-7xl font-bold bg-black bg-opacity-50 p-3 rounded-lg">
            Aubourg-Show 
          </h2>
        </div>
   </div>
   <div className="w-full flex justify-center items-center py-4 bg-amber-950/50">
      <div className="w-[70%] z-40 flex flex-col gap-2"> 
        <div className="grid gap-2 grid-flow-col">
          {posts.slice(0,3).map(p =>  <Post id={p.id} className="col-span-8" url={p.url}  titulo={p.title} texto={p.content}/>)}
        </div>
        <div className="grid gap-2 grid-flow-col">
          {posts.slice(3,6).map(p =>  <Post id={p.id} className="col-span-8" url={p.url}  titulo={p.title} texto={p.content}/>)}
        </div>
      </div>

    </div>
   </> 
  );
}