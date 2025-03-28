// components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ activeSection, scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left section - Name Logo */}
        <a href="#hero" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Markel Ramiro
        </a>

        {/* Center section - Navigation Links & CV button */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          {['tools', 'projects', 'experience', 'cv'].map((item) => (
            <a
              key={item}
              href={item === 'cv' ? '/CV-markel-ramiro.pdf' : `#${item}`}
              download={item === 'cv'}
              className={`text-sm uppercase tracking-wider hover:text-indigo-400 transition-colors ${activeSection === item ? 'text-indigo-400 font-semibold' : 'text-gray-300'}`}
            >
              {t(`nav.${item}`)}
              {activeSection === item && item !== 'cv' && (
                <div className="h-1 w-full bg-indigo-500 mt-1 rounded-full"></div>
              )}
            </a>
          ))}
        </div>


        {/* Right section - Language Selector */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center px-3 py-2 space-x-1 text-gray-300 hover:text-white bg-indigo-900/30 hover:bg-indigo-800/50 rounded-lg border border-indigo-500/30 transition-all duration-300"
          >
            <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-lg absolute w-full py-4"
        >
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {['tools', 'projects', 'experience'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider hover:text-indigo-400 transition-colors ${activeSection === item ? 'text-indigo-400 font-semibold' : 'text-gray-300'}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <a
              href="/CV-markel-ramiro.pdf"
              download
              className="text-sm uppercase tracking-wider px-4 py-2 w-fit rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.cv')}
            </a>

            {/* Language selector in mobile menu */}
            <div className="flex items-center pt-2">
              <button 
                onClick={() => {
                  toggleLanguage();
                  setMenuOpen(false);
                }} 
                className="flex items-center px-4 py-2 space-x-2 text-white bg-indigo-900/40 hover:bg-indigo-800/60 rounded-lg border border-indigo-500/30 transition-all duration-300"
              >
                <span>{language === 'es' ? 'Español' : 'English'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;