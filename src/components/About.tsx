import React from 'react';
import { Users, Heart, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Companheirismo",
      description: "Construindo relacionamentos duradouros baseados em confiança e respeito mútuo."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Serviço",
      description: "Dedicados a servir nossa comunidade e criar mudanças positivas duradouras."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Diversidade",
      description: "Valorizamos diferentes perspectivas e experiências em nossa organização."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Integridade",
      description: "Mantemos os mais altos padrões éticos em todas as nossas ações e decisões."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Sobre o Rotary Club da Guarda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fundado com o propósito de servir nossa comunidade, somos parte de uma rede global 
            de líderes dedicados a resolver os desafios mais prementes do mundo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Nossa História</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              O Rotary Club da Guarda foi fundado como parte da família global Rotary International, 
              trazendo para nossa cidade os valores fundamentais de serviço, companheirismo e integridade. 
              Ao longo dos anos, temos sido protagonistas em iniciativas que transformam vidas e fortalecem 
              nossa comunidade.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Nossos membros são profissionais e líderes empresariais comprometidos com o lema 
              "Service Above Self" (Servir Acima de Si Mesmo), trabalhando juntos para criar 
              mudanças positivas localmente e apoiar iniciativas globais.
            </p>
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <blockquote className="text-lg italic">
                "Service Above Self"
              </blockquote>
              <p className="text-blue-200 mt-2">Lema do Rotary International</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Membros do Rotary Club da Guarda"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg">
              <p className="font-bold text-2xl">35+</p>
              <p className="text-sm">Anos de Serviço</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-yellow-500 mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;