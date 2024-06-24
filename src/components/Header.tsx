import Link from "next/link";
import music from '@/img/icone.png'
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
                </div>
            </div>  

        </div>
    );
}