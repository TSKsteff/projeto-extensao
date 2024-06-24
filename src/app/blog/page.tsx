'use client'

import music from '@/img/artist.jpg'
export default function Blog() {
  

 
    return (
      <section className="flex justify-center bg-gray-950 text-gray-50 py-12 md:py-24">
         <div className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 ">
           <div className="space-y-4">
             <h1 className="text-4xl md:text-5xl font-bold">Artist Name</h1>
             <p className="text-gray-400">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
               nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
             </p>
           </div>
           <img
             src={music.src}
             width="450"
             height="600"
             alt="Artist"
             className="mx-auto w-[300px] h-[300px] object-cover border border-white"
           />
         </div>
         <div className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 ">
           <img
             src={music.src}
             width="450"
             height="600"
             alt="Artist"
             className="mx-auto w-[300px] h-[300px] object-cover border border-white"
           />
           <div className="space-y-4">
             <h1 className="text-4xl md:text-5xl font-bold">Artist Name</h1>
             <p className="text-gray-400">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
               nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
             </p>
           </div>
         </div>
         <div className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 ">
           <div className="space-y-4">
             <h1 className="text-4xl md:text-5xl font-bold">Artist Name</h1>
             <p className="text-gray-400">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
               nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
             </p>
           </div>
           <img
             src={music.src}
             width="450"
             height="600"
             alt="Artist"
             className="mx-auto w-[300px] h-[300px] object-cover border border-white"
           />
         </div>
       </section>
  );
}
