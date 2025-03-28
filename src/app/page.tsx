// page.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

// Import all components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'tools'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <LanguageProvider>
      <div className="bg-black text-white min-h-screen">
        <Navbar activeSection={activeSection} scrollY={scrollY} />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Portfolio;