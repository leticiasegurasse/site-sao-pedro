import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white pt-8 md:pt-12 border-t-4 border-red-600">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold mb-4">São Pedro</h4>
            <p className="text-gray-400">Excelência em furgões e semirreboques</p>
          </div>
          <div className="text-center sm:text-left">
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
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <i className="fas fa-envelope flex-shrink-0"></i>
                <span className="break-all">vendas@saopedro.ind.br</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <i className="fas fa-phone flex-shrink-0"></i>
                <span>(032) 3696-4444</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <i className="fas fa-map-marker-alt flex-shrink-0"></i>
                <Link to="/representantes" className="hover:text-white transition">
                  Ver o mais próximo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-red-600 mt-8 md:mt-12 py-6 md:py-8 gap-6">
          <div className="order-2 md:order-1">
            <img src="/images/logo.png" alt="São Pedro Implementos Rodoviários" className="h-8 md:h-10" />
          </div>
          <p className="text-gray-400 text-center text-sm order-3 md:order-2">
            &copy; {new Date().getFullYear()} São Pedro. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 order-1 md:order-3">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;