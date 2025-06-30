import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import equipamentos from '../mocks/equipamentosMock';

const EquipamentosSection = () => {
  return (
    <section className="max-w-[1200px] min-h-[500px] mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-7 group relative inline-block w-full flex justify-center">
        <Link to="/equipamentos" className="relative inline-block pb-2">
          Equipamentos
          <div className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
          <ArrowRight className="w-5 h-5 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-600" />
        </Link>
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 justify-center items-center">
        {equipamentos.filter(e => e.destaque).map((equipamento, idx) => (
          <div key={equipamento.nome + idx} className="group bg-gray-100 overflow-hidden flex flex-col transition-all duration-500 ease-in-out w-full md:w-[calc(25%-18px)] flex-1 min-w-[260px] max-w-[350px] mx-auto relative">
            <Link to={`/equipamentos/${idx}`}>
              <div className="relative">
                <img src={equipamento.imagens[0]} alt={equipamento.nome} className="w-full h-55 object-cover transition-all duration-500 group-hover:h-40" />
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </div>
              <div className="pt-4 px-4 flex-1 flex flex-col justify-end relative z-10">
                <span className="text-2xl font-extrabold mb-2">{equipamento.nome}</span>
              </div>
              <div className="overflow-hidden max-h-0 group-hover:max-h-[50px] transition-all duration-500 ease-in-out">
                <span className="block pb-4 px-4 text-gray-500 italic flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Visualizar
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipamentosSection; 