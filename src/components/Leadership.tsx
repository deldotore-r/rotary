import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. António Silva",
      position: "Presidente",
      profession: "Médico",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      email: "presidente@rotaryguarda.pt",
      phone: "+351 271 000 000"
    },
    {
      name: "Eng.ᵃ Maria Santos",
      position: "Vice-Presidente",
      profession: "Engenheira Civil",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      email: "vice@rotaryguarda.pt",
      phone: "+351 271 000 001"
    },
    {
      name: "Dr. João Pereira",
      position: "Secretário",
      profession: "Advogado",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      email: "secretario@rotaryguarda.pt",
      phone: "+351 271 000 002"
    },
    {
      name: "Prof.ᵃ Ana Costa",
      position: "Tesoureira",
      profession: "Professora Universitária",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      email: "tesoureira@rotaryguarda.pt",
      phone: "+351 271 000 003"
    }
  ];

  const committees = [
    {
      name: "Comissão de Projetos Comunitários",
      description: "Responsável pela identificação, desenvolvimento e execução de projetos de impacto social na comunidade local."
    },
    {
      name: "Comissão de Angariação de Fundos",
      description: "Organiza eventos e campanhas para financiar os projetos e atividades do clube."
    },
    {
      name: "Comissão de Membership",
      description: "Foca no recrutamento de novos membros e na integração dos rotários mais recentes."
    },
    {
      name: "Comissão de Relações Públicas",
      description: "Gere a comunicação e a imagem do clube junto da comunidade e dos media."
    }
  ];

  return (
    <section id="lideranca" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Liderança</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a equipa que lidera o Rotary Club da Guarda e dedica o seu tempo ao serviço da comunidade
          </p>
        </div>

        {/* Diretoria */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Diretoria 2024-2025</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-xs font-semibold">
                    {leader.position}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-blue-900 mb-2">{leader.name}</h4>
                <p className="text-gray-600 mb-4">{leader.profession}</p>
                
                <div className="space-y-2">
                  <a 
                    href={`mailto:${leader.email}`}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a 
                    href={`tel:${leader.phone}`}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Telefone</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comissões */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Comissões de Trabalho</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-4">{committee.name}</h4>
                <p className="text-gray-600 leading-relaxed">{committee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Interessado em Liderar?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            O Rotary oferece oportunidades únicas de liderança e desenvolvimento pessoal. 
            Faça parte da nossa equipa de líderes comprometidos com a mudança.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Saiba Como Participar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;