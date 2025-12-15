import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              Creating exceptional digital experiences through innovative solutions and thoughtful design.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Projects</a>
              <a href="#certificates" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Certificates</a>
              <a href="#contact" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-500">
              <p>fatkhanafandi12@gmail.com</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 flex items-center">
            Made with by Fatkhan Afandi
          </p>
          <p className="text-gray-400 dark:text-gray-500 mt-4 md:mt-0">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
      >
      </button>
    </footer>
  );
};

export default Footer;