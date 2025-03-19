import React from 'react';
import { Hand as Hands, Droplets, Magnet, FileWarning as Running, Syringe, Target, Scan, Activity, Zap, Sparkles } from 'lucide-react';

const treatments = [
  {
    title: 'Terapia manual',
    description: 'Técnicas manuales avanzadas para aliviar el dolor y mejorar la movilidad.',
    icon: Hands
  },
  {
    title: 'Presoterapia',
    description: 'Método eficaz para la recuperación muscular y drenaje linfático.',
    icon: Droplets
  },
  {
    title: 'Magnetoterapia',
    description: 'Terapia regenerativa basada en campos magnéticos.',
    icon: Magnet
  },
  {
    title: 'Fisioterapia deportiva',
    description: 'Tratamientos específicos para deportistas.',
    icon: Running
  },
  {
    title: 'Fisioterapia invasiva',
    description: 'Técnicas avanzadas para lesiones crónicas.',
    icon: Syringe
  },
  {
    title: 'Punción seca',
    description: 'Eliminación de puntos gatillo para aliviar contracturas.',
    icon: Target
  },
  {
    title: 'Ecografía musculoesquelética',
    description: 'Diagnóstico preciso para tratamientos personalizados.',
    icon: Scan
  },
  {
    title: 'Readaptación y ejercicio terapéutico',
    description: 'Rehabilitación progresiva para evitar recaídas.',
    icon: Activity
  },
  {
    title: 'Neuromodulación',
    description: 'Tratamiento del dolor mediante estimulación eléctrica.',
    icon: Zap
  },
  {
    title: 'EPI (Electrólisis Percutánea Intratisular)',
    description: 'Técnica avanzada para lesiones de tejidos blandos.',
    icon: Sparkles
  }
];

const Treatments = () => {
  return (
    <section id="tratamientos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestros Tratamientos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de tratamientos especializados para abordar diferentes tipos de lesiones y condiciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-turquoise-100 p-3 rounded-full mr-4">
                  <treatment.icon className="h-6 w-6 text-turquoise-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{treatment.title}</h3>
              </div>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/747466786" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-300"
          >
            Consulta cuál es el tratamiento ideal para ti
          </a>
        </div>
      </div>
    </section>
  );
};

export default Treatments;