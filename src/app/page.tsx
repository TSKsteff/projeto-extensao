import React from 'react';
import music from '@/img/artist.jpg'
import tecladista from '@/img/tecladista.jpg'
import igreja from '@/img/igreja.jpg'
import eu from '@/img/eu.jpg'
import restaurante from '@/img/restaurante.jpg'
import { Footer } from '@/components/footer';
import Post from '@/components/post';
import Link from "next/link";

export default function Home() {
  return (
    <>
       <section className={`flex flex-col bg-fixed justify-center no-repeat bg-cover bg-cover-pattern text-gray-50 py-5 md:py-24`}>
          <div  className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 bg-white bg-opacity-50 p-5 rounded-lg">
            <div className="space-y-2">
              <h1 className="text-black text-4xl md:text-5xl font-bold">Samuel Aubourg</h1>
              <p className="text-gray-400 bg-black bg-opacity-50 p-3 rounded-lg">
              Músico, artista, professor e terapeuta musical. Ele compartilha sua paixão pela música ensinando novos talentos e utilizando a música como ferramenta terapêutica para promover bem-estar e equilíbrio.
              </p>
            </div>
            <img
              src={music.src}
              width="500"
              height="600"
              alt="Artist"
              className="mx-auto w-[300px] h-[450px] object-cover border border-white shadow-lg"
            />
          </div>
          <div  className="container grid gap-8 md:grid-cols-2 items-center  w-10/12 mt-20 bg-white bg-opacity-50 p-5 rounded-lg">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Samuel Aubourg <br /></h1>
              <ul className=' bg-black bg-opacity-50 p-3 rounded-lg'>
                  <li><strong>Músico:</strong> Talentoso e dedicado à sua arte.</li>
                  <li><strong>Artista:</strong> Multifacetado e criativo.</li>
                  <li><strong>Professor:</strong> Inspira e guia novos talentos.</li>
                  <li><strong>Terapeuta Musical:</strong> Utiliza a música para promover bem-estar e equilíbrio.</li>
                   <li><strong>Gravações de Estúdio:</strong> Produz e grava músicas em estúdios profissionais.</li>
                  <li><strong>Educação Musical:</strong> Promove a importância da educação musical na formação de indivíduos.</li>
                  <li><strong>Musicoterapia:</strong> Ajuda pacientes a superar desafios emocionais e físicos através da música.</li>
                  <li><strong>Instrumentista:</strong> Especialista em vários instrumentos musicais.</li>
                  <li><strong>Colaborações Artísticas:</strong> Trabalha com outros músicos e artistas em projetos colaborativos.</li>
                  <li><strong>Workshops e Palestras:</strong> Conduz workshops e palestras sobre música e terapia musical.</li>
                  <li><strong>Envolvimento Comunitário:</strong> Participa de iniciativas musicais comunitárias e projetos sociais.</li>
                  <li><strong>Eventos Culturais:</strong> Participa ativamente de eventos culturais promovendo a música e a arte.</li>
                </ul>
            </div>
            <img
              src={tecladista.src}
              width="450"
              height="600"
              alt="Artist"
              className="mx-auto w-[300px] h-[500px] object-cover border border-white shadow-lg"
            />
          </div>
          <div  className="container flex flex-col gap-4 items-center  w-10/12 mt-20 bg-white bg-opacity-50 p-3 rounded-lg">
              <h2 className='shadow-lg'>BLOG</h2>
              <div className='grid grid-flow-col items-center gap-4'>
                <Post texto="O Ensaio Musical da Igreja Zoe BC é um momento de profunda conexão espiritual através da música." 
                titulo="Ensaio Igreja Zoe BC" id='1' url={igreja.src} className={'col-span-5 shadow-lg'}/>
                <Post texto="Tive a oportunidade incrível de experimentar um dos melhores restaurantes de British Columbia." 
                titulo="Atração do Dia" id='2' url={restaurante.src} className={'col-span-5  shadow-lg'}/>
                <Post texto="Escolher as melhores músicas para uma cerimônia é essencial para criar o ambiente perfeito e emocionante." 
                titulo="Melhores musica para Ceremonha" id='5' url={eu.src} className={'col-span-5  shadow-lg'}/>
              </div>
              <div>
                <input type="button" value={"Ver mais"} className='bg-sky-400 p-2 rounded-lg shadow-lg'></input>
              </div>
          </div>
        </section>
        </>
  );
}
