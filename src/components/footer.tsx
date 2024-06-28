import Link from "next/link";
import music from '@/img/icone.png';
import face from '@/img/face.jpeg';
import insta from '@/img/insta.jpeg';
import youtu from '@/img/youtube.jpeg';
import ttok from '@/img/tiktok.jpeg';

export function Footer(props:any) {
  return (
    <div className="w-full flex justify-center py-3 px-20 border-b  bg-slate-100 border-gray-400">
      <div className="w-full md:w-10/12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={music.src} height={20} width={15} alt="Music Icon" />
          <div className="text-lg font-semibold">
            Auburg.music
            <div className="flex gap-3 items-center">
                    <Link href={'https://www.instagram.com/aubourgsamuel/'} target="_blank"><img src={insta.src} height={20} width={15}/></Link>
                    <Link href={'https://www.facebook.com/aubourg.samuel.9'} target="_blank"><img src={face.src} height={20} width={15}/></Link>
                    <Link href={'https://www.youtube.com/@samuelaubourg6427'} target="_blank"><img src={youtu.src} height={20} width={15}/></Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 font-normal">
            
            <div className="flex items-center gap-1">
                Whatssap:
                <input type="button" value={"47 99665-7908"} className="bg-blue-200 p-1 rounded-lg co"/> 
            </div>
        </div>
      </div>
    </div>
  );
}
