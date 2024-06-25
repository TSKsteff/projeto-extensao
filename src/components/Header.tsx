import Link from "next/link";
import music from '@/img/icone.png'
import face from '@/img/face.jpeg'
import insta from '@/img/insta.jpeg'
import youtu from '@/img/youtube.jpeg'
import ttok from '@/img/tiktok.jpeg'
export function Header(){
    return(
        <div className="w-full flex justify-center py-3 px-20 border-b border-gray-400">
            <div className="w-full md:w-10/12 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={music.src} height={20} width={15}/>
                    <div className="text-lg font-semibold">
                        Auburg.music
                    </div>
                </div>
                <div className="flex items-center gap-4 font-normal">
                    <Link href={'/'} className="no-underline" >
                        Sobre
                    </Link>
                    <Link href={'/blog'} className="no-underline">
                        Blog
                    </Link>
                    <Link href={'/calendar'} className="no-underline">
                        Calendário
                    </Link>
                    <Link href={'/contato'} className="no-underline">
                        Contato
                    </Link>
                    <div className="flex gap-2 items-center">
                        <img src={insta.src} height={20} width={15}/>
                        <img src={face.src} height={20} width={15}/>
                        <img src={youtu.src} height={20} width={15}/>
                        <img src={ttok.src} height={20} width={15}/>
                    </div>
                </div>
            </div>  

        </div>
    );
}