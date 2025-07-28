import React from 'react';
import Container from './Container';
import OptimizedImage from '../components/OptimizedImage';

const MarcasSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-8 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center md:text-left leading-tight">
              Marcas que usam<br />São Pedro
            </h2>
            <div className="w-32 h-1 bg-red-600 mt-2"></div>
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <div key={item} className="w-full aspect-square bg-gray-100 rounded-lg p-3 sm:p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <OptimizedImage
                  src={`/images/logo${item}.png`}
                  alt={`Logo ${item}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarcasSection;