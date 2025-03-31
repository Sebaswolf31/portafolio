// components/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './shared/SectionHeader';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  linkText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link, linkText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex space-x-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-500/40 backdrop-blur-sm rounded-full text-xs text-white">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-6">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.wippass'),
      description: t('projects.wippass.desc'),
      image: "/wippass.jpg",
      tags: ["AWS", "Flask", "MySQL"],
      link: "https://www.linkedin.com/posts/markel-ramiro-vaquero-92530319b_cu%C3%A1nto-dinero-ha-procesado-wippass-para-activity-7190682971429883904-Je80?utm_source=share&utm_medium=member_desktop",
      linkText: t('cta.viewCaseStudy')
    },
    {
      title: t('projects.smartquery'),
      description: t('projects.smartquery.desc'),
      image: "/SmartQuery.PNG",
      tags: ["OpenAI", "React", "RAG"],
      link: "https://github.com/Riemann-def/smart-query",
      linkText: t('cta.viewCode')
    },
    {
      title: t('projects.linkedinfinder'),
      description: t('projects.linkedinfinder.desc'),
      image: "/linkedin-finder.jpg",
      tags: ["OpenAI", "Flask", "SvelteKit"],
      link: "https://www.linkedin.com/posts/markel-ramiro-vaquero-92530319b_baeqsquedadeempleo-productividad-automatizaciaejn-activity-7305559300788117504-8cL9",
      linkText: t('cta.viewArticle')
    },
    {
      title: t('projects.anomalies'),
      description: t('projects.anomalies.desc'),
      image: "/result.gif",
      tags: ["Docker", "Grafana", "Prometheus"],
      link: "https://www.linkedin.com/pulse/monitoreo-y-detecci%C3%B3n-de-anomal%C3%ADas-en-apis-con-flask-ramiro-vaquero-mf2yc",
      linkText: t('cta.viewCaseStudy')
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-indigo-950/30">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title={t('projects.main')} 
          description="A showcase of my latest work and innovative solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              linkText={project.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;