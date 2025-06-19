import React from 'react';
import { Calendar, Users, Star, Clock } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      date: "25 JAN",
      title: "Jantar de Gala Beneficente",
      description: "Evento anual para angariação de fundos para projetos sociais",
      time: "19:30",
      location: "Hotel Turismo da Guarda",
      category: "Beneficente"
    },
    {
      date: "15 FEV",
      title: "Palestra sobre Empreendedorismo",
      description: "Convidado especial falará sobre inovação e desenvolvimento regional",
      time: "19:30",
      location: "Auditório Municipal",
      category: "Educativa"
    },
    {
      date: "08 MAR",
      title: "Dia Internacional da Mulher",
      description: "Homenagem às mulheres rotárias e da comunidade",
      time: "18:00",
      location: "Centro Cultural",
      category: "Comemorativa"
    }
  ];

  const pastEvents = [
    {
      title: "Campanha de Vacinação",
      description: "Apoio à campanha municipal de vacinação",
      participants: "200+",
      impact: "Famílias beneficiadas"
    },
    {
      title: "Feira do Livro Solidária",
      description: "Arrecadação de livros para bibliotecas escolares",
      participants: "500+",
      impact: "Livros doados"
    },
    {
      title: "Reflorestamento Serra da Estrela",
      description: "Plantio de árvores nativas na região",
      participants: "150+",
      impact: "Árvores plantadas"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Eventos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participamos e organizamos eventos que fortalecem nossa comunidade e promovem o companheirismo
          </p>
        </div>

        {/* Próximos Eventos */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Próximos Eventos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-yellow-500 text-blue-900 px-3 py-2 rounded-lg font-bold text-sm">
                    {event.date}
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {event.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-blue-900 mb-3">{event.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Mais Informações
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Eventos Realizados */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Eventos Realizados</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white rounded-2xl p-8 mb-4 hover:bg-blue-800 transition-colors">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-blue-900" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                  <p className="text-blue-100 mb-4">{event.description}</p>
                  <div className="bg-blue-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{event.participants}</div>
                    <div className="text-sm text-blue-200">{event.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Participe dos Nossos Eventos</h3>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Mantenha-se informado sobre todos os nossos eventos e atividades. 
            Sua participação faz a diferença!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors">
              Receber Notificações
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
              Ver Calendário Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;