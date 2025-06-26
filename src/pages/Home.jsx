import React from 'react';
import EquipamentosSection from '../components/EquipamentosSection';
import DiferencialSection from '../components/DiferencialSection';
import LocalizacoesSection from '../components/LocalizacoesSection';
import ReferenciaSection from '../components/ReferenciaSection';
import MarcasSection from '../components/MarcasSection';
import ContatoSection from '../components/ContatoSection';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <EquipamentosSection />
      <DiferencialSection />
      <LocalizacoesSection />
      <ReferenciaSection />
      <MarcasSection />
      <ContatoSection />
    </MainLayout>
  );
};

export default Home; 