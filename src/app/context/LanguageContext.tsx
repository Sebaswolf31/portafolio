'use client';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

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
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',

    // Hero Section
    'hero.title': 'Systems Technologist & Full Stack Developer',
    'hero.subtitle': '"The only way to do great work is to love what you do."',
    'hero.cta': 'See my work',
    'hero.university': 'University of Manizales',
    'hero.degree': 'Degree in Information Systems Technology',
    'hero.github': 'GitHub',
    'hero.position.ml': 'Systems Technologist',
    'hero.position.data': 'Full Stack Developer',

    // About Section
    'about.title': 'About Me',
    'about.description':
      'Full Stack Developer in training with previous experience in technical environments and customer service. Currently seeking my first opportunity in the tech world, focusing on backend with Node.js and APIs.',
    'about.card1.title': 'Experience in Full Stack Development',
    'about.card1.description':
      'During my bootcamp at Henry, I developed projects like an e-commerce platform, a RESTful API for a gym, and an appointment management app for a veterinary clinic, showcasing my ability to solve complex problems and work in teams.',
    'about.card2.title': 'Information Systems Technologist',
    'about.card2.description':
      'Experience in the analysis, design, and implementation of technological solutions aimed at improving operational efficiency. Familiar with agile methodologies, relational and non-relational databases, hardware maintenance, and IT security.',
    'about.card3.title': 'Continuous Learning',
    'about.card3.description':
      'Constantly learning tools like Docker and AWS, and deepening knowledge in DevOps practices and automated testing. Seeking opportunities to apply my technical skills and continue growing in software development.',
    'about.profile.title': 'Professional Profile',
    'about.profile.p1':
      'I am an Information Systems Technologist with solid training as a Full Stack Developer, specializing in the development of modern web applications. My experience spans from building interactive interfaces using React and Next.js to implementing robust backend architectures with NestJS and Express. I have skills in integrating authentication systems (JWT, OAuth) and payment gateways (Stripe, PayPal, Epayco).',
    'about.profile.p2':
      'I’m currently learning tools like Docker and AWS, and diving deeper into DevOps and automated testing practices.',
    'about.profile.p3':
      'My professional background includes roles in industrial and commercial sectors, which have helped me develop a strong work ethic and adaptability. I am actively seeking opportunities to apply my technical skills and continue growing in the field of software development.',
    'about.contact.job': 'Full Stack Developer',
    'about.contact.location': 'Medellín, Colombia',
    'about.contact.email': 'sebasunivercal@gmail.com',

    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.description':
      'I master full stack development to solve complex challenges with robust and efficient solutions',
    'skills.categories.ml': 'Frontend',
    'skills.categories.backend': 'Backend',
    'skills.categories.databases': 'Databases',
    'skills.stack': 'Technology Stack',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle':
      'A selection of projects showcasing my technical skills',
    'projects.viewcode': 'View Code',
    'projects.viewdemo': 'Live Demo',
    'projects.case': 'Case Study',
    'projects.filters.all': 'All Projects',
    'projects.filters.ml': 'Backend',
    'projects.filters.data': 'Frontend',
    'projects.filters.nlp': 'NLP',
    'projects.github': 'See More on GitHub',
    'projects.featured': 'Featured Project',
    'projects.anomaly.title': 'RESTful API for ExtremeGym',
    'projects.anomaly.desc':
      'Developed a RESTful API for ExtremeGym, a fictional gym, using Node.js, Express, JWT, TypeORM, and PostgreSQL.',
    'projects.docmind.title': 'E-commerce',
    'projects.docmind.desc':
      'Developed part of the backend for a fictional tech e-commerce store using Node.js, Express, JWT, TypeORM, and PostgreSQL.',
    'projects.timeseries.title': 'Veterinary Appointment Management',
    'projects.timeseries.desc':
      'Developed a RESTful API for managing appointments in a fictional veterinary clinic. The API allows users to request, cancel, and view appointment history using Node.js, Express, JWT, TypeORM, and PostgreSQL.',
    'projects.nlp.title': 'Movie Viewer',
    'projects.nlp.desc':
      'Built a web page to create fictional movies using Bootstrap, HTML, CSS, and JavaScript. The site allows users to create and edit their own movies.',

    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.description':
      'My background in software development is complemented by technical skills acquired in the industrial sector.',
    'experience.current': 'Current Role',
    'experience.devol': 'Junior Full Stack Developer',
    'experience.devol.desc':
      'Development of web applications using modern technologies like React, Node.js, NestJS, and PostgreSQL. Involved in all stages of the software development lifecycle, from design to deployment.',
    'experience.milestone': 'Growth & Milestones',
    'experience.transactions': 'Featured Projects',
    'experience.transactions.desc':
      'Developed a RESTful API for a gym app, an e-commerce platform, and an appointment management app for a veterinary clinic, integrating backend and frontend solutions.',
    'experience.professional': 'Professional Experience',
    'experience.internship': 'Technical Field Experience',
    'experience.internship.desc':
      'My previous experience in technical sectors was key to building a solid foundation in software development and adopting good practices from the beginning. With everything I learned in logistics, electricity, and maintenance, I strengthened key skills such as problem-solving, logic, and adaptability.',
    'experience.freelance': 'Full Stack Projects',
    'experience.selfemployed': 'Full Stack Developer (Personal Projects)',
    'experience.selfemployed.desc':
      'Developed software projects integrating frontend and backend, focusing on usability, scalability, and best development practices.',
    'experience.origin': 'The Origin',
    'experience.wippass': 'Transition to Development',
    'experience.wippass.desc':
      'My previous experience in technical sectors helped me build a solid foundation for software development and adopt best practices from the start.',
    'experience.years': 'Years of Experience',
    'experience.projects': 'Full Stack Projects Delivered',
    'experience.tech': 'Development Experience',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.description':
      'Interested in working together? Reach out through any of these channels.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.connect': 'Connect',
    'contact.download': 'Download Resume',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with',
    'footer.using': 'using Next.js and Tailwind CSS',
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
    'hero.title': 'Tecnólogo en sistemas & Desarrollador Full Stack',
    'hero.subtitle':
      '"La única forma de hacer un gran trabajo es amar lo que haces."',
    'hero.cta': 'Ver mi trabajo',
    'hero.university': 'Universidad de Manizales',
    'hero.degree': 'Grado en Tecnólogo en Sistemas Informáticos',
    'hero.github': 'GitHub',
    'hero.position.ml': 'Tecnólogo en Sistemas',
    'hero.position.data': 'Desarrolador FullStack',

    // About Section
    'about.title': 'Sobre Mí',
    'about.description':
      '  Desarrollador Full Stack en formación con experiencia previa en entornos técnicos y atención al cliente. Actualmente, busco mi primera oportunidad en el mundo tech, enfocándome en backend con Node.js y APIs.',
    'about.card1.title': 'Experiencia en FullStack Development',
    'about.card1.description':
      'Durante mi bootcamp en Henry, desarrollé proyectos como e-commerce, API RESTfull para un gimnasio, gestión de turnos para una veterinaria, demostrando mi capacidad para resolver problemas complejos y trabajar en equipo.',
    'about.card2.title': 'Tecnólogo en Sistemas Informaticos',
    'about.card2.description':
      ' Experiencia en el análisis, diseño e implementación de soluciones tecnológicas orientadas a mejorar la eficiencia operativa. Familiarizado con metodologías ágiles, bases de datos relacionales y no relacionales, mantenimiento de hardware, y seguridad informática. ',
    'about.card3.title': ' Aprendizaje Continuo',
    'about.card3.description':
      'En constante aprendizaje de herramientas como Docker y AWS, y profundizando en prácticas de DevOps y pruebas automatizadas. Buscando oportunidades que me permitan aplicar mis conocimientos técnicos y continuar creciendo en el ámbito del desarrollo de sofware',
    'about.profile.title': 'Perfil Profesional',
    'about.profile.p1':
      'Soy Tecnólogo en Sistemas Informáticos con sólida formación como Desarrollador Full Stack, especializado en el desarrollo de aplicaciones web modernas. Mi experiencia abarca desde la creación de interfaces interactivas utilizando React y Next.js, hasta la implementación de arquitecturas backend robustas con NestJS y Express. Poseo habilidades en la integración de sistemas de autenticación (JWT, OAuth) y pasarelas de pago (Stripe, PayPal, Epayco),',
    'about.profile.p2':
      'Así como en el despliegue de aplicaciones en plataformas como Vercel. Actualmente, me encuentro en proceso de aprendizaje de herramientas como Docker y AWS, y profundizando en prácticas de DevOps y pruebas automatizadas.',
    'about.profile.p3':
      'Mi trayectoria profesional incluye roles en sectores industriales y comerciales, lo que me ha permitido desarrollar una fuerte ética de trabajo y adaptabilidad. Estoy en búsqueda activa de oportunidades que me permitan aplicar mis conocimientos técnicos y continuar creciendo en el ámbito del desarrollo de software.',
    'about.contact.job': 'Desarrollador FullStack',
    'about.contact.location': 'Medellin, Colombia',
    'about.contact.email': 'sebasunivercal@gmail.com',

    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.description':
      'Domino el desarrollo full stack para resolver desafíos complejos con soluciones robustas y eficientes',
    'skills.categories.ml': 'Frontend',
    'skills.categories.backend': 'Backend',
    'skills.categories.databases': 'Bases de Datosd',
    'skills.stack': 'Stack Tecnológico',

    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle':
      'Una selección de proyectos que muestran mis habilidades técnicas',
    'projects.viewcode': 'Ver Código',
    'projects.viewdemo': 'Demo en Vivo',
    'projects.case': 'Caso Práctico',
    'projects.filters.all': 'Todos los Proyectos',
    'projects.filters.ml': 'Backend',
    'projects.filters.data': 'Frontend',
    'projects.filters.nlp': 'PLN',
    'projects.github': 'Ver Más en GitHub',
    'projects.featured': 'Proyecto Destacado',
    'projects.anomaly.title': 'API RESTful para ExtremeGym',
    'projects.anomaly.desc':
      'Desarrollé una API RESTful para ExtremeGym, un gimnasio ficticio, utilizando Node.js Express, JWT, TypeORM y PostgreSQL. ',
    'projects.docmind.title': 'E-commerce ',
    'projects.docmind.desc':
      'Desarrollé un e-commerce de parte del backend para una tienda de tecnologia ficiticia, utilizando Node.js, Express, JWT, TypeORM y PostgreSQL.',
    'projects.timeseries.title': 'Gestion de Turnos Veterinaria',
    'projects.timeseries.desc':
      'Desarrollé una API RESTful para la gestión de turnos de una veterinaria ficiticia. La API permite a los usuarios registrados soicitar sus turnos, cancelarlos y ver su historial de turnos. Utilizando Node.js, Express, JWT, TypeORM y PostgreSQL.',
    'projects.nlp.title': 'Visor de Peliculas',
    'projects.nlp.desc':
      'Desarrollé una pagina web para crear peliculas ficiticias, utilizando Bootstrap, HTML, CSS y JavaScript.',

    // Experience Section
    'experience.title': 'Experiencia Profesional',
    'experience.description':
      'Mi trayectoria en el desarrollo de software, complementada con habilidades técnicas adquiridas en el sector industrial.',
    'experience.current': 'Rol Actual',
    'experience.devol': 'Desarrollador Full Stack Junior',
    'experience.devol.desc':
      'Desarrollo de aplicaciones web utilizando tecnologías modernas como React, Node.js, NestJS y PostgreSQL. Participación en todas las etapas del ciclo de vida del software, desde el diseño hasta el despliegue.',
    'experience.milestone': 'Crecimiento e Hitos',
    'experience.transactions': 'Proyectos destacados',
    'experience.transactions.desc':
      'Implementé una API RESTful para una app de gimnasio, desarrollé una plataforma de e-commerce y una app de gestión de turnos para veterinaria, integrando soluciones backend y frontend.',
    'experience.professional': 'Experiencia Profesional',
    'experience.internship': 'Experiencia técnica en campo',
    'experience.internship.desc':
      'Mi experiencia previa en sectores técnicos fue clave para construir una base sólida en el desarrollo de software y adoptar buenas prácticas desde el comienzo,  con todo lo aprendido en logística, electricidad y mantenimiento, fortalecí habilidades clave como la resolución de problemas, lógica y adaptabilidad.',
    'experience.freelance': 'Proyectos Full Stack',
    'experience.selfemployed':
      'Desarrollador Full Stack (Proyectos Personales)',
    'experience.selfemployed.desc':
      'Desarrollé proyectos de software que integran frontend y backend, con enfoque en usabilidad, escalabilidad y buenas prácticas de desarrollo.',
    'experience.origin': 'El Origen',
    'experience.wippass': 'Transición al desarrollo',
    'experience.wippass.desc':
      'Mi experiencia previa en sectores técnicos fue clave para construir una base sólida en el desarrollo de software y adoptar buenas prácticas desde el comienzo.',
    'experience.years': 'Años de Experiencia',
    'experience.projects': 'Proyectos Full Stack Realizados',
    'experience.tech': 'Experiencia en Desarrollo',

    // Contact Section
    'contact.title': 'Contáctame',
    'contact.description':
      '¿Interesado en trabajar juntos? Ponte en contacto a través de cualquiera de estos canales.',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.connect': 'Conectar',
    'contact.download': 'Descargar Currículum',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Construido con',
    'footer.using': 'usando Next.js y Tailwind CSS',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
