import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContatoSection from '../components/ContatoSection';
import BrazilMap from '../components/BrazilMap';

const Representantes = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nossos Representantes</h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6 rounded" />
          <p className="text-xl max-w-3xl mx-auto">
            Conheça nossa rede de representantes espalhados por todo o Brasil, 
            prontos para atender você com a qualidade São Pedro.
          </p>
        </div>
      </div>

      <BrazilMap />

      <ContatoSection />
    </MainLayout>
  );
};

export default Representantes; 