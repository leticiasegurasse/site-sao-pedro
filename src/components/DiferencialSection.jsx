import React from 'react';
import DiferencialCard from './DiferencialCard';

const DiferencialSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16 cursor-default">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-600 flex flex-col justify-center p-10">
            <h2 className="text-white text-4xl font-bold mb-4">Nosso<br/>diferencial</h2>
            <div className="w-40 h-1 bg-white"></div>
          </div>
          <DiferencialCard 
            title="Experiência"
            description="São 64 anos no mercado de implementos rodoviários atendendo ao setor de transportes leves, médios e pesados."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Vendas",
              description: "Estamos presentes em todo o Brasil através de nossos representantes."
            },
            {
              title: "Qualidade",
              description: "Aliando tecnologia e profissionais capacitados, a São Pedro Carretas e Furgões é Qualidade de ponta a ponta."
            },
            {
              title: "Durabilidade",
              description: "61 anos de experiência, corpo técnico qualificado e alta tecnologia é a fórmula para garantir um produto final de alta durabilidade."
            }
          ].map((item, index) => (
            <DiferencialCard 
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferencialSection; 