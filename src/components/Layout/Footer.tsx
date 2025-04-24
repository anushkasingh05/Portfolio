import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolio';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-center md:text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              © {new Date().getFullYear()} Anushka Kumari. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href={`https://${CONTACT_INFO.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`https://${CONTACT_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className={`text-sm flex items-center justify-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <Heart size={16} className="text-red-500 fill-current" /> using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;