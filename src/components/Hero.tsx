import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 text-yellow-400 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Guarda, Portugal</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Servir Acima de Si Mesmo
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            Há mais de décadas, o Rotary Club da Guarda dedica-se ao serviço comunitário, 
            promovendo a paz, combatendo doenças e apoiando a educação em nossa comunidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              Conheça Nossos Projetos
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Torne-se Membro
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;