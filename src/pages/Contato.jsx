import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContatoCard from '../components/ContatoCard';

const contatos = [
  {
    title: 'Telefone',
    description: '(032) 3696-4444',
  },
  {
    title: 'Email',
    description: 'vendas@saopedro.ind.br',
  },
  {
    title: 'Sede',
    description: 'Rodovia BR 116, Km 710, Bairro Santa Helena, Muriaé-MG - CEP 36884-255',
  },
];

const Contato = () => {
  return (
    <MainLayout>
      <section className="max-w-[1200px] mx-auto flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Entre em contato</h1>
        <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-between items-center gap-3">
          {contatos.map((contato, idx) => (
            <div key={idx}>
              <ContatoCard
                title={contato.title}
                description={contato.description}
              />
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Contato; 