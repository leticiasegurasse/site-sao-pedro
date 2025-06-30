import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white pt-8 md:pt-12 border-t-4 border-red-600">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">São Pedro</h4>
            <p className="text-gray-400">Excelência em furgões e semirreboques</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="text-gray-400 hover:text-white transition">
                  A Empresa
                </Link>
              </li>
              <li>
                <Link to="/equipamentos" className="text-gray-400 hover:text-white transition">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/representantes" className="text-gray-400 hover:text-white transition">
                  Representantes
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-envelope"></i>
                vendas@saopedro.ind.br
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-phone"></i>
                (032) 3696-4444
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <Link to="/representantes" className="hover:text-white transition">
                  Ver o mais próximo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-red-600 mt-8 md:mt-12 py-6 md:py-8">
          <div className="mb-6 md:mb-0">
            <img src="/images/logo.png" alt="São Pedro Implementos Rodoviários" className="h-8 md:h-10" />
          </div>
          <p className="text-gray-400 text-center text-sm mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} São Pedro. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 