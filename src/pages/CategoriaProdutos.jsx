import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams, useNavigate, Link } from "react-router-dom";
import categorias from "../mocks/categoriasMock";
import ContatoSection from "../components/ContatoSection";
import Container from "../components/Container";
import OptimizedImage from "../components/OptimizedImage";
import TechnicalSheet from "../components/TechnicalSheet";
import SpecsGrid from "../components/SpecsGrid";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";

const CategoriaProdutos = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const categoriaInfo = categorias.find((cat) => cat.slug === categoria);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  if (!categoriaInfo) {
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
              <h2 className="text-2xl font-bold mb-4">
                Categoria não encontrada
              </h2>
              <p className="text-gray-600 mb-4">
                A categoria solicitada não foi encontrada.
              </p>
              <button
                onClick={() => navigate("/equipamentos")}
                className="text-red-600 underline"
              >
                Voltar para Equipamentos
              </button>
            </div>
          </Container>
        </motion.div>
      </MainLayout>
    );
  }

  const allImages = [
    ...new Set(categoriaInfo.modelos.flatMap((m) => m.imagens)),
  ];

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
            <span className="font-bold italic">{categoriaInfo.nome}</span>
          </Container>
        </div>

        {/* Vídeo/Imagem principal */}
        <section className="w-full overflow-hidden h-[50vh] md:h-[56.25vw] md:h-[76vh]">
          {categoriaInfo?.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[50vh] md:h-full object-cover object-center"
            >
              <source src={categoriaInfo.video} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <OptimizedImage
                src={categoriaInfo.imagem}
                alt={categoriaInfo.nome}
                className="w-full h-full object-contain shadow-md"
              />
            </div>
          )}
        </section>

        {/* Header da Categoria */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {categoriaInfo.nome}
              </h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6 rounded" />
              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                {categoriaInfo.descricao}
              </p>
            </div>
          </Container>
        </div>
        <Container>
          <section className="pt-12 sm:pt-16">
            {/* SLIDER GERAL DA CATEGORIA */}
            {allImages.length > 0 && (
              <div className="relative mb-12">
                <div
                  ref={sliderRef}
                  className="keen-slider rounded-xl overflow-hidden shadow-lg"
                >
                  {allImages.map((img, idx) => (
                    <div key={idx} className="keen-slider__slide">
                      <OptimizedImage
                        src={img}
                        alt={`${categoriaInfo.nome} - imagem ${idx + 1}`}
                        className="w-full h-[450px] sm:h-[550px] object-cover"
                      />
                    </div>
                  ))}
                </div>

                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() => instanceRef.current?.prev()}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-2 rounded-full z-10 transition-all"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={() => instanceRef.current?.next()}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-2 rounded-full z-10 transition-all"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => instanceRef.current?.moveToIdx(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            currentSlide === idx
                              ? "bg-red-600 scale-110"
                              : "bg-white/70 hover:bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            {/* Informações Técnicas Gerais */}
          </section>
        </Container>
        <section className="py-12 sm:py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Características Gerais da {categoriaInfo.nome}
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-6 text-red-600 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Especificações Técnicas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoriaInfo.informacoesTecnicas.map((info, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">
                          {info}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6" />
                    <h3 className="text-lg font-bold">Linha Premium</h3>
                  </div>
                  <p className="text-sm opacity-90 mb-4">
                    {categoriaInfo.descricao}
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">
                      64 anos de experiência
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Vantagens da {categoriaInfo.nome}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Qualidade certificada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Tecnologia de ponta
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Assistência nacional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Garantia estendida
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Modelos Disponíveis */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Modelos e Configurações
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça todos os modelos disponíveis da {categoriaInfo.nome},
                com suas especificações técnicas e desenhos detalhados.
              </p>
            </div>

            {/* MUDANÇA 1: Layout em grid para os cards */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {categoriaInfo.modelos.map((modelo, modelIndex) => (
                <ModelCard
                  key={modelIndex}
                  modelo={modelo}
                  modelIndex={modelIndex}
                  categoria={categoriaInfo.nome}
                  categoriaSlug={categoriaInfo.slug}
                />
              ))}
            </div>
          </Container>
        </section>

        <ContatoSection />
      </motion.div>
    </MainLayout>
  );
};

// Componente para cada modelo (AGORA COM ÍCONE NO TÍTULO E LAYOUT SIMPLIFICADO)
const ModelCard = ({ modelo, modelIndex, categoria, categoriaSlug }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
      {/* Header do modelo */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            {/* MUDANÇA 2: Ícone movido para o cabeçalho do card */}
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold">{modelo.nome}</h3>
              {modelo.iconeEixo && (
                <img
                  src={`/icons/${modelo.iconeEixo}`}
                  alt={`Ícone de eixos para ${modelo.nome}`}
                  // A classe filter inverte a cor do SVG (preto para branco)
                  className="h-4 w-auto filter invert brightness-2"
                />
              )}
            </div>
            {/* <div className="flex items-center gap-3">
              <p className="text-red-100 text-sm opacity-90">
                Modelo {modelIndex + 1} da {categoria}
              </p>
              {modelo.destaque && (
                <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3 fill-current" />
                  Destaque
                </div>
              )}
            </div>*/}
          </div>
          <div className="flex-shrink-0">
            <TechnicalSheet modelo={modelo} categoriaSlug={categoriaSlug} />
          </div>
        </div>
      </div>

      {/* MUDANÇA 3: Corpo do card agora é uma coluna única */}
      <div className="p-6 space-y-6 bg-gray-50 flex-grow">
        <div>
          <h4 className="text-lg font-bold mb-4 text-red-600">
            Especificações Técnicas
          </h4>
          <SpecsGrid especificacoes={modelo.especificacoes} modelo={modelo} />
        </div>
        {modelo.versoes && modelo.versoes.length > 0 && (
          <div>
            {/*
            <h4 className="text-lg font-bold mb-3 text-red-600">
              Versões Disponíveis
            </h4>
            <div className="flex flex-wrap gap-2">
              {modelo.versoes.map((versao, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:shadow-sm transition-shadow"
                >
                  {versao}
                </span>
              ))}
            </div>
          */}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriaProdutos;
