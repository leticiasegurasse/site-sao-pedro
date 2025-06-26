import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b-4 border-red-600">
      <nav className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 md:h-10" />
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition ${isActive('/') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/empresa" 
              className={`transition ${isActive('/empresa') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              A Empresa
            </Link>
            <Link 
              to="/equipamentos" 
              className={`transition ${isActive('/equipamentos') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              Equipamentos
            </Link>
            <Link 
              to="/representantes" 
              className={`transition ${isActive('/representantes') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              Representantes
            </Link>
            <Link 
              to="/contato" 
              className={`transition ${isActive('/contato') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              Contato
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className={`transition py-2 ${isActive('/') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/empresa" 
                className={`transition py-2 ${isActive('/empresa') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                A Empresa
              </Link>
              <Link 
                to="/equipamentos" 
                className={`transition py-2 ${isActive('/equipamentos') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Equipamentos
              </Link>
              <Link 
                to="/representantes" 
                className={`transition py-2 ${isActive('/representantes') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Representantes
              </Link>
              <Link 
                to="/contato" 
                className={`transition py-2 ${isActive('/contato') ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 