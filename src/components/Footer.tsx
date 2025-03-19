import React from 'react';
import { Instagram, Facebook, Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-turquoise-400" />
              <span className="ml-2 text-xl font-bold">Enrique Soler Fisio Clinic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas en el tratamiento de lesiones con técnicas avanzadas y personalizadas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/enriquesoler_fisioclinic" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/EnriqueSolerFisioClinic" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li><a href="#tratamientos" className="text-gray-300 hover:text-white">Tratamientos</a></li>
              <li><a href="#por-que-elegirnos" className="text-gray-300 hover:text-white">¿Por qué elegirnos?</a></li>
              <li><a href="#testimonios" className="text-gray-300 hover:text-white">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Parque Unión Musical "La Artística", 2, Local 4, Novelda</li>
              <li>
                <a href="tel:747466786" className="text-gray-300 hover:text-white">747 466 786</a>
              </li>
              <li>
                <a href="mailto:enrique@solerfisioclinic.com" className="text-gray-300 hover:text-white">enrique@solerfisioclinic.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Lunes: 9:30-13:30, 16:00-20:30</li>
              <li>Martes: 9:30-13:30, 16:00-20:30</li>
              <li>Miércoles: 9:30-13:30, 16:00-20:30</li>
              <li>Jueves: 9:30-13:30, 16:00-20:30</li>
              <li>Viernes: 8:00-15:00</li>
              <li>Sábado: Cerrado</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Enrique Soler Fisio Clinic. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;