import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContatoSection from '../components/ContatoSection';
import Container from '../components/Container';

const SobreEmpresa = () => {
  return (
    
    <MainLayout>

      {/* Hero Section com Container */}
      <div className="relative w-full">
        <img 
          src="/images/imagem_sobre.png" 
          alt="Empresa" 
          className="w-full h-[400px] sm:h-[500px] object-cover brightness-75" 
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">A empresa</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded" />
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Conheça um pouco sobre a nossa história
            </p>
          </div>
          </Container>
        </div>
      </div>
      
      {/* Seção 64 anos com Container */}
      <section className="min-h-[70vh] bg-white">
        <Container fullWidth noPadding>
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh]">
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/soldador.png" 
                alt="Soldador trabalhando" 
                className="w-full h-full object-cover max-h-[550px]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Container className="py-12 lg:py-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-0">
                  Há <span className="font-bold italic">64 anos</span> no mercado
                </h2>
                <div className="w-32 h-1 bg-red-700 my-4 rounded" />
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  Desde 1961, aliamos tradição, inovação e excelência, oferecendo soluções com qualidade, segurança e durabilidade para o transporte rodoviário em todo o Brasil.
                </p>
              </Container>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Seção Missão, Visão, Valores com Container */}
      <section className="min-h-[70vh]">
        <Container fullWidth noPadding>
          <div className="flex flex-col lg:flex-row min-h-[70vh]">
            {/* Lado esquerdo vermelho */}
            <div className="w-full lg:w-1/2 bg-red-600 flex flex-col justify-center py-12 text-white">
              <Container className="lg:pl-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Sobre</h2>
                <div className="w-32 h-1 bg-white mb-8 rounded" />
                
                {/* Missão */}
                <div className="flex items-start mb-8 lg:mb-10">
                  <div className="bg-white/30 rounded-lg p-3 mr-4 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">Missão</h3>
                    <p className="text-sm sm:text-base font-normal leading-relaxed">
                      Produzir os melhores furgões e semirreboques do mercado, aliando tecnologia e mão de obra capacitada para oferecer sempre o melhor produto a nossos clientes.
                    </p>
                  </div>
                </div>
                
                {/* Visão */}
                <div className="flex items-start mb-8 lg:mb-10">
                  <div className="bg-white/30 rounded-lg p-3 mr-4 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">Visão</h3>
                    <p className="text-sm sm:text-base font-normal leading-relaxed">
                      Ser empresa referência em todo o Brasil como fabricante de implementos rodoviários, produzindo com qualidade e construindo relacionamentos duradouros.
                    </p>
                  </div>
                </div>
                
                {/* Valores */}
                <div className="flex items-start">
                  <div className="bg-white/30 rounded-lg p-3 mr-4 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">Valores</h3>
                    <p className="text-sm sm:text-base font-normal leading-relaxed">
                      Ética, transparência, crescimento sustentável, respeito e valorização de colaboradores, clientes e fornecedores.
                    </p>
                  </div>
                </div>
              </Container>
            </div>
            
            {/* Lado direito imagem */}
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/empresa.png" 
                alt="Fábrica da empresa" 
                className="w-full h-full object-cover max-h-[700px]"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* Seção Nossa história */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-normal mb-2">Nossa história</h2>
          <div className="w-32 h-1 bg-red-600 mb-8 rounded" />
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Com 64 anos de história, a São Pedro Implementos Rodoviários é referência no mercado de implementos rodoviários, atendendo ao setor de transportes leves, médios e pesados.
            </p>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Fundada em 1961, em Muriaé-MG, nossa empresa cresceu e hoje tem sua matriz em Itaperuna-RJ, além de filiais nos estados de Minas Gerais, Rio de Janeiro e São Paulo. Contamos com instalações modernas, tecnologia de ponta e uma equipe altamente qualificada para produzir furgões sobre chassis e semirreboques reconhecidos nacionalmente por sua qualidade e durabilidade.
            </p>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Somos uma das maiores fabricantes de furgões sobre chassis do Brasil, sempre comprometidos em oferecer segurança, inovação e eficiência para o transporte rodoviário. Nosso compromisso com a excelência e o respeito aos nossos clientes, colaboradores e parceiros é o que nos impulsiona a seguir evoluindo e entregando os melhores produtos do mercado.
            </p>
            <p className="font-bold text-base sm:text-lg text-black mt-8">
              São Pedro Implementos Rodoviários – Qualidade de ponta a ponta!
            </p>
          </div>
        </Container>
      </section>
      
      <ContatoSection />
    </MainLayout>
  );
};

export default SobreEmpresa;