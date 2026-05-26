import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white py-12 relative border-t border-gray-800">
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
            Made by Fatkhan Afandi
          </p>
          <p className="text-gray-400 dark:text-gray-500 mt-4 md:mt-0">
            Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-8 right-8 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors duration-200"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
