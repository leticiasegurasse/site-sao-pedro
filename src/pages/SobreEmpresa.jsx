import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContatoSection from '../components/ContatoSection';

const SobreEmpresa = () => {
  return (
    <MainLayout>
      <div className="relative w-full">
        <img src="/images/imagem_sobre.png" alt="Empresa" className="w-full h-[500px] object-cover brightness-75" />
        <div className="absolute top-1/4 left-12 md:left-24 text-white">
          <h1 className="text-5xl md:text-6xl font-bold italic mb-4 drop-shadow-lg">A empresa</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">Conheça um pouco sobre<br />a nossa história</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-white">
        <div className="w-full md:w-1/2">
          <img 
            src="/images/soldador.png" 
            alt="Soldador trabalhando" 
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-normal mb-0">
            Há <span className="font-bold italic">64 anos</span> no mercado
          </h2>
          <div className="w-32 h-1 bg-red-700 my-4 rounded" />
          <p className="text-lg text-gray-800 leading-relaxed">
            Desde 1961, aliamos tradição, inovação e excelência, oferecendo soluções com qualidade, segurança e durabilidade para o transporte rodoviário em todo o Brasil.
          </p>
        </div>
      </div>
      {/* Nova seção Sobre, Missão, Visão, Valores */}
      <div className="flex flex-col md:flex-row min-h-[70vh]">
        {/* Lado esquerdo vermelho */}
        <div className="w-full md:w-1/2 bg-red-600 flex flex-col justify-center px-8 py-12 text-white">
          <h2 className="text-4xl font-bold mb-2">Sobre</h2>
          <div className="w-32 h-1 bg-white mb-8 rounded" />
          {/* Missão */}
          <div className="flex items-start mb-10">
            <div className="bg-white/30 rounded-lg p-3 mr-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Missão</h3>
              <p className="text-base font-normal">Produzir os melhores furgões e semirreboques do mercado, aliando tecnologia e mão de obra capacitada para oferecer sempre o melhor produto a nossos clientes.</p>
            </div>
          </div>
          {/* Visão */}
          <div className="flex items-start mb-10">
            <div className="bg-white/30 rounded-lg p-3 mr-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Visão</h3>
              <p className="text-base font-normal">Ser empresa referência em todo o Brasil como fabricante de implementos rodoviários, produzindo com qualidade e construindo relacionamentos duradouros.</p>
            </div>
          </div>
          {/* Valores */}
          <div className="flex items-start">
            <div className="bg-white/30 rounded-lg p-3 mr-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Valores</h3>
              <p className="text-base font-normal">Ética, transparência, crescimento sustentável, respeito e valorização de colaboradores, clientes e fornecedores.</p>
            </div>
          </div>
        </div>
        {/* Lado direito imagem */}
        <div className="w-full md:w-1/2">
          <img 
            src="/images/empresa.png" 
            alt="Fábrica da empresa" 
            className="w-full h-full object-cover max-h-[700px]"
          />
        </div>
      </div>
      {/* Seção Nossa história */}
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <h2 className="text-4xl font-normal mb-2">Nossa história</h2>
        <div className="w-32 h-1 bg-red-600 mb-8 rounded" />
        <p className="text-lg text-black mb-4">
          Com 64 anos de história, a São Pedro Implementos Rodoviários é referência no mercado de implementos rodoviários, atendendo ao setor de transportes leves, médios e pesados.<br/>
          Fundada em 1961, em Muriaé-MG, nossa empresa cresceu e hoje tem sua matriz em Itaperuna-RJ, além de filiais nos estados de Minas Gerais, Rio de Janeiro e São Paulo. Contamos com instalações modernas, tecnologia de ponta e uma equipe altamente qualificada para produzir furgões sobre chassis e semirreboques reconhecidos nacionalmente por sua qualidade e durabilidade.<br/>
          Somos uma das maiores fabricantes de furgões sobre chassis do Brasil, sempre comprometidos em oferecer segurança, inovação e eficiência para o transporte rodoviário. Nosso compromisso com a excelência e o respeito aos nossos clientes, colaboradores e parceiros é o que nos impulsiona a seguir evoluindo e entregando os melhores produtos do mercado.
        </p>
        <p className="font-bold text-lg text-black mt-8">São Pedro Implementos Rodoviários – Qualidade de ponta a ponta!</p>
      </div>
      <ContatoSection />
    </MainLayout>
  );
};

export default SobreEmpresa; 