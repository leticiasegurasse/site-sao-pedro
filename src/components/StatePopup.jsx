import React from 'react';

export default function StatePopup({ name, phone, location, onClose }) {
  return (
    <div className="absolute top-12 right-12 bg-red-600 text-white p-5 rounded-lg shadow-lg w-72 z-50">
      <button
        className="absolute top-2 right-3 text-white text-lg font-bold"
        onClick={onClose}
      >
        ×
      </button>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm">📞 {phone}</p>
      <p className="text-sm">📍 {location}</p>
    </div>
  );
}
