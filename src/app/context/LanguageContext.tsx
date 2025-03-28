// context/LanguageContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

type TranslationsType = {
  [language: string]: {
    [key: string]: string;
  };
};

// Import your translations with proper typing
const translations: TranslationsType = {
  en: {
    // Navbar
    'nav.tools': 'Tools',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.cv': 'CV',
    
    // Hero Section
    'hero.title': 'Driven by AI, Backend Development & Cloud Solutions | Entrepreneur',
    
    // Tools Section
    'tools.title': 'My Daily Tools',
    'tools.description': 'Here are the technologies I work with every day to create efficient and scalable solutions.',
    
    // Experience Section
    'exp.title': 'Experience',
    'exp.description': 'Here are some of the milestones I\'ve reached in my career.',
    'exp.current': 'Current Role',
    'exp.devol': 'AI Team Lead at Devol',
    'exp.devol.desc': 'Leading the AI development team at Devol, coordinating projects that integrate artificial intelligence into business applications. Currently leading DocMind, a project focused on document field extraction for seamless integration with the company\'s RPA system. Leveraging technologies such as OpenAI, Anthropic, Flask, and primarily using Azure for infrastructure. My role includes overseeing development, ensuring scalability, and aligning AI-driven solutions with company objectives while fostering team collaboration.',
    'exp.milestone': 'Growth & Milestones',
    'exp.transactions': '€30,000 in Transactions',
    'exp.transactions.desc': 'Successfully processed over €30,000 in transactions through Wippass. The platform has achieved 7,000 registered users and has been used in major cities such as Bilbao, Barcelona, and Madrid. This milestone reflects the growing popularity and reliability of the platform in managing ticket sales for events.',
    'exp.professional': 'Professional Experience',
    'exp.internship': 'Internship at Nomada Omnimotion and Vicomtech',
    'exp.internship.desc': 'Served as an intern at Nomada Technologies, contributing to the development of a virtual reality game. Worked with omnidirectional treadmills and tracking technologies, leveraging AI and programming skills to enhance immersive gaming experiences. Proficient in Python, sensor integration, and VR technologies.',
    'exp.freelance': 'Freelance & Self-employment',
    'exp.selfemployed': 'Registered as Self-employed',
    'exp.selfemployed.desc': 'Since June 2023, I\'ve been working as a freelancer, managing various projects spanning database management, software development, and cloud architecture. My experience as a self-employed professional has refined my skills in project management, client communication, and technical execution, enabling me to deliver high-quality solutions.',
    'exp.origin': 'The Origin',
    'exp.wippass': 'Founded Wippass',
    'exp.wippass.desc': 'Started Wippass, an online ticket sales platform, during my university studies. Developed the platform from scratch using Python, Flask, and MySQL. Deployed on AWS with EC2, S3, and RDS. Managed all aspects of the platform, including backend development, database management, and cloud architecture.',
    
    // Projects Section
    'projects.main': 'Main Projects',
    'projects.wippass': 'Wippass',
    'projects.wippass.desc': 'An online platform for the management and sale of tickets for event organizers. Offers real-time analysis and an easy-to-use interface.',
    'projects.smartquery': 'Smart Query',
    'projects.smartquery.desc': 'An online platform that allows users to access and interact with SQL data using natural language queries, leveraging advanced OpenAI technology such as GPT and using RAG.',
    'projects.other': 'Other Projects...',
    'projects.linkedinfinder': 'LinkedIn Finder',
    'projects.linkedinfinder.desc': 'A project that automates job searching on LinkedIn. Allows scraping of numerous offers and then analyzing them with AI to extract information and filter only those that fit your needs.',
    'projects.anomalies': 'Anomaly Detection',
    'projects.anomalies.desc': 'A Flask application that simulates API performance and detects anomalies using artificial intelligence algorithms. Offers real-time monitoring and visualization of key API metrics.',
    
    // CTAs
    'cta.viewPost': 'View Post',
    'cta.viewCode': 'View Code',
    'cta.viewArticle': 'View Article',
    'cta.viewCaseStudy': 'View Case Study',
  },
  es: {
    // Navbar
    'nav.tools': 'Herramientas',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.cv': 'CV',
    
    // Hero Section
    'hero.title': 'Impulsado por la IA, el Desarrollo Backend y Soluciones en la Nube | Emprendedor',
    
    // Tools Section
    'tools.title': 'Mis Herramientas Diarias',
    'tools.description': 'Aquí están las tecnologías con las que trabajo todos los días para crear soluciones eficientes y escalables.',
    
    // Experience Section
    'exp.title': 'Experiencia',
    'exp.description': 'Aquí hay algunos de los hitos que he alcanzado en mi carrera.',
    'exp.current': 'Rol Actual',
    'exp.devol': 'Especialista y Líder del Equipo de IA en Devol',
    'exp.devol.desc': 'Liderando el equipo de desarrollo de IA en Devol, coordinando proyectos que integran inteligencia artificial en aplicaciones empresariales. Actualmente liderando DocMind, un proyecto enfocado en la extracción de campos de documentos para una integración fluida con el sistema RPA de la empresa. Aprovechando tecnologías como OpenAI, Anthropic, Flask, y utilizando principalmente Azure para la infraestructura. Mi rol abarca supervisar el desarrollo, asegurar la escalabilidad y alinear las soluciones impulsadas por IA con los objetivos de la empresa mientras fomento la colaboración dentro del equipo.',
    'exp.milestone': 'Crecimiento y Hitos',
    'exp.transactions': '€30,000 en Transacciones',
    'exp.transactions.desc': 'Procesado exitosamente más de €30,000 en transacciones a través de Wippass. La plataforma ha conseguido 7,000 usuarios registrados y ha sido utilizada en ciudades importantes como Bilbao, Barcelona y Madrid. Este hito refleja la creciente popularidad y fiabilidad de la plataforma en la gestión de ventas de entradas para eventos.',
    'exp.professional': 'Experiencia Profesional',
    'exp.internship': 'Prácticas en Nomada Omnimotion y Vicomtech',
    'exp.internship.desc': 'Serví como pasante en Nomada Technologies, contribuyendo al desarrollo de un juego de realidad virtual. Trabajé con cintas de correr omnidireccionales y tecnologías de seguimiento, aprovechando habilidades en IA y programación para mejorar experiencias de juego inmersivas. Competente en Python, integración de sensores y tecnologías de RV.',
    'exp.freelance': 'Freelance y Autoempleo',
    'exp.selfemployed': 'Alta en Autónomos',
    'exp.selfemployed.desc': 'Desde junio de 2023, he estado trabajando como freelance, gestionando varios proyectos que abarcan gestión de bases de datos, desarrollo de software y arquitectura en la nube. Mi experiencia como profesional autoempleado ha perfeccionado mis habilidades en gestión de proyectos, comunicación con clientes y ejecución técnica, permitiéndome entregar soluciones de alta calidad.',
    'exp.origin': 'El Origen',
    'exp.wippass': 'Fundé Wippass',
    'exp.wippass.desc': 'Inicié Wippass, una plataforma de venta de entradas en línea, durante mis estudios universitarios. Desarrollé la plataforma desde cero usando Python, Flask y MySQL. Desplegada en AWS con EC2, S3 y RDS. Gestioné todos los aspectos de la plataforma, incluyendo desarrollo backend, gestión de bases de datos y arquitectura en la nube.',
    
    // Projects Section
    'projects.main': 'Proyectos Principales',
    'projects.wippass': 'Wippass',
    'projects.wippass.desc': 'Una plataforma online para la gestión y venta de entradas para organizadores de eventos. Ofrece análisis en tiempo real y una interfaz fácil de usar.',
    'projects.smartquery': 'Smart Query',
    'projects.smartquery.desc': 'Una plataforma en línea que permite a los usuarios acceder e interactuar con datos SQL utilizando consultas en lenguaje natural, aprovechando la tecnología avanzada de OpenAI como GPT y utilizando RAG.',
    'projects.other': 'Otros Proyectos...',
    'projects.linkedinfinder': 'LinkedIn Finder',
    'projects.linkedinfinder.desc': 'Un proyecto que automatiza la búsqueda de empleo en LinkedIn. Permite hacer scraping de numerosas ofertas y luego analizarlas con IA para extraer información y filtrar solo las que se ajustan a tus necesidades.',
    'projects.anomalies': 'Detección de Anomalías',
    'projects.anomalies.desc': 'Una aplicación Flask que simula el rendimiento de APIs y detecta anomalías utilizando algoritmos de inteligencia artificial. Ofrece monitoreo en tiempo real y visualización de métricas clave de la API.',
    
    // CTAs
    'cta.viewPost': 'Ver Post',
    'cta.viewCode': 'Ver Código',
    'cta.viewArticle': 'Ver Artículo',
    'cta.viewCaseStudy': 'Ver Caso de Estudio',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the stored language preference or default to 'es'
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage as 'en' | 'es');
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    // Save preference to localStorage
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    // Safely access translations with proper fallbacks
    if (!translations[language]) {
      return key;
    }
    
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};