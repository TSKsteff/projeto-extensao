import Image from "next/image";
import music from '@/img/artist.jpg'
export default function Home() {
  return (
    <>
       <section className={`flex flex-col bg-fixed justify-center no-repeat bg-cover bg-cover-pattern text-gray-50 py-5 md:py-24`}>
          <div className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 ">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Samuel Aubourg</h1>
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
              className="mx-auto w-[250px] h-[400px] object-cover border border-white"
            />
          </div>
          <div className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 ">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Samuel Aubourg</h1>
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
              className="mx-auto w-[250px] h-[400px] object-cover border border-white"
            />
          </div>
          
            
        </section>
      
        </>
  );
}
