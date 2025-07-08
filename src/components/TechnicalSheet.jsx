import React, { useState } from 'react';
import { Download, FileText, Book, Award, ChevronDown, ExternalLink, LayoutTemplate } from 'lucide-react';
import TechnicalDocsService from '../services/technicalDocsService';

const TechnicalSheet = ({ modelo, categoriaSlug }) => {
  // 1. A cláusula de guarda é a primeira coisa a ser executada para evitar erros.
  // Ela verifica se as props essenciais foram recebidas.
  if (!modelo || !categoriaSlug) {
    return null; // Não renderiza nada se os dados não estiverem prontos.
  }

  // 2. Estado para controlar a visibilidade do dropdown.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // 3. Obtém a lista de todos os tipos de documentos possíveis.
  const documentTypes = TechnicalDocsService.getAvailableDocumentTypes();
  
  // 4. Filtra para encontrar apenas os documentos que REALMENTE existem para este modelo.
  // Usamos as props corretas: `categoriaSlug` e `modelo.nome`.
  const availableDocuments = documentTypes.filter(type => 
    TechnicalDocsService.hasDocument(categoriaSlug, modelo.nome, type.key)
  );

  const handleDownload = (documentTypeKey) => {
    const success = TechnicalDocsService.downloadDocument(categoriaSlug, modelo.nome, documentTypeKey);
    if (success) {
      setIsDropdownOpen(false); // Fecha o dropdown após o clique
    }
  };

  // 5. Função auxiliar para mapear o nome do ícone para o componente de ícone real.
  // Troquei 'floorPlan' por 'LayoutTemplate' que é mais padrão em lucide-react.
  const getIcon = (iconName) => {
    const icons = {
      FileText,
      Blueprint: LayoutTemplate, // Renomeado para corresponder ao serviço
      Book,
      Award
    };
    return icons[iconName] || FileText; // Retorna um ícone padrão se não encontrar
  };

  // ==========================================================
  // LÓGICA DE RENDERIZAÇÃO CONDICIONAL (mantida da sua versão)
  // ==========================================================

  // Caso 1: Se não há documentos disponíveis.
  if (availableDocuments.length === 0) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow-md cursor-not-allowed opacity-70">
        <FileText className="w-4 h-4" />
        <span>Documentos em breve</span>
      </div>
    );
  }

  // Caso 2: Se há apenas UM documento, mostra um botão simples.
  if (availableDocuments.length === 1) {
    const doc = availableDocuments[0];
    const IconComponent = getIcon(doc.icon);
    
    return (
      <button
        onClick={() => handleDownload(doc.key)}
        className="bg-white cursor-pointer text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors border border-white/20 shadow-sm"
      >
        <IconComponent className="w-4 h-4" />
        <span className="hidden sm:inline font-semibold">{doc.label}</span>
        <span className="sm:hidden font-semibold">Doc</span>
        <Download className="w-4 h-4 ml-1" />
      </button>
    );
  }

  // Caso 3: Se há MÚLTIPLOS documentos, mostra o botão com dropdown.
  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white cursor-pointer text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors border border-white/20 shadow-sm"
      >
        <FileText className="w-4 h-4" />
        <span className="hidden sm:inline font-semibold">Documentos</span>
        <span className="sm:hidden font-semibold">Docs</span>
        <span className="bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ml-1">
          {availableDocuments.length}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Menu Dropdown */}
      {isDropdownOpen && (
        <>
          {/* Overlay para fechar o menu ao clicar fora */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
            <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
              Documentos Disponíveis
            </div>
            
            {availableDocuments.map((doc) => {
              const IconComponent = getIcon(doc.icon);
              
              return (
                <button
                  key={doc.key}
                  onClick={() => handleDownload(doc.key)}
                  className="w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-3 transition-colors"
                >
                  <div className="bg-red-50 p-1.5 rounded-md">
                    <IconComponent className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{doc.label}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TechnicalSheet;