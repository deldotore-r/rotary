import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Meetings = () => {
  return (
    <section id="reunioes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Reuniões</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe das nossas reuniões semanais e faça parte de uma comunidade comprometida com o serviço
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Informações das Reuniões</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Frequência</h4>
                    <p className="text-gray-600">Todas as quintas-feiras</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário</h4>
                    <p className="text-gray-600">19:30 - 21:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local</h4>
                    <p className="text-gray-600">Hotel Turismo da Guarda<br />Praça do Município, Guarda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Users className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visitantes</h4>
                    <p className="text-gray-600">Sempre bem-vindos! Entre em contato conosco antes da visita.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">Próxima Reunião Especial</h4>
                <p className="text-gray-700">Palestra sobre "Sustentabilidade e Meio Ambiente"</p>
                <p className="text-sm text-gray-600 mt-1">Quinta-feira, 25 de Janeiro, 19:30</p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Reunião do Rotary Club"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <h4 className="font-bold text-blue-900 mb-2">Como Participar</h4>
                <p className="text-gray-600 text-sm">
                  Interessados em conhecer o Rotary são sempre bem-vindos. 
                  Entre em contato conosco para agendar sua visita.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-bold text-blue-900">Formato das Reuniões</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Confraterni zação e networking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Apresentação de palestrantes convidados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Discussão de projetos comunitários</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Planejamento de atividades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetings;