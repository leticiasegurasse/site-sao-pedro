import React from 'react';
import Container from './Container';

const ReferenciaSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-between mb-8 md:mb-0">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                <span className="font-extrabold">Referência</span> em<br/>tecnologia
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-4 mx-auto md:mx-0"></div>
            </div>
            <div className="w-full aspect-[4/3] md:aspect-auto">
              <OptimizedImage 
                src="/images/Rectangle 6.png" 
                alt="Imagem 1" 
                className="w-full h-full object-cover rounded-lg shadow-md" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="w-full aspect-[4/3] md:aspect-auto h-full">
              <OptimizedImage 
                src="/images/Rectangle 5.png" 
                alt="Imagem 2" 
                className="w-full h-full object-cover rounded-lg shadow-md" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="w-full aspect-[4/3] md:aspect-auto h-full">
              <OptimizedImage 
                src="/images/Rectangle 4.png" 
                alt="Imagem 3" 
                className="w-full h-full object-cover rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReferenciaSection;