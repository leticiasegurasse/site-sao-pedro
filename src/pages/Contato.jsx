import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContatoCard from '../components/ContatoCard';
import Container from '../components/Container';
import OptimizedImage from '../components/OptimizedImage';
import { motion } from 'framer-motion';

const contatos = [
  {
    title: 'Telefone',
    description: '(32) 3696-4444',
    link: 'tel:3236964444'
  },
  {
    title: 'Email',
    description: 'vendas@saopedro.ind.br',
    link: 'mailto:vendas@saopedro.end.br'
  },
  {
    title: 'Sede',
    description: 'Rodovia BR 116, Km 710, Bairro Santa Helena, Muriaé-MG - CEP 36884-255',
    link: 'https://maps.app.goo.gl/BkwXiBBJndAQGnYZ9'
  },
];

const Contato = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Container className="py-12 sm:py-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
              Entre em contato
            </h1>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-4 lg:gap-6">
              {contatos.map((contato, idx) => (
                <div key={idx} className="w-full max-w-sm lg:max-w-none lg:flex-1">
                  <a
                    href={contato.link}
                    target={contato.title === "Sede" ? "_blank" : "_self"}
                    rel={contato.title === "Sede" ? "noopener noreferrer" : undefined}
                  >
                    <ContatoCard
                      title={contato.title}
                      description={contato.description}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </motion.div>
    </MainLayout>
  );
};

export default Contato;