import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import Container from './Container';

const ContatoSection = () => {
  return (
    <section className="w-full bg-red-600 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold text-center md:text-left mb-4 md:mb-0">
            Entre em contato hoje mesmo
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto justify-center md:justify-end">
            <a
              href="tel:+553236964444"
              className="bg-white text-red-600 font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-md flex items-center justify-center gap-2 text-base sm:text-lg transition hover:bg-gray-100 w-full sm:w-auto shadow-lg"
            >
              Fazer uma ligação
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:vendas@saopedro.ind.br"
              className="bg-white text-red-600 font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-md flex items-center justify-center gap-2 text-base sm:text-lg transition hover:bg-gray-100 w-full sm:w-auto shadow-lg"
            >
              Enviar email
              <Mail className="w-5 h-5" />
            </a>
            <Link
              to="/contato"
              className="bg-white text-red-600 px-4 sm:px-6 py-3 sm:py-4 rounded-md flex items-center justify-center text-base sm:text-lg transition hover:bg-gray-100 w-full sm:w-auto shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContatoSection;