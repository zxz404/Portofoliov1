import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Award, Mail, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onNavigate: (targetId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.substring(1);
    onNavigate(targetId);
  };

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#certificates', label: 'Certificates', icon: Award },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-stone-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
           Fatkhan Afandi
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-stone-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-stone-200 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-stone-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-stone-200 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md rounded-lg border border-stone-200 dark:border-gray-800 mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
