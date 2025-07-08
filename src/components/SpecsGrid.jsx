// src/components/SpecsGrid.jsx
import React from 'react';
import { Settings, Ruler, Truck, Cog } from 'lucide-react';

const SpecsGrid = ({ especificacoes, modelo }) => {
  // Função para obter o ícone baseado na chave da especificação
  const getIcon = (chave) => {
    const key = chave.toLowerCase();
    if (key.includes('acoplamento') || key.includes('eixo')) return Truck;
    if (key.includes('altura') || key.includes('comprimento') || key.includes('chapa')) return Ruler;
    if (key.includes('configuração') || key.includes('especialidade')) return Cog;
    return Settings;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {especificacoes.map((spec, idx) => {
        const IconComponent = getIcon(spec.chave);
        
        return (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                <IconComponent className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold text-gray-900 text-sm mb-1">
                  {spec.chave}
                </h5>
                <p className="text-gray-700 text-sm break-words">
                  {spec.valor}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecsGrid;