import React from 'react';
import { Clock, Award, UserCheck, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Más de 10 años de experiencia',
    description: 'Amplia trayectoria en fisioterapia avanzada y tratamiento de lesiones.'
  },
  {
    icon: Zap,
    title: 'Equipamiento de última tecnología',
    description: 'Contamos con la tecnología más avanzada para diagnóstico y tratamiento.'
  },
  {
    icon: UserCheck,
    title: 'Tratamientos personalizados',
    description: 'Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.'
  },
  {
    icon: Award,
    title: 'Especialistas en recuperación deportiva',
    description: 'Experiencia en el tratamiento de lesiones musculoesqueléticas y deportivas.'
  }
];

const team = [
  {
    name: 'Enrique Soler',
    role: 'Director y Fisioterapeuta',
    image: './assets/IMG_0693.jpg'
  },
  {
    name: 'Elena Cerdán',
    role: 'Fisioterapeuta',
    image: './assets/IMG_0694.jpg'
  },
  {
    name: 'Antonio Sala',
    role: 'Fisioterapeuta',
    image: './assets/IMG_0696.jpg'
  },
  {
    name: 'Fran Cremades',
    role: 'Fisioterapeuta',
    image: './assets/IMG_0697.jpg'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="por-que-elegirnos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Enrique Soler Fisio Clinic nos distinguimos por nuestro compromiso con la excelencia y la atención personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-turquoise-100 text-turquoise-600 mb-4">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con profesionales altamente cualificados y especializados en diferentes áreas de la fisioterapia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-80 overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={`Foto de ${member.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;