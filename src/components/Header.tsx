import Link from "next/link";
import music from '@/img/icone.png'
import face from '@/img/face.jpeg'
import insta from '@/img/insta.jpeg'
import youtu from '@/img/youtube.jpeg'
import ttok from '@/img/tiktok.jpeg'
export function Header(){
    return(
        <div className="w-full flex justify-center py-3 px-20 border-b bg-slate-100 border-gray-400">
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
                    
                    <Link href={'https://www.instagram.com/aubourgsamuel/'} target="_blank"><img src={insta.src} height={20} width={15}/></Link>
                    <Link href={'https://www.facebook.com/aubourg.samuel.9'} target="_blank"><img src={face.src} height={20} width={15}/></Link>
                    <Link href={'https://www.youtube.com/@samuelaubourg6427'} target="_blank"><img src={youtu.src} height={20} width={15}/></Link>
                    </div>
                </div>
            </div>  

        </div>
    );
}