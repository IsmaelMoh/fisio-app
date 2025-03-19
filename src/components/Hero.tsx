import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="./assets/mujer-que-tiene-sesion-fisioterapia-clinica.jpg" 
          alt="Mujer recibiendo tratamiento de fisioterapia" 
          className="w-full h-full object-cover object-center opacity-80"
          style={{ 
            imageRendering: 'high-quality',
            filter: 'contrast(1.05) brightness(1.05)'
          }}
        />
      </div>
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        style={{ backdropFilter: 'blur(1px)' }}
      >
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-shadow-lg">
            Tratamientos personalizados para tu recuperación y bienestar
          </h1>
          <p className="text-xl mb-8 text-shadow">
            En Enrique Soler Fisio Clinic nos especializamos en el diagnóstico y tratamiento de lesiones musculoesqueléticas con técnicas avanzadas y personalizadas.
          </p>
          <a 
            href="https://wa.me/747466786" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-turquoise-500 hover:bg-turquoise-600 text-white font-medium rounded-md transition duration-300"
          >
            Reserva tu cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;