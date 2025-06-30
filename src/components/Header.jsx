import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, Home, Building2, Truck } from 'lucide-react';
import Container from './Container';
import TopBar from './TopBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup quando componente desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Fecha menu com ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/empresa', label: 'A Empresa', icon: Building2 },
    { path: '/equipamentos', label: 'Equipamentos', icon: Truck },
    { path: '/representantes', label: 'Representantes', icon: MapPin },
    { path: '/contato', label: 'Contato', icon: Phone }
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b-4 border-red-600">
      {/* TopBar */}
      <TopBar />
      
      {/* Navegação Principal */}
      <nav className="py-3 md:py-4">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="relative z-50">
              <OptimizedImage 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-7 sm:h-8 md:h-10 transition-all duration-200 hover:scale-105" 
              />
            </Link>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`
                    relative transition-all duration-300 text-sm lg:text-base font-medium
                    ${isActive(item.path) 
                      ? 'text-red-600' 
                      : 'text-gray-800 hover:text-red-600'
                    }
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-600
                    after:transition-all after:duration-300
                    ${isActive(item.path) 
                      ? 'after:w-full' 
                      : 'after:w-0 hover:after:w-full'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Botão Menu Mobile */}
            <button 
              className="md:hidden relative z-50 p-2 -mr-2 text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                {/* Ícone Menu */}
                <Menu 
                  size={24} 
                  className={`
                    absolute inset-0 transition-all duration-300 transform
                    ${isMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}
                  `}
                />
                {/* Ícone X */}
                <X 
                  size={24} 
                  className={`
                    absolute inset-0 transition-all duration-300 transform
                    ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}
                  `}
                />
              </div>
            </button>
          </div>
        </Container>

        {/* Overlay Mobile */}
        <div 
          className={`
            md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-998
            ${isMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Mobile */}
        <div 
          className={`
            md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-999
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Header do Menu Mobile */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-red-600">
            <span className="text-white font-semibold text-lg">Menu</span>
          </div>

          {/* Links do Menu Mobile */}
          <nav className="pt-6 pb-8">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`
                    flex items-center px-6 py-4 text-base font-medium transition-all duration-200
                    border-l-4 border-transparent
                    ${isActive(item.path) 
                      ? 'text-red-600 bg-red-50 border-red-600' 
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50 hover:border-red-300'
                    }
                  `}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent 
                    className="mr-3 w-5 h-5" 
                    strokeWidth={1.5}
                  />
                  {item.label}
                  {isActive(item.path) && (
                    <div className="ml-auto w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Informações de Contato no Menu Mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:03236964444" className="hover:text-red-600 transition-colors">
                  (032) 3696-4444
                </a>
              </div>
              <div className="flex items-center justify-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                SEG - SEX 8:00 - 17:00
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .md\\:hidden nav a {
          animation: ${isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'};
          opacity: ${isMenuOpen ? '0' : '1'};
        }
      `}</style>
    </header>
  );
};

export default Header;