import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolio';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-indigo-600 pb-2">About Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              A Computer Science student with strong foundational skills in programming, web development, and data analysis. 
              Passionate about turning ideas into impactful digital solutions. Semi-finalist in Smart India Hackathon 2024.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm constantly exploring new technologies and methodologies to enhance my skills and create meaningful 
              applications that solve real-world problems. My goal is to contribute to innovative solutions that make a positive impact.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Find me on:</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://${CONTACT_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={`https://${CONTACT_INFO.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Phone size={20} />
                  <span>Phone</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className={`relative w-full max-w-md p-8 rounded-lg shadow-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'
            }`}>
              <h3 className="text-xl font-bold mb-6 text-center">Professional Summary</h3>
              <ul className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>B.Tech Computer Science student at Lovely Professional University</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Experienced in multiple programming languages including C++, Java, and Python</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Web development skills with HTML, CSS, and React</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Strong problem-solving abilities with a holistic approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Passionate about creating impactful digital solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;