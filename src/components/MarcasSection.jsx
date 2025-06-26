import React from 'react';

const MarcasSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center px-4 gap-4 md:gap-8">
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-xl md:text-3xl font-bold mb-2 text-center md:text-left">Marcas que usam<br/>São Pedro</h2>
          <div className="w-32 h-1 bg-red-600 mt-2"></div>
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 justify-items-center">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="w-full aspect-square bg-gray-100 rounded p-4 flex items-center justify-center">
              <img 
                src={`/images/logo${item}.png`} 
                alt={`Logo ${item}`} 
                className="w-full h-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarcasSection; 