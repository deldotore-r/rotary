import React from 'react';
import { Settings, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-blue-900 transform rotate-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rotary Club da Guarda</h3>
                <p className="text-blue-200">Service Above Self</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Há décadas servindo a comunidade da Guarda através de projetos sociais, 
              educacionais e de desenvolvimento comunitário. Somos parte da maior 
              organização de prestação de serviços humanitários do mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#reunioes" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Reuniões
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#lideranca" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Liderança
                </a>
              </li>
              <li>
                <a href="#contato" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-100">+351 271 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-100">info@rotaryguarda.pt</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Reuniões</h5>
              <p className="text-blue-100 text-sm">
                Todas as quintas-feiras<br />
                19:30 - 21:00<br />
                Hotel Turismo da Guarda
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2025 Rotary Club da Guarda. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-yellow-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a 
                href="https://rotary.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-yellow-400 text-sm transition-colors"
              >
                Rotary International
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;