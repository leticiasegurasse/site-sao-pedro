// Exemplo: EquipamentoDetalhe simplificado com slugUtils
import MainLayout from '../layouts/MainLayout';
import { useParams, useNavigate } from 'react-router-dom';
import equipamentos from '../mocks/equipamentosMock';
import { findEquipmentBySlug, slugToText } from '../utils/slugUtils';
import ContatoSection from '../components/ContatoSection';
import Container from '../components/Container';
import OptimizedImage from '../components/OptimizedImage';

const EquipamentoDetalhe = () => {
  const { nome } = useParams();
  const navigate = useNavigate();
  const equipamento = findEquipmentBySlug(equipamentos, nome);

  if (!equipamento) {
    return (
      <MainLayout>
        <Container className="py-16">
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <h2 className="text-2xl font-bold mb-4">Equipamento não encontrado</h2>
            <p className="text-gray-600 mb-4">
              O equipamento "{slugToText(nome)}" não foi encontrado em nosso catálogo.
            </p>
            <button onClick={() => navigate(-1)} className="text-red-600 underline">
              Voltar
            </button>
          </div>
        </Container>
      </MainLayout>
    );
  
}


  return (
    <MainLayout>
      {/* Breadcrumb */}
      <div className="bg-[#e30613] p-4 sm:p-5 flex items-center gap-2 text-white text-base sm:text-lg font-light">
        <Container fullWidth>
          <a href={`/equipamentos/`}>
            <span>Equipamentos</span> 
          </a>
          <span className="mx-1">/</span>
          <span className="font-bold italic">{equipamento.nome}</span>
        </Container>
      </div>

      {/* Imagem principal do equipamento */}
      <div className="w-full mx-auto flex justify-center">
        <OptimizedImage
          src={equipamento.imagens[0].replace('/public', '')}
          alt={equipamento.nome}
          className="w-full h-auto object-contain shadow-md"
        />
      </div>

      {/* Seção de nome e informações */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Nome do equipamento */}
        <div className="md:w-1/2 w-full bg-[#e30613] flex items-center justify-center p-6 sm:p-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-center leading-tight">
            {equipamento.nome}
          </h2>
        </div>

        {/* Informações */}
        <div className="md:w-1/2 w-full bg-white flex flex-col justify-center p-6 sm:p-8 lg:p-15 gap-4 md:gap-6">
          {equipamento.informacoes?.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between text-base md:text-lg gap-1 sm:gap-0">
              <span className="font-bold">{item.chave}:</span>
              <span className="sm:text-right">{item.valor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Imagens */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <OptimizedImage
          src={equipamento.imagens[1].replace('/public', '')}
          alt={equipamento.nome}
          className="w-full md:w-[70%] h-60 sm:h-72 md:h-80 object-cover"
        />
        <OptimizedImage
          src={equipamento.imagens[2].replace('/public', '')}
          alt={equipamento.nome}
          className="w-full md:w-[30%] h-60 sm:h-72 md:h-80 object-cover"
        />
      </div>

      {/* Outras versões */}
      <div className='bg-gray-100 w-full'>
        <Container className="py-6 md:py-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            {/* Título */}
            <div className="md:w-1/4 w-full flex items-center justify-center md:justify-start mb-2 md:mb-0">
              <span className="font-bold italic text-xl md:text-2xl">Outras versões</span>
            </div>
            {/* Versões */}
            <div className="md:w-3/4 w-full">
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center md:justify-start">
                {(equipamento.versoes).map((versao, idx) => (
                  <span key={idx} className="italic text-sm sm:text-base whitespace-nowrap text-center">{versao}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Informações Técnicas */}
      <Container className="py-8 sm:py-10 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Coluna da esquerda */}
          <div className="md:w-1/2 w-full">
            <h2 className="font-bold italic text-xl md:text-2xl mb-2">Informações Técnicas</h2>
            <div className="w-16 h-1 bg-[#e30613] mb-4 md:mb-6" />
            <ul className="list-disc pl-6 space-y-2">
              {(equipamento.informacoesTecnicas.slice(0, 10)).map((info, idx) => (
                <li key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed">{info}</li>
              ))}
            </ul>
          </div>
          {/* Coluna da direita */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0">
            <ul className="list-disc pl-6 space-y-2">
              {(equipamento.informacoesTecnicas.slice(10, 20)).map((info, idx) => (
                <li key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed">{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <ContatoSection />
    </MainLayout>
  );
};

export default EquipamentoDetalhe;