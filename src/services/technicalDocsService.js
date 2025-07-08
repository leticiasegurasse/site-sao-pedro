// src/services/technicalDocsService.js

// Simulação de uma base de dados de documentos técnicos
const technicalDocuments = {
  'linha-bau': {
    'semirreboque-bau-02-eixos-juntos': {
      ficha: '/docs/fichas/bau-2-eixos-juntos-ficha.pdf',
      desenho: '/docs/desenhos/bau-2-eixos-juntos-desenho.pdf',
      manual: '/docs/manuais/bau-2-eixos-juntos-manual.pdf',
      certificado: '/docs/certificados/bau-2-eixos-juntos-cert.pdf'
    },
    'semirreboque-bau-02-eixos-distanciados': {
      ficha: '/docs/fichas/bau-2-eixos-distanciados-ficha.pdf',
      desenho: '/docs/desenhos/bau-2-eixos-distanciados-desenho.pdf',
      manual: '/docs/manuais/bau-2-eixos-distanciados-manual.pdf',
      certificado: '/docs/certificados/bau-2-eixos-distanciados-cert.pdf'
    },
    'semirreboque-bau-03-eixos-juntos': {
      ficha: '/docs/fichas/bau-3-eixos-juntos-ficha.pdf',
      desenho: '/docs/desenhos/bau-3-eixos-juntos-desenho.pdf',
      manual: '/docs/manuais/bau-3-eixos-juntos-manual.pdf',
      certificado: '/docs/certificados/bau-3-eixos-juntos-cert.pdf'
    }
  },
  'linha-sider': {
    'semirreboque-sider-02-eixos-juntos': {
      ficha: '/docs/fichas/sider-2-eixos-juntos-ficha.pdf',
      desenho: '/docs/desenhos/sider-2-eixos-juntos-desenho.pdf',
      manual: '/docs/manuais/sider-2-eixos-juntos-manual.pdf',
      certificado: '/docs/certificados/sider-2-eixos-juntos-cert.pdf'
    },
    'semirreboque-sider-03-eixos-bebideiro': {
      ficha: '/docs/fichas/sider-3-eixos-bebideiro-ficha.pdf',
      desenho: '/docs/desenhos/sider-3-eixos-bebideiro-desenho.pdf',
      manual: '/docs/manuais/sider-3-eixos-bebideiro-manual.pdf',
      certificado: '/docs/certificados/sider-3-eixos-bebideiro-cert.pdf'
    }
  },
  'linha-carga-seca': {
    'semirreboque-carga-seca-02-eixos-juntos': {
      ficha: '/docs/fichas/carga-seca-2-eixos-ficha.pdf',
      desenho: '/docs/desenhos/carga-seca-2-eixos-desenho.pdf',
      manual: '/docs/manuais/carga-seca-2-eixos-manual.pdf',
      certificado: '/docs/certificados/carga-seca-2-eixos-cert.pdf'
    }
  },
  'linha-graneleira': {
    'semirreboque-graneleiro-02-eixos-juntos': {
      ficha: '/docs/fichas/graneleira-2-eixos-ficha.pdf',
      desenho: '/docs/desenhos/graneleira-2-eixos-desenho.pdf',
      manual: '/docs/manuais/graneleira-2-eixos-manual.pdf',
      certificado: '/docs/certificados/graneleira-2-eixos-cert.pdf'
    }
  },
  'linha-porta-container': {
    'semirreboque-porta-container-20-pes': {
      ficha: '/docs/fichas/vpc-20-pes-ficha.pdf',
      desenho: '/docs/desenhos/vpc-20-pes-desenho.pdf',
      manual: '/docs/manuais/vpc-20-pes-manual.pdf',
      certificado: '/docs/certificados/vpc-20-pes-cert.pdf'
    },
    'semirreboque-porta-container-40-pes': {
      ficha: '/docs/fichas/vpc-40-pes-ficha.pdf',
      desenho: '/docs/desenhos/vpc-40-pes-desenho.pdf',
      manual: '/docs/manuais/vpc-40-pes-manual.pdf',
      certificado: '/docs/certificados/vpc-40-pes-cert.pdf'
    }
  },
  'linha-base': {
    'semirreboque-base-carvoeira': {
      ficha: '/docs/fichas/base-carvoeira-ficha.pdf',
      desenho: '/docs/desenhos/base-carvoeira-desenho.pdf',
      manual: '/docs/manuais/base-carvoeira-manual.pdf',
      certificado: '/docs/certificados/base-carvoeira-cert.pdf'
    },
    'semirreboque-base-frigorifica': {
      ficha: '/docs/fichas/base-frigorifica-ficha.pdf',
      desenho: '/docs/desenhos/base-frigorifica-desenho.pdf',
      manual: '/docs/manuais/base-frigorifica-manual.pdf',
      certificado: '/docs/certificados/base-frigorifica-cert.pdf'
    }
  }
};

// Função para criar slug do modelo
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

// Serviço para obter documentos técnicos
export const TechnicalDocsService = {
  // Obter todos os documentos de um modelo
  getModelDocuments: (categorySlug, modelName) => {
    const modelSlug = createModelSlug(modelName);
    return technicalDocuments[categorySlug]?.[modelSlug] || {};
  },

  // Obter URL de um documento específico
  getDocumentUrl: (categorySlug, modelName, documentType) => {
    const docs = TechnicalDocsService.getModelDocuments(categorySlug, modelName);
    return docs[documentType] || null;
  },

  // Verificar se um documento existe
  hasDocument: (categorySlug, modelName, documentType) => {
    const url = TechnicalDocsService.getDocumentUrl(categorySlug, modelName, documentType);
    return !!url;
  },

  // Download de documento
  downloadDocument: (categorySlug, modelName, documentType) => {
    const url = TechnicalDocsService.getDocumentUrl(categorySlug, modelName, documentType);
    
    if (!url) {
      console.error(`Documento ${documentType} não encontrado para ${modelName}`);
      return false;
    }

    // Criar link temporário para download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${categorySlug}-${createModelSlug(modelName)}-${documentType}.pdf`;
    link.target = '_blank';
    
    // Adicionar ao DOM, clicar e remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  },

  // Obter lista de todos os tipos de documentos disponíveis
  getAvailableDocumentTypes: () => {
    return [
      { key: 'ficha', label: 'Ficha Técnica', icon: 'FileText' },
      { key: 'desenho', label: 'Desenho Técnico', icon: 'Blueprint' },
      { key: 'manual', label: 'Manual do Usuário', icon: 'Book' },
      { key: 'certificado', label: 'Certificado', icon: 'Award' }
    ];
  },

  // Obter estatísticas de documentos por categoria
  getCategoryStats: (categorySlug) => {
    const categoryDocs = technicalDocuments[categorySlug] || {};
    const models = Object.keys(categoryDocs);
    const totalDocs = models.reduce((total, model) => {
      return total + Object.keys(categoryDocs[model]).length;
    }, 0);

    return {
      totalModels: models.length,
      totalDocuments: totalDocs,
      modelsWithDocs: models.length,
      documentTypes: TechnicalDocsService.getAvailableDocumentTypes()
    };
  }
};

export default TechnicalDocsService;