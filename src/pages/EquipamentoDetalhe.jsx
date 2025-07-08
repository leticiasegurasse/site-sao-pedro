// Exemplo: EquipamentoDetalhe simplificado com slugUtils
import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useParams, useNavigate, Link } from 'react-router-dom';
import equipamentos from '../mocks/equipamentosMock';
import { findEquipmentBySlug, slugToText } from '../utils/slugUtils';
import ContatoSection from '../components/ContatoSection';
import Container from '../components/Container';
import OptimizedImage from '../components/OptimizedImage';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EquipamentoDetalhe = () => {
  const { nome } = useParams();
  const navigate = useNavigate();
  const equipamento = findEquipmentBySlug(equipamentos, nome);

  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef(null);
  const sliderContainerRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  // Funções de controle do autoplay
  const startAutoplay = () => {
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(timer.current);
  };

  // Inicia autoplay ao montar
  useEffect(() => {
    if (!instanceRef.current) return;

    startAutoplay();

    return () => stopAutoplay();
  }, [instanceRef]);

  if (!equipamento) {
    return (
      <MainLayout>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Container className="py-16">
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
              <h2 className="text-2xl font-bold mb-4">Equipamento não encontrado</h2>
              <p className="text-gray-600 mb-4">
                O equipamento "{slugToText(nome)}" não foi encontrado em nosso catálogo.
              </p>
              <button onClick={() => navigate(-1)} className="text-red-600 underline">
                Voltar
              </button>
            </div>
          </Container>
        </motion.div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Breadcrumb */}
        <div className="bg-[#e30613] p-4 sm:p-5 flex items-center gap-2 text-white text-base sm:text-lg font-light">
          <Container fullWidth>
            <Link to="/equipamentos">
              <span>Equipamentos</span>
            </Link>
            <span className="mx-1">/</span>
            <span className="font-bold italic">{equipamento.nome}</span>
          </Container>
        </div>

        {/* Imagem/Vídeo principal do equipamento */}
        <section className="w-full z-100">
          {equipamento?.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src={equipamento.video} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          ) : (
            <div className="w-full mx-auto flex justify-center">
              <OptimizedImage
                src={equipamento.imagens[0].replace('/public', '')}
                alt={equipamento.nome}
                className="w-full h-auto object-contain shadow-md"
              />
            </div>
          )}
        </section>

        <div className="w-full flex flex-col md:flex-row">
          {/* Nome do equipamento */}
          <div className="md:w-1/2 w-full bg-[#e30613] flex items-center justify-center p-6 sm:p-8">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-center leading-tight">
              {equipamento.nome}
            </h2>
          </div>

          {/* Informações */}
          <div className="md:w-1/2 w-full bg-white flex flex-col justify-center p-6 sm:p-8 lg:p-15 gap-4 md:gap-6">
            {equipamento.informacoes?.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between text-base md:text-lg gap-1 sm:gap-0">
                <span className="font-bold">{item.chave}:</span>
                <span className="sm:text-right">{item.valor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slider com setas, autoplay, bolinhas e transição suave */}
        <div
          className="relative w-full bg-gray-100"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Slider */}
          <div
            ref={sliderRef}
            className="keen-slider transition-transform duration-500 ease-out"
          >
            {equipamento.imagens.map((img, idx) => (
              <div
                key={idx}
                className="keen-slider__slide transition-transform duration-500 ease-out"
              >
                <OptimizedImage
                  src={img.replace('/public', '')}
                  alt={`${equipamento.nome} - imagem ${idx + 1}`}
                  className="w-full h-[300px] sm:h-[450px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Setas */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden sm:flex cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md p-2 rounded-full z-10"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden sm:flex cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md p-2 rounded-full z-10"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>

          {/* Bolinhas */}
          <div className="flex justify-center gap-2 mt-4 py-2 bg-gray-100">
            {equipamento.imagens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentSlide === idx ? 'bg-red-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Outras versões */}
        <div className='bg-gray-100 w-full'>
          <Container className="py-6 md:py-10">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
              {/* Título */}
              <div className="md:w-1/4 w-full flex items-center justify-center md:justify-start mb-2 md:mb-0">
                <span className="font-bold italic text-xl md:text-2xl">Outras versões</span>
              </div>
              {/* Versões */}
              <div className="md:w-3/4 w-full">
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center md:justify-start">
                  {(equipamento.versoes).map((versao, idx) => (
                    <span key={idx} className="italic text-sm sm:text-base whitespace-nowrap text-center">{versao}</span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Informações Técnicas */}
        <Container className="py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Coluna da esquerda */}
            <div className="md:w-1/2 w-full">
              <h2 className="font-bold italic text-xl md:text-2xl mb-2">Informações Técnicas</h2>
              <div className="w-16 h-1 bg-[#e30613] mb-4 md:mb-6" />
              <ul className="list-disc pl-6 space-y-2">
                {(equipamento.informacoesTecnicas.slice(0, 10)).map((info, idx) => (
                  <li key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed">{info}</li>
                ))}
              </ul>
            </div>
            {/* Coluna da direita */}
            <div className="md:w-1/2 w-full mt-6 md:mt-0">
              <ul className="list-disc pl-6 space-y-2">
                {(equipamento.informacoesTecnicas.slice(10, 20)).map((info, idx) => (
                  <li key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed">{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        <ContatoSection />
      </motion.div>
    </MainLayout>
  );
};

export default EquipamentoDetalhe;