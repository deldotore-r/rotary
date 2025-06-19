import React from 'react';
import { BookOpen, Droplets, Stethoscope, Scaling as Seedling, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Educação para Todos",
      description: "Apoio a escolas locais com material didático, bolsas de estudo e programas de alfabetização.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      achievements: ["50+ crianças beneficiadas", "10 escolas apoiadas", "€15.000 investidos"]
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Água Limpa",
      description: "Projetos de fornecimento de água potável e saneamento para comunidades carentes.",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      achievements: ["3 poços construídos", "500+ pessoas beneficiadas", "Parceria internacional"]
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Saúde Comunitária",
      description: "Campanhas de saúde, vacinação e apoio a equipamentos médicos para hospitais locais.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      achievements: ["1000+ consultas gratuitas", "Equipamentos doados", "Campanhas de prevenção"]
    },
    {
      icon: <Seedling className="w-12 h-12" />,
      title: "Meio Ambiente",
      description: "Iniciativas de reflorestamento, limpeza urbana e educação ambiental.",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      achievements: ["200+ árvores plantadas", "5 parques revitalizados", "Consciência ambiental"]
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Nossos Projetos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformando vidas através de ações concretas nas áreas prioritárias do Rotary International
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 p-3 rounded-full">
                  {project.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
                <button className="flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors">
                  Saiba Mais
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Faça Parte da Mudança</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e contribua para projetos que fazem a diferença na vida de milhares de pessoas.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Participe dos Nossos Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;