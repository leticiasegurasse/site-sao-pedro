import React, { useState } from 'react';
import StatePopup from './StatePopup';

import AmSvg from '../assets/estados/am.svg?react';
import PaSvg from '../assets/estados/pa.svg?react';

const states = [
  {
    id: 'am',
    name: 'Amazonas',
    Svg: AmSvg,
    contact: { phone: '(92) 0000-0000', location: 'Manaus' }
  },
  {
    id: 'pa',
    name: 'Pará',
    Svg: PaSvg,
    contact: { phone: '(91) 0000-0000', location: 'Belém' }
  }
];

export default function BrazilMap() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="relative flex flex-wrap gap-2 justify-center items-center">
      {states.map((state) => {
        const SvgComponent = state.Svg;
        return (
          <div
            key={state.id}
            onClick={() => setSelectedState(state)}
            className="cursor-pointer transition-transform hover:scale-105 group"
          >
            <SvgComponent
              className={`w-24 h-24 fill-gray-300 group-hover:stroke-red-600 group-hover:stroke-2 ${
                selectedState?.id === state.id ? 'fill-red-600' : ''
              }`}
            />
          </div>
        );
      })}

      {selectedState && (
        <StatePopup
          name={selectedState.name}
          phone={selectedState.contact.phone}
          location={selectedState.contact.location}
          onClose={() => setSelectedState(null)}
        />
      )}
    </div>
  );
}
