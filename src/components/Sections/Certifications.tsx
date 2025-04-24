import React from 'react';
import { CERTIFICATIONS } from '../../data/portfolio';
import { Award } from 'lucide-react';

interface CertificationsProps {
  isDarkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  return (
    <section
      id="certifications"
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-indigo-600 pb-2">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg shadow-md flex items-start gap-4 transition-transform hover:scale-105 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex-shrink-0">
                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                }`}>
                  <Award size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{cert.issuer}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;