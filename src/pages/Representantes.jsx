import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ContatoSection from '../components/ContatoSection';
import BrazilMapInteractive from '../components/BrazilMapInteractive';
import Container from '../components/Container';
import contatos from '../mocks/representantesMock';
import { Phone, MapPin, Mail } from 'lucide-react';

const Representantes = () => {
  const [selectedState, setSelectedState] = useState(null);

  // Organizar estados por região
  const regioes = {
    'Norte': ['AC', 'AM', 'AP', 'PA', 'RO', 'RR', 'TO'],
    'Nordeste': ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
    'Centro-Oeste': ['DF', 'GO', 'MS', 'MT'],
    'Sudeste': ['ES', 'MG', 'RJ', 'SP'],
    'Sul': ['PR', 'RS', 'SC']
  };

  const estadosNomes = {
    'AC': 'Acre', 'AL': 'Alagoas', 'AP': 'Amapá', 'AM': 'Amazonas',
    'BA': 'Bahia', 'CE': 'Ceará', 'DF': 'Distrito Federal', 'ES': 'Espírito Santo',
    'GO': 'Goiás', 'MA': 'Maranhão', 'MT': 'Mato Grosso', 'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais', 'PA': 'Pará', 'PB': 'Paraíba', 'PR': 'Paraná',
    'PE': 'Pernambuco', 'PI': 'Piauí', 'RJ': 'Rio de Janeiro', 'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul', 'RO': 'Rondônia', 'RR': 'Roraima', 'SC': 'Santa Catarina',
    'SP': 'São Paulo', 'SE': 'Sergipe', 'TO': 'Tocantins'
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Nossos Representantes</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded" />
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Conheça nossa rede de representantes espalhados por todo o Brasil, 
              prontos para atender você com a qualidade São Pedro.
            </p>
          </div>
        </Container>
      </div>

      {/* Versão Desktop - Mapa Interativo */}
      <div className="hidden md:block">
        <BrazilMapInteractive />
      </div>

      {/* Versão Mobile - Lista de Estados */}
      <div className="block md:hidden">
        <Container className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Selecione seu estado
          </h2>
          
          {Object.entries(regioes).map(([regiao, estados]) => (
            <div key={regiao} className="mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2">
                {regiao}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {estados.map(sigla => {
                  const contato = contatos[sigla] || {
                    cidade: 'Em breve',
                    telefone: 'Aguarde novidades',
                    endereco: 'Escritório em planejamento',
                    email: 'contato@saopedro.ind.br'
                  };
                  
                  return (
                    <button
                      key={sigla}
                      onClick={() => setSelectedState(selectedState === sigla ? null : sigla)}
                      className="bg-gray-100 hover:bg-red-50 border border-gray-300 hover:border-red-300 rounded-lg p-4 text-left transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">
                          {estadosNomes[sigla]} ({sigla})
                        </span>
                        <span className={`text-red-600 transform transition-transform duration-300 ${
                          selectedState === sigla ? 'rotate-180' : ''
                        }`}>
                          ▼
                        </span>
                      </div>
                      
                      {selectedState === sigla && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 animate-in fade-in duration-300">
                          <div className="flex items-center gap-3 text-gray-700">
                            <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <span className="text-sm">{contato.cidade}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <a href={`tel:${contato.telefone.replace(/[^\d]/g, '')}`} 
                               className="text-sm hover:text-red-600 transition-colors">
                              {contato.telefone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <a href={`mailto:${contato.email}`} 
                               className="text-sm hover:text-red-600 transition-colors">
                              {contato.email}
                            </a>
                          </div>
                          <div className="text-sm text-gray-600 mt-2">
                            📍 {contato.endereco}
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </div>

      <ContatoSection />
    </MainLayout>
  );
};

export default Representantes;