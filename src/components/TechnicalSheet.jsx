// src/components/TechnicalSheet.jsx
import React, { useState } from 'react';
import { Download, FileText, Star, Book, Award, ChevronDown, ExternalLink } from 'lucide-react';
import { floorPlan } from '@lucide/lab';
import TechnicalDocsService from '../services/technicalDocsService';

const TechnicalSheet = ({ modelo, categoria }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Converter categoria para slug
  const categorySlug = categoria.toLowerCase().replace(/\s+/g, '-');
  
  // Obter documentos disponíveis
  const documents = TechnicalDocsService.getModelDocuments(categorySlug, modelo.nome);
  const documentTypes = TechnicalDocsService.getAvailableDocumentTypes();
  
  // Filtrar apenas documentos que existem
  const availableDocuments = documentTypes.filter(type => 
    TechnicalDocsService.hasDocument(categorySlug, modelo.nome, type.key)
  );

  const handleDownload = (documentType) => {
    const success = TechnicalDocsService.downloadDocument(categorySlug, modelo.nome, documentType);
    if (success) {
      setIsDropdownOpen(false);
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      FileText,
      floorPlan,
      Book,
      Award
    };
    return icons[iconName] || FileText;
  };

  // Se não há documentos disponíveis, retorna versão simples
  if (availableDocuments.length === 0) {
    return (
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-3 border border-gray-300">
        <div className="flex items-center gap-2 text-gray-600">
          <FileText className="w-4 h-4" />
          <span className="text-sm">Documentos em breve</span>
        </div>
      </div>
    );
  }

  // Se há apenas um documento, mostra botão simples
  if (availableDocuments.length === 1) {
    const doc = availableDocuments[0];
    const IconComponent = getIcon(doc.icon);
    
    return (
      <button
        onClick={() => handleDownload(doc.key)}
        className="bg-white text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors border border-white/20 shadow-sm"
      >
        <IconComponent className="w-4 h-4" />
        <span className="hidden sm:inline">{doc.label}</span>
        <span className="sm:hidden">Docs</span>
        <Download className="w-3 h-3" />
      </button>
    );
  }

  // Se há múltiplos documentos, mostra dropdown
  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors border border-white/20 shadow-sm"
      >
        <FileText className="w-4 h-4" />
        <span className="hidden sm:inline">Documentos</span>
        <span className="sm:hidden">Docs</span>
        <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
          {availableDocuments.length}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
            <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
              Documentos Técnicos
            </div>
            
            {availableDocuments.map((doc) => {
              const IconComponent = getIcon(doc.icon);
              
              return (
                <button
                  key={doc.key}
                  onClick={() => handleDownload(doc.key)}
                  className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                >
                  <div className="bg-red-100 p-1.5 rounded">
                    <IconComponent className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{doc.label}</div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
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