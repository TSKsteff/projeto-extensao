// pages/contato.tsx
'use client';
import { Footer } from '@/components/footer';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nome: string;
  email: string;
  celular: string;
  assunto: string;
}

const Contato = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    celular: '',
    assunto: '',
  });



  return (
    <>
      <div className="max-w-xl mx-auto mt-5 p-5 rounded-md shadow-md  mb-10">
        <h1 className="text-2xl font-bold mb-5 text-center">Entrar em Contato</h1>
        <form  className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular:</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              value={formData.celular}
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assunto" className="block text-sm font-medium text-gray-700">Assunto:</label>
            <textarea
              id="assunto"
              name="assunto"
              value={formData.assunto}
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 min-h-32"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Contato;
