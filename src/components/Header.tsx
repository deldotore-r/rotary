import React, { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
              <Settings className="w-8 h-8 text-yellow-500 transform rotate-12" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Rotary Club</h1>
              <p className="text-sm text-gray-600">da Guarda</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#projetos" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Projetos
            </a>
            <a href="#reunioes" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Reuniões
            </a>
            <a href="#eventos" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Eventos
            </a>
            <a href="#lideranca" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Liderança
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Contato
            </a>
            <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Junte-se a Nós
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Sobre Nós
              </a>
              <a href="#projetos" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Projetos
              </a>
              <a href="#reunioes" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Reuniões
              </a>
              <a href="#eventos" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Eventos
              </a>
              <a href="#lideranca" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Liderança
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Contato
              </a>
              <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors w-full">
                Junte-se a Nós
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;