'use client'

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
   <div className="w-full flex justify-center items-center bg-slate-100 py-4">
      <div className="w-[100%] z-40 flex flex-col gap-2"> 
        <div className="grid gap-2 grid-flow-col">
          <Post className="col-span-8" url={music} titulo="la sierra de Chihuahua" texto="
            Cada vez que llego a Chihuahua en donde la gran Sierra Madre Occidental me recibe y se impone con su belleza desde el vuelo, me adentro con la imaginación en sus enormes montañas y me pregunto.
            ¿En qué condiciones vivirán los Tarahumaras? y ¿Cómo están organizados para combatir el paso del tiempo, las inclemencias y las épocas de sequía?
            Ahí, entre esos hermosos accidentes geográficos y barrancas, habita una etnia que ha subsistido a los cambios de México, los tarahumaras quienes se autodenominan rarámuris...
          "/>
           <Post className="col-span-4" url='https://www.columbusecuador.com/wp-content/uploads/2021/08/quilotoa3-scaled.jpg' titulo="COTOPAXI NATIONAL PARK & QUILOTOA LOOP TOUR" texto="
          Alexander von Humboldt, um famoso explorador do século 19, apelidou o nome para esta área como a Avenida dos Vulcões, que é talvez a melhor descrição de uma das porções mais impressionantes da extensa Cordilheira dos Andes. Além das vistas incríveis, essas montanhas abrigam ricas culturas, história e tradições diferentes de qualquer outra no mundo. Descubra a forma perfeitamente coned de Cotopaxi e as encantadoras águas azul-turquesa e impressionantes paredes de crateras da Lagoa Quilotoa, tudo enquanto aproveita o tempo para aprender mais sobre as paisagens únicas de paramo e as encantadoras pessoas locais que têm chamado essas terras de lar por séculos.
          Originally published by Columbus Travel, generated on the following link: https://www.columbusecuador.com/our-destination/2-days-cotopaxi-quilotoa-loop/
          This content is copyright and may not be republished. Please contact us if you need more information about our products. ColumbusEcuador.com          
          "/> 
        </div>
        <div className="grid gap-2 grid-flow-col">
          <Post className="col-span-4" urli='https://images.pexels.com/photos/6134432/pexels-photo-6134432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' titulo="Trilha Condoriri e Tuni" texto="
          A Trilha Condoriri e Tuni é uma das rotas de trekking mais impressionantes na Cordilheira Real da Bolívia. Este percurso oferece vistas deslumbrantes dos Andes bolivianos, incluindo montanhas nevadas, lagos alpinos e paisagens naturais intocadas.
          "/>
          <Post className="col-span-4" urli='https://images.pexels.com/photos/7343379/pexels-photo-7343379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' titulo="Rainbow Mountain Vinicunca" texto="
            Rainbow Mountain tornou-se um destino turístico popular nos últimos anos, atraindo visitantes de todo o mundo. A caminhada até a montanha é desafiadora devido à alta altitude, mas oferece vistas deslumbrantes da paisagem andina circundante. A maioria das caminhadas começa no início da manhã de Cusco, envolvendo algumas horas de carro seguidas por várias horas de caminhada.          
          "/>
        </div>
      </div>

    </div>
   </> 
  );
}