import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-999 border-b-4 border-red-600">
      <nav className="py-4">
        <Container>
          <div className="flex justify-between items-center">
            <img src="/images/logo.png" alt="Logo" className="h-8 md:h-10" />
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`transition text-base lg:text-base ${isActive('/') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/empresa" 
                className={`transition text-base lg:text-base ${isActive('/empresa') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
              >
                A Empresa
              </Link>
              <Link 
                to="/equipamentos" 
                className={`transition text-base lg:text-base ${isActive('/equipamentos') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
              >
                Equipamentos
              </Link>
              <Link 
                to="/representantes" 
                className={`transition text-base lg:text-base ${isActive('/representantes') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
              >
                Representantes
              </Link>
              <Link 
                to="/contato" 
                className={`transition text-base lg:text-base ${isActive('/contato') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
              >
                Contato
              </Link>
            </div>

            {/* Botão Menu Mobile */}
            <button 
              className="md:hidden text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-in slide-in-from-top duration-300">
            <Container>
              <div className="flex flex-col space-y-4 py-4">
                <Link 
                  to="/" 
                  className={`transition py-2 text-base ${isActive('/') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/empresa" 
                  className={`transition py-2 text-base ${isActive('/empresa') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  A Empresa
                </Link>
                <Link 
                  to="/equipamentos" 
                  className={`transition py-2 text-base ${isActive('/equipamentos') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Equipamentos
                </Link>
                <Link 
                  to="/representantes" 
                  className={`transition py-2 text-base ${isActive('/representantes') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Representantes
                </Link>
                <Link 
                  to="/contato" 
                  className={`transition py-2 text-base ${isActive('/contato') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;