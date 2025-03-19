import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contacto y Ubicación</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos a tu disposición para resolver cualquier duda o concertar una cita.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Información de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-turquoise-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Dirección</h4>
                    <p className="text-gray-600">Parque Unión Musical "La Artística", 2, Local 4, Novelda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-turquoise-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">
                      <a href="tel:747466786" className="hover:text-turquoise-600">747 466 786</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-turquoise-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:enrique@solerfisioclinic.com" className="hover:text-turquoise-600">enrique@solerfisioclinic.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="h-6 w-6 text-turquoise-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Instagram</h4>
                    <p className="text-gray-600">
                      <a 
                        href="https://www.instagram.com/enriquesoler_fisioclinic" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-turquoise-600"
                      >
                        @enriquesoler_fisioclinic
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/747466786" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block w-full text-center px-6 py-3 bg-turquoise-500 hover:bg-turquoise-600 text-white font-medium rounded-md transition duration-300"
                >
                  Reserva tu cita ahora
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-8">
            <img 
              src="./assets/Enrique Soler Fisioclinic.PNG" 
              alt="Logo de Enrique Soler Fisio Clinic" 
              className="max-w-full max-h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;