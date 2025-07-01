import React from 'react';

const DiferencialCard = ({ title, description }) => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col bg-gray-100 transition-all duration-300 group hover:bg-red-600">
      <span className="text-2xl sm:text-3xl font-bold mb-4 border-b-4 border-red-600 pb-2 w-fit transition-all duration-300 group-hover:text-white group-hover:border-white">
        {title}
      </span>
      <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default DiferencialCard;