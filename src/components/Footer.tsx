import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080a0f] py-12 text-white">
      <div className="section-grid" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 font-mono text-lg font-bold uppercase tracking-[0.18em] text-lime-300">Portfolio</h3>
            <p className="text-slate-400 leading-relaxed">
              Creating exceptional digital experiences through innovative solutions and thoughtful design.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-slate-400 hover:text-lime-300 transition-colors">Home</a>
              <a href="#about" className="block text-slate-400 hover:text-lime-300 transition-colors">About</a>
              <a href="#projects" className="block text-slate-400 hover:text-lime-300 transition-colors">Projects</a>
              <a href="#certificates" className="block text-slate-400 hover:text-lime-300 transition-colors">Certificates</a>
              <a href="#contact" className="block text-slate-400 hover:text-lime-300 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact Info</h4>
            <div className="space-y-2 text-slate-400">
              <p>fatkhanafandi12@gmail.com</p>
              <p>Bogor, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 flex items-center">
            Made by Fatkhan Afandi
          </p>
          <p className="text-slate-500 mt-4 md:mt-0">
            Copyright 2025. All rights reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-8 right-8 z-10 border border-lime-300/70 bg-lime-300 p-3 text-slate-950 transition-colors duration-200 hover:bg-cyan-200"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
