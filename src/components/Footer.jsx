import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181818] text-white border-t-4 border-red-600">
      
      {/* Seção Principal do Footer */}
      <div className="pt-8 sm:pt-12 pb-6 sm:pb-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Coluna 1: Informações da Empresa */}
            <div className="text-center sm:text-left lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="São Pedro Implementos Rodoviários" 
                  className="h-8 sm:h-10 mx-auto sm:mx-0"
                />
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Excelência em furgões e semirreboques há 64 anos
              </p>
              
              {/* Redes Sociais - Mobile */}
              <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:hidden">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-red-600"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-red-600"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600">
                Links Rápidos
              </h4>
              <nav className="space-y-2 sm:space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/empresa', label: 'A Empresa' },
                  { to: '/equipamentos', label: 'Equipamentos' },
                  { to: '/representantes', label: 'Representantes' },
                  { to: '/contato', label: 'Contato' }
                ].map((link) => (
                  <div key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Coluna 3: Contato */}
            <div className="text-center sm:text-left lg:col-span-2">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600">
                Entre em Contato
              </h4>
              <div className="space-y-3 sm:space-y-4">
                
                {/* Email */}
                <div className="flex items-center justify-center sm:justify-start group">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full mr-3 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <a 
                      href="mailto:vendas@saopedro.ind.br"
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all"
                    >
                      vendas@saopedro.ind.br
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-center justify-center sm:justify-start group">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full mr-3 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <a 
                      href="tel:03236964444"
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-medium"
                    >
                      (032) 3696-4444
                    </a>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start justify-center sm:justify-start group">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full mr-3 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Rodovia BR 116, Km 710
                    </span>
                    <span className="text-gray-400 text-sm sm:text-base">
                      Muriaé - MG, CEP 36884-255
                    </span>
                    <Link 
                      to="/representantes" 
                      className="text-red-400 hover:text-red-300 transition-colors text-xs sm:text-sm font-medium inline-flex items-center mt-1"
                    >
                      Ver representantes →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Seção Inferior do Footer */}
      <div className="border-t border-gray-700 py-4 sm:py-6">
        <Container>
          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            
            {/* Copyright */}
            <div className="order-2 sm:order-1 text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                &copy; {currentYear} São Pedro Implementos Rodoviários. 
                <span className="block sm:inline sm:ml-1">
                  Todos os direitos reservados.
                </span>
              </p>
            </div>

            {/* Redes Sociais - Desktop */}
            <div className="order-1 sm:order-2 hidden sm:flex space-x-3">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-200 p-2 rounded-full hover:bg-red-600 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-200 p-2 rounded-full hover:bg-red-600 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Linha decorativa */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
    </footer>
  );
};

export default Footer;