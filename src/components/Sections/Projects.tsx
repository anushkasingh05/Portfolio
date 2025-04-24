import React from 'react';
import { PROJECTS } from '../../data/portfolio';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-indigo-600 pb-2">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="h-48 overflow-hidden">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.date}</span>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-1 rounded text-xs ${
                        isDarkMode 
                          ? 'bg-gray-600 text-gray-200' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end gap-2 mt-4">
                  <button 
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                    aria-label="View Project"
                  >
                    <ExternalLink size={18} />
                  </button>
                  <button 
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                    aria-label="View Code"
                  >
                    <Code size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;