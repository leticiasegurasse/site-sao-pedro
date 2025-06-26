import React from 'react';

const ContatoCard = ({ title, description }) => {
  return (
    <div className="w-[360px] h-[230px] p-10 flex flex-col bg-gray-100 transition-all duration-300 group hover:bg-red-600">
      <span className="text-3xl font-bold mb-4 border-b-4 border-red-600 pb-2 w-fit transition-all duration-300 group-hover:text-white group-hover:border-white">
        {title}
      </span>
      <p className="text-lg transition-all duration-300 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default ContatoCard; 