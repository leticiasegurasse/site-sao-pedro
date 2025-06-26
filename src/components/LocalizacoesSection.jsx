import React from 'react';
import { Link } from 'react-router-dom';

const LocalizacoesSection = () => {
  return (
    <section className="w-full bg-red-600 mt-[60px] md:mt-[100px] relative">
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-cover">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(30)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-4 py-12 md:py-0 md:h-[400px]">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:pl-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">Estamos por<br/>todo o país</h2>
          <Link to="/localizacoes" className="bg-white text-red-600 font-bold px-6 md:px-8 py-3 rounded transition hover:bg-gray-100 w-max text-base md:text-lg shadow">
            Ver localizações
          </Link>
        </div>
        <div className="w-full md:w-7/12 flex justify-center relative z-10">
          <img src="/images/map.svg" alt="Mapa do Brasil" className="w-full h-auto drop-shadow-xl mt-0 md:mt-10" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default LocalizacoesSection; 