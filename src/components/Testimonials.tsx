import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Gracias a Enrique Soler Fisio Clinic volví a entrenar sin dolor. Trato profesional y personalizado.",
    author: "Carlos Martínez",
    role: "Deportista"
  },
  {
    quote: "Después de meses con dolor de espalda, en solo unas sesiones noté una gran mejoría. Excelentes profesionales.",
    author: "María López",
    role: "Oficinista"
  },
  {
    quote: "La punción seca que me realizaron fue clave para superar mi lesión de hombro. Totalmente recomendable.",
    author: "Javier Sánchez",
    role: "Tenista amateur"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonios de Pacientes</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Descubre lo que nuestros pacientes dicen sobre su experiencia en Enrique Soler Fisio Clinic.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-blue-800 rounded-lg p-8 md:p-12 shadow-lg">
            <Quote className="h-12 w-12 text-turquoise-400 opacity-50 mb-6" />
            <blockquote className="text-xl md:text-2xl mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="font-semibold">
              {testimonials[currentIndex].author}
              <span className="font-normal opacity-75 ml-2">— {testimonials[currentIndex].role}</span>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 focus:outline-none"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;