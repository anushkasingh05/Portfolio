import React from 'react';
import { EDUCATION } from '../../data/portfolio';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section
      id="education"
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-indigo-600 pb-2">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    isDarkMode 
                      ? 'bg-indigo-900 border-gray-800' 
                      : 'bg-indigo-600 border-white'
                  }`}></div>
                  
                  {/* Content */}
                  <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pl-0 md:pr-16' : 'md:ml-auto md:pl-16 md:pr-0'} md:w-1/2`}>
                    <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 hidden md:block">
                          <div className={`p-3 rounded-full ${
                            isDarkMode ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                          }`}>
                            <GraduationCap size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className={`font-medium ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{edu.institution}</p>
                          <div className="flex flex-wrap justify-between mt-2">
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.duration}</p>
                            <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.score}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;