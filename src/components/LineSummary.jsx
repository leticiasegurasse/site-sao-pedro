// src/components/LineSummary.jsx
import React from 'react';
import { Award, Users, FileText, Truck, CheckCircle, Star } from 'lucide-react';
import TechnicalDocsService from '../services/technicalDocsService';

const LineSummary = ({ categoria }) => {
  const categorySlug = categoria.slug;
  const stats = TechnicalDocsService.getCategoryStats(categorySlug);
  
  // Contar modelos com destaque
  const modelosDestaque = categoria.modelos.filter(modelo => modelo.destaque).length;
  
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-800">
            Resumo da {categoria.nome}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Uma visão geral completa de nossa linha mais robusta e tecnológica.
          </p>
        </div>

        {/* Grid de estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-red-200">
            <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Truck className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-600 mb-1">
              {categoria.modelos.length}
            </div>
            <div className="text-sm text-gray-600">
              Modelos Disponíveis
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-red-200">
            <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {modelosDestaque}
            </div>
            <div className="text-sm text-gray-600">
              Modelos Destaque
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-red-200">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {stats.totalDocuments}
            </div>
            <div className="text-sm text-gray-600">
              Documentos Técnicos
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-red-200">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              64
            </div>
            <div className="text-sm text-gray-600">
              Anos de Experiência
            </div>
          </div>
        </div>

        {/* Principais características */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-200">
          <h3 className="text-xl font-bold text-center mb-8 text-red-800">
            Por que escolher a {categoria.nome}?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Qualidade Certificada</h4>
                <p className="text-sm text-gray-600">
                  Todos os modelos possuem certificação e seguem rigorosos padrões de qualidade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tecnologia Avançada</h4>
                <p className="text-sm text-gray-600">
                  Equipamentos modernos e inovações tecnológicas para máxima eficiência.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Suporte Nacional</h4>
                <p className="text-sm text-gray-600">
                  Rede de assistência técnica e representantes em todo o Brasil.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Documentação Completa</h4>
                <p className="text-sm text-gray-600">
                  Fichas técnicas, manuais e desenhos técnicos para todos os modelos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Customização</h4>
                <p className="text-sm text-gray-600">
                  Diferentes versões e configurações para atender suas necessidades específicas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Garantia Estendida</h4>
                <p className="text-sm text-gray-600">
                  Cobertura completa e garantia estendida para sua tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Interessado na {categoria.nome}?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Entre em contato com nossos especialistas para escolher o modelo ideal para sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+553236964444"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ligar Agora
              </a>
              <a
                href="mailto:vendas@saopedro.ind.br"
                className="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineSummary;