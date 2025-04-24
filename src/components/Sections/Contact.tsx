import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolio';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill out all fields',
        type: 'error'
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }
    
    // Form would be submitted to backend here
    // For now, just simulate success
    setFormStatus({
      message: 'Message sent successfully!',
      type: 'success'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear success message after a few seconds
    setTimeout(() => {
      setFormStatus({
        message: '',
        type: null
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-indigo-600 pb-2">Contact Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                  } border focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                  placeholder="Anushka"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                  } border focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                  placeholder="Annu@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                  } border focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                  placeholder="Your message here..."
                />
              </div>
              
              {formStatus.message && (
                <div className={`p-3 rounded-lg ${
                  formStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className={`p-8 rounded-lg shadow-md h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, 
                creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-gray-600 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-gray-600 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                      className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-gray-600 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href={`https://${CONTACT_INFO.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {CONTACT_INFO.linkedin}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-gray-600 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href={`https://${CONTACT_INFO.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {CONTACT_INFO.github}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;