import categorias from '../mocks/categoriasMock'; // 1. Importar a fonte da verdade

// A função de slug continua útil
const createModelSlug = (modelName) => {
  return modelName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const TechnicalDocsService = {
  // 2. REESCREVER A FUNÇÃO PRINCIPAL PARA BUSCAR NO MOCK
  getModelDocuments: (categorySlug, modelName) => {
    // Encontra a categoria pelo slug
    const category = categorias.find(cat => cat.slug === categorySlug);
    if (!category) {
      return {}; // Retorna objeto vazio se a categoria não for encontrada
    }

    // Encontra o modelo pelo nome exato dentro da categoria
    const model = category.modelos.find(mod => mod.nome === modelName);
    if (!model) {
      return {}; // Retorna objeto vazio se o modelo não for encontrado
    }

    // Retorna o objeto de documentos do modelo, ou um objeto vazio se não existir
    return model.documentos || {};
  },

  // As funções abaixo agora funcionarão com a nova fonte de dados SEM precisar de alterações!
  getDocumentUrl: (categorySlug, modelName, documentType) => {
    const docs = TechnicalDocsService.getModelDocuments(categorySlug, modelName);
    return docs[documentType] || null;
  },

  hasDocument: (categorySlug, modelName, documentType) => {
    const url = TechnicalDocsService.getDocumentUrl(categorySlug, modelName, documentType);
    return !!url;
  },

  downloadDocument: (categorySlug, modelName, documentType) => {
    const url = TechnicalDocsService.getDocumentUrl(categorySlug, modelName, documentType);
    
    if (!url) {
      console.error(`Documento '${documentType}' não encontrado para o modelo '${modelName}'`);
      return false;
    }

    const link = document.createElement('a');
    link.href = url;
    // O nome do arquivo para download agora pode ser mais descritivo
    link.download = `${createModelSlug(modelName)}-${documentType}.pdf`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  },
  
  // Esta função continua a mesma, pois define os *tipos* de documentos que podem existir
  getAvailableDocumentTypes: () => {
    return [
      { key: 'desenho', label: 'Desenho Técnico' },
      // Adicione outros tipos aqui no futuro
      // { key: 'ficha', label: 'Ficha Técnica' },
    ];
  },
};

export default TechnicalDocsService;