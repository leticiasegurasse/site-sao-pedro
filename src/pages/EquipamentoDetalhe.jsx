import MainLayout from '../layouts/MainLayout';
import { useParams, useNavigate } from 'react-router-dom';
import equipamentos from '../mocks/equipamentosMock';
import { useState } from 'react';
import ContatoSection from '../components/ContatoSection';

const EquipamentoDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const equipamento = equipamentos[Number(id)];
  const [imgIdx, setImgIdx] = useState(0);

  if (!equipamento) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <h2 className="text-2xl font-bold mb-4">Equipamento não encontrado</h2>
          <button onClick={() => navigate(-1)} className="text-red-600 underline">Voltar</button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <div className="bg-[#e30613] p-5 flex items-center gap-2 text-white text-lg font-light">
        <div className='w-full max-w-[1200px] mx-auto'>
          <span>Equipamentos</span>
          <span className="mx-1">/</span>
          <span className="font-bold italic">{equipamento.nome}</span>
        </div>
      </div>

      {/* Imagem principal do equipamento */}
      <div className="w-full mx-auto flex justify-center">
        <img
          src={equipamento.imagens[0].replace('/public', '')}
          alt={equipamento.nome}
          className="w-full h-auto object-contain shadow-md"
        />
      </div>

      {/* Seção de nome e informações */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Nome do equipamento */}
        <div className="md:w-1/2 w-full bg-[#e30613] flex items-center justify-center p-6 md:p-8">
          <h2 className="text-white text-3xl md:text-5xl font-bold italic text-center leading-tight">
            {equipamento.nome}
          </h2>
        </div>

        {/* Informações */}
        <div className="md:w-1/2 w-full bg-white flex flex-col justify-center p-6 md:p-15 gap-4 md:gap-6">
          {equipamento.informacoes?.map((item, index) => (
            <div key={index} className="flex justify-between text-base md:text-lg">
              <span className="font-bold">{item.chave}:</span>
              <span>{item.valor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Imagens */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <img
          src={equipamento.imagens[1].replace('/public', '')}
          alt={equipamento.nome}
          className="w-full md:w-[70%] md:h-80"
        />
        <img
          src={equipamento.imagens[2].replace('/public', '')}
          alt={equipamento.nome}
          className="w-full md:w-[30%] md:h-80"
        />
      </div>

      {/* Outras versões */}
      <div className='bg-gray-100 w-full'>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center py-6 md:py-10 px-2 md:px-4 mb-4 md:mb-8 gap-4 md:gap-0">
          {/* Título */}
          <div className="md:w-1/4 w-full flex items-center justify-center md:justify-start mb-2 md:mb-0">
            <span className="font-bold italic text-xl md:text-2xl">Outras versões</span>
          </div>
          {/* Versões */}
          <div className="md:w-3/4 w-full">
            <div className="flex flex-wrap gap-4 md:gap-10 justify-start">
              {(equipamento.versoes).map((versao, idx) => (
                <span key={idx} className="italic text-md whitespace-nowrap">{versao}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Informações Técnicas */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row py-6 md:py-10 px-2 md:px-4 gap-8 md:gap-0">
        {/* Coluna da esquerda */}
        <div className="md:w-1/2 w-full">
          <h2 className="font-bold italic text-xl md:text-2xl mb-2">Informações Técnicas</h2>
          <div className="w-16 h-1 bg-[#e30613] mb-4 md:mb-6" />
          <ul className="list-disc pl-6 space-y-2">
            {(equipamento.informacoesTecnicas.slice(0, 10)).map((info, idx) => (
              <li key={idx} className="text-base md:text-lg">{info}</li>
            ))}
          </ul>
        </div>
        {/* Coluna da direita */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <ul className="list-disc pl-6 space-y-2">
            {(equipamento.informacoesTecnicas.slice(10, 20)).map((info, idx) => (
              <li key={idx} className="text-base md:text-lg">{info}</li>
            ))}
          </ul>
        </div>
      </div>

      <ContatoSection />
    </MainLayout>
  );
};

export default EquipamentoDetalhe; 