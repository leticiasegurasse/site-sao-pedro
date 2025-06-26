import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight } from 'lucide-react';

const ContatoSection = () => {
  return (
    <section className="w-full bg-red-600 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold text-center md:text-left mb-6 md:mb-0">
          Entre em contato hoje mesmo
        </h2>
        <div className="flex gap-4 w-full md:w-auto justify-center md:justify-end">
          <a href="tel:+550000000000" className="bg-white text-red-600 font-bold px-8 py-4 rounded-md flex items-center gap-2 text-lg transition hover:bg-gray-100">
            Fazer uma ligação
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:contato@saopedro.com" className="bg-white text-red-600 font-bold px-8 py-4 rounded-md flex items-center gap-2 text-lg transition hover:bg-gray-100">
            Enviar email
            <Mail className="w-5 h-5" />
          </a>
          <Link to="/contato" className="bg-white text-red-600 px-6 py-4 rounded-md flex items-center justify-center text-lg transition hover:bg-gray-100">
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection; 