import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos sempre dispostos a receber novos membros e parceiros. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Informações de Contato</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Hotel Turismo da Guarda<br />
                    Praça do Município<br />
                    6300-750 Guarda, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Telefone</h4>
                  <p className="text-gray-600">+351 271 000 000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@rotaryguarda.pt</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horário das Reuniões</h4>
                  <p className="text-gray-600">
                    Todas as quintas-feiras<br />
                    19:30 - 21:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-3">Primeira Visita?</h4>
              <p className="text-gray-700 mb-4">
                Visitantes são sempre bem-vindos! Recomendamos que entre em contato conosco antes 
                da sua primeira visita para que possamos recebê-lo adequadamente.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Agendar Visita
              </button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Envie-nos uma Mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+351 000 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="membership">Interesse em ser membro</option>
                    <option value="projects">Projetos e parcerias</option>
                    <option value="events">Eventos</option>
                    <option value="visit">Agendar visita</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Nossa Localização</h3>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Hotel Turismo da Guarda<br />
                Praça do Município, 6300-750 Guarda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;