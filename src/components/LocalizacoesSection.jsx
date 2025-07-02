import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import OptimizedImage from '../components/OptimizedImage';

const LocalizacoesSection = () => {
  return (
    <section className="w-full bg-red-600 mt-12 sm:mt-16 lg:mt-[100px] relative">
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
      <Container fullWidth className="relative">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-12 md:py-0 md:h-[400px]">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:pl-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Estamos por<br />todo o país
            </h2>
            <Link
              to="/representantes"
              className="bg-white text-red-600 font-bold px-6 md:px-8 py-3 rounded transition hover:bg-gray-100 w-max text-base md:text-lg shadow-lg"
            >
              Ver representantes
            </Link>
          </div>
          <div className="w-full md:w-7/12 flex justify-center relative">
            <OptimizedImage
              src="/images/map.svg"
              alt="Mapa do Brasil"
              className="w-[70%] h-auto drop-shadow-xl mt-0 md:mt-10 max-w-md md:max-w-none z-0"
              draggable="false"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocalizacoesSection;