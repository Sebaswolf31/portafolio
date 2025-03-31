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

const translations: TranslationsType = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    
    // Hero Section
    'hero.title': 'Data Scientist & ML Engineer',
    'hero.subtitle': 'Building intelligent data solutions that deliver real business impact',
    'hero.cta': 'View My Work',
    
    // About Section
    'about.title': 'About Me',
    'about.description': "I'm a Data Scientist and Machine Learning Engineer passionate about transforming data into actionable insights. With expertise in AI/ML model development and deployment, I help organizations leverage data-driven decision making for competitive advantage.",
    'about.card1.title': 'AI & ML Expertise',
    'about.card1.description': 'Developed and deployed AI solutions including anomaly detection systems, predictive models, and natural language processing applications.',
    'about.card2.title': 'Data Pipeline Engineer',
    'about.card2.description': 'Experience building robust data pipelines and ETL processes that ensure data quality and availability for analytics workloads.',
    'about.card3.title': 'Cloud-Native Deployment',
    'about.card3.description': 'Skilled in containerizing ML applications and deploying them to production environments using Docker and Kubernetes.',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.description': 'My toolkit for solving complex data challenges.',
    'skills.ml.title': 'Machine Learning',
    'skills.data.title': 'Data Engineering',
    'skills.cloud.title': 'Cloud & DevOps',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.description': 'A selection of data science and machine learning projects showcasing my technical abilities.',
    'projects.anomalies.title': 'Anomaly Detection System',
    'projects.anomalies.description': 'Developed an anomaly detection system for API performance monitoring using statistical methods and machine learning. The system processes time-series data in real-time and sends alerts when unusual patterns are detected.',
    'projects.docmind.title': 'DocMind LLM Document Extraction',
    'projects.docmind.description': 'Led development of an LLM-based system that automatically extracts structured data from unstructured documents, reducing manual processing time by 85% for enterprise clients.',
    'projects.query.title': 'Natural Language to SQL',
    'projects.query.description': 'Built a RAG-based system that converts natural language questions into SQL queries, allowing non-technical users to query databases using conversational language.',
    'projects.kaggle.title': 'Predictive Maintenance Model',
    'projects.kaggle.description': 'Created a machine learning model to predict equipment failures before they occur, using sensor data and maintenance logs. Implemented feature engineering and ensemble methods to achieve 92% prediction accuracy.',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.description': 'My journey in the world of data science and machine learning.',
    'experience.current': 'Current Role',
    'experience.devol.title': 'Data & AI Engineer at Devol',
    'experience.devol.date': 'Jul 2024 - Present',
    'experience.devol.description': 'Leading AI development initiatives for enterprise clients, focusing on document processing automation, natural language interfaces, and predictive analytics. Responsible for end-to-end model development, from data preparation to production deployment.',
    'experience.internship.title': 'AI Integration Specialist at Nomada Omnimotion',
    'experience.internship.date': 'Sep 2023 - Mar 2024',
    'experience.internship.description': 'Contributed to VR technology innovation by developing AI-powered pose estimation systems for omnidirectional treadmills. Engineered sensor fusion algorithms for real-time motion data integration.',
    'experience.education.title': 'B.Sc. in Artificial Intelligence',
    'experience.education.date': 'Sep 2020 - Jul 2024',
    'experience.education.description': 'University of the Basque Country (UPV/EHU). Focus on machine learning, neural networks, and data processing. Final project on anomaly detection with Kubernetes deployment (Grade: 9/10).',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.description': "Interested in working together? I'd love to hear from you.",
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.email': 'Email Me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
    // CTAs
    'cta.view': 'View Project',
    'cta.code': 'View Code',
    'cta.case': 'Case Study',
    'cta.demo': 'Live Demo',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'Currículum',
    
    // Hero Section
    'hero.title': 'Científico de Datos e Ingeniero ML',
    'hero.subtitle': 'Construyendo soluciones inteligentes con datos que generan impacto real en los negocios',
    'hero.cta': 'Ver mi trabajo',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.description': 'Soy un Científico de Datos e Ingeniero de Machine Learning apasionado por transformar datos en información accionable. Con experiencia en desarrollo y despliegue de modelos de IA/ML, ayudo a las organizaciones a aprovechar la toma de decisiones basada en datos para obtener ventajas competitivas.',
    'about.card1.title': 'Experiencia en IA y ML',
    'about.card1.description': 'He desarrollado e implementado soluciones de IA que incluyen sistemas de detección de anomalías, modelos predictivos y aplicaciones de procesamiento de lenguaje natural.',
    'about.card2.title': 'Ingeniero de Data Pipelines',
    'about.card2.description': 'Experiencia construyendo pipelines de datos robustos y procesos ETL que garantizan la calidad y disponibilidad de los datos para cargas de trabajo analíticas.',
    'about.card3.title': 'Despliegue Cloud-Native',
    'about.card3.description': 'Especializado en containerizar aplicaciones ML y desplegarlas en entornos de producción utilizando Docker y Kubernetes.',
    
    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.description': 'Mi caja de herramientas para resolver desafíos complejos de datos.',
    'skills.ml.title': 'Machine Learning',
    'skills.data.title': 'Ingeniería de Datos',
    'skills.cloud.title': 'Cloud & DevOps',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.description': 'Una selección de proyectos de ciencia de datos y machine learning que muestran mis habilidades técnicas.',
    'projects.anomalies.title': 'Sistema de Detección de Anomalías',
    'projects.anomalies.description': 'Desarrollé un sistema de detección de anomalías para monitoreo del rendimiento de APIs utilizando métodos estadísticos y machine learning. El sistema procesa datos de series temporales en tiempo real y envía alertas cuando se detectan patrones inusuales.',
    'projects.docmind.title': 'Extracción de Documentos con LLM (DocMind)',
    'projects.docmind.description': 'Lideré el desarrollo de un sistema basado en LLM que extrae automáticamente datos estructurados de documentos no estructurados, reduciendo el tiempo de procesamiento manual en un 85% para clientes empresariales.',
    'projects.query.title': 'Lenguaje Natural a SQL',
    'projects.query.description': 'Construí un sistema basado en RAG que convierte preguntas en lenguaje natural a consultas SQL, permitiendo a usuarios no técnicos consultar bases de datos utilizando lenguaje conversacional.',
    'projects.kaggle.title': 'Modelo de Mantenimiento Predictivo',
    'projects.kaggle.description': 'Creé un modelo de machine learning para predecir fallos en equipos antes de que ocurran, utilizando datos de sensores y registros de mantenimiento. Implementé ingeniería de características y métodos de ensemble para lograr una precisión de predicción del 92%.',
    
    // Experience Section
    'experience.title': 'Experiencia Profesional',
    'experience.description': 'Mi trayectoria en el mundo de la ciencia de datos y el machine learning.',
    'experience.current': 'Rol Actual',
    'experience.devol.title': 'Ingeniero de Datos e IA en Devol',
    'experience.devol.date': 'Jul 2024 - Presente',
    'experience.devol.description': 'Liderando iniciativas de desarrollo de IA para clientes empresariales, enfocándome en automatización de procesamiento de documentos, interfaces de lenguaje natural y análisis predictivo. Responsable del desarrollo de modelos de extremo a extremo, desde la preparación de datos hasta el despliegue en producción.',
    'experience.internship.title': 'Especialista en Integración de IA en Nomada Omnimotion',
    'experience.internship.date': 'Sep 2023 - Mar 2024',
    'experience.internship.description': 'Contribuí a la innovación en tecnología VR desarrollando sistemas de estimación de postura basados en IA para cintas omnidireccionales. Diseñé algoritmos de fusión de sensores para la integración de datos de movimiento en tiempo real.',
    'experience.education.title': 'Grado en Inteligencia Artificial',
    'experience.education.date': 'Sep 2020 - Jul 2024',
    'experience.education.description': 'Universidad del País Vasco (UPV/EHU). Enfoque en machine learning, redes neuronales y procesamiento de datos. Proyecto final sobre detección de anomalías con despliegue en Kubernetes (Nota: 9/10).',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.description': '¿Interesado en trabajar juntos? Me encantaría saber de ti.',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.message': 'Tu Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.email': 'Enviar Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
    // CTAs
    'cta.view': 'Ver Proyecto',
    'cta.code': 'Ver Código',
    'cta.case': 'Caso Práctico',
    'cta.demo': 'Demo en Vivo',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the stored language preference or default to 'en'
  const [language, setLanguage] = useState<'en' | 'es'>('en');

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