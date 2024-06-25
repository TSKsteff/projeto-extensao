import React from 'react';
import music from '@/img/artist.jpg'
import tecladista from '@/img/tecladista.jpg'
import familia from '@/img/familia.jpg'
import eu from '@/img/eu.jpg'
import event from '@/img/event.jpg'
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
       <section className={`flex flex-col bg-fixed justify-center no-repeat bg-cover bg-cover-pattern text-gray-50 py-5 md:py-24`}>
          <div  className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 bg-white bg-opacity-50 p-5 rounded-lg">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Samuel Aubourg</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
              </p>
            </div>
            <img
              src={music.src}
              width="500"
              height="600"
              alt="Artist"
              className="mx-auto w-[300px] h-[450px] object-cover border border-white"
            />
          </div>
          <div  className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 mt-20 bg-white bg-opacity-50 p-5 rounded-lg">
            <img
              src={tecladista.src}
              width="450"
              height="600"
              alt="Artist"
              className="mx-auto w-[500px] h-[600px] object-cover"
            />
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Samuel Aubourg</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
              </p>
            </div>
          </div>
          <div  className="flex gap-2 items-center  w-10/12 mt-20 pr-3 bg-white bg-opacity-50 p-5 rounded-lg">
              <h2>BLOG</h2>
              <img src={familia.src} height={50} width={150}/>
              <img src={event.src} height={250} width={350}/>
              <img src={eu.src} height={50} width={150}/>
              <div>
                <input type="button" value={"Ver mais"} className='bg-sky-400 p-2 rounded-lg'></input>
              </div>
          </div>
        </section>
        </>
  );
}
