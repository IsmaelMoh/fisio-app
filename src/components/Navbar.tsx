import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Activity className="h-8 w-8 text-turquoise-500" />
              <span className="ml-2 text-xl font-bold">Enrique Soler Fisio Clinic</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Inicio</a>
              <a href="#tratamientos" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Tratamientos</a>
              <a href="#por-que-elegirnos" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">¿Por qué elegirnos?</a>
              <a href="#testimonios" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Testimonios</a>
              <a href="#contacto" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Contacto</a>
              <a 
                href="https://wa.me/747466786" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-turquoise-500 hover:bg-turquoise-600 text-white"
              >
                Reserva tu cita
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">
            <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Inicio</a>
            <a href="#tratamientos" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Tratamientos</a>
            <a href="#por-que-elegirnos" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">¿Por qué elegirnos?</a>
            <a href="#testimonios" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Testimonios</a>
            <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Contacto</a>
            <a 
              href="https://wa.me/747466786" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-turquoise-500 hover:bg-turquoise-600 text-white mt-4 mx-2"
            >
              Reserva tu cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;