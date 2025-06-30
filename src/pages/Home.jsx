import React from 'react';
import VideoSection from '../components/VideoSection';
import EquipamentosSection from '../components/EquipamentosSection';
import DiferencialSection from '../components/DiferencialSection';
import LocalizacoesSection from '../components/LocalizacoesSection';
import ReferenciaSection from '../components/ReferenciaSection';
import MarcasSection from '../components/MarcasSection';
import ContatoSection from '../components/ContatoSection';
import MainLayout from '../layouts/MainLayout';
import OptimizedImage from '../components/OptimizedImage';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <VideoSection />
        <EquipamentosSection />
        <DiferencialSection />
        <LocalizacoesSection />
        <ReferenciaSection />
        <MarcasSection />
        <ContatoSection />
      </motion.div>
    </MainLayout>
  );
};

export default Home; 