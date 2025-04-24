import React from 'react';
import { ACHIEVEMENTS } from '../../data/portfolio';
import { Trophy } from 'lucide-react';

interface AchievementsProps {
  isDarkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isDarkMode }) => {
  return (
    <section
      id="achievements"
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-indigo-600 pb-2">Achievements</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div 
              key={index}
              className={`mb-6 p-6 rounded-lg shadow-md ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <Trophy size={24} />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {achievement.date}
                    </span>
                  </div>
                  <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;