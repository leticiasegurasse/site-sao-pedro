import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import equipamentos from '../mocks/equipamentosMock';
import Container from './Container';
import OptimizedImage from '../components/OptimizedImage';

// Função para converter nome em slug
const createSlug = (nome) => {
  return nome
    .toLowerCase()
    .normalize('NFD') // Remove acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais exceto hífens e espaços
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens múltiplos
    .replace(/^-|-$/g, ''); // Remove hífens do início e fim
};

const EquipamentosSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-7 group relative inline-block w-full flex justify-center">
          <Link to="/equipamentos" className="relative inline-block pb-2 group">
            Implementos
            <div className="absolute left-0 bottom-0 h-1 bg-red-600 transition-all duration-300 w-full sm:w-0 sm:group-hover:w-full"></div>
            <ArrowRight className="w-5 h-5 inline-block ml-2 text-red-600 transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100" />
          </Link>
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center px-0 sm:px-4">
          {equipamentos.filter(e => e.destaque).map((equipamento) => {
            const slug = createSlug(equipamento.nome); // Criar slug do nome

            return (
              <div key={equipamento.nome} className="group bg-gray-100 overflow-hidden flex flex-col transition-all duration-500 ease-in-out 
      w-full md:w-[calc(25%-18px)] min-w-[260px] max-w-none sm:max-w-[350px] mx-0">
                <Link to={`/equipamentos/${slug}`}> {/* Usar slug ao invés de índice */}
                  <div className="relative h-[220px] overflow-hidden">
                    <OptimizedImage
                      src={equipamento.imagens[0]}
                      alt={equipamento.nome}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                    />
                    <div className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                  </div>

                  <div className="pt-4 px-4 flex-1 flex flex-col relative z-10 min-h-[90px]">
                    <span className="text-xl sm:text-2xl font-extrabold mb-2">{equipamento.nome}</span>
                  </div>
                  <div className="overflow-hidden max-h-[50px] transition-all duration-500 ease-in-out">
                    <span className="block pb-4 px-4 text-gray-500 italic flex items-center gap-2
    sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
    opacity-100 translate-y-0">
                      Visualizar
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default EquipamentosSection;