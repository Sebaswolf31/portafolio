// components/ExperienceSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './shared/SectionHeader';

const TimelineItem = ({ title, date, description, icon, technologies, quote, align = 'left' }) => {
  return (
    <motion.div variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }} className="relative">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {align === 'left' && (
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm max-w-md">
              <div className="text-sm text-indigo-400 font-semibold mb-2">{date}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        )}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border-4 border-black">
          {icon}
        </div>
        {align === 'left' ? (
          <div className="w-full md:w-1/2 ml-8">
            {technologies ? (
              <div className="text-gray-400 py-4 px-6 md:px-0 text-sm md:text-base">
                Technologies:
                <div className="flex flex-wrap gap-2 mt-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-900/40 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            ) : quote ? (
              <div className="text-gray-400 py-4 px-6 md:px-0 text-sm md:text-base">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic">
                  {quote}
                </blockquote>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="w-full md:w-1/2 mr-8">
            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm max-w-md">
              <div className="text-sm text-indigo-400 font-semibold mb-2">{date}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const experiences = [
    {
      category: 'exp.current',
      title: t('exp.devol'),
      date: "Jul 2024 - Present",
      description: t('exp.devol.desc'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      technologies: ["OpenAI", "Anthropic", "Azure", "Python", "Flask", "Docker", "Kubernetes"]
    },
    {
      category: 'exp.milestone',
      title: t('exp.transactions'),
      date: "Jun 2024",
      description: t('exp.transactions.desc'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      quote: t('exp.transactions.desc')
    },
    {
      category: 'exp.professional',
      title: t('exp.internship'),
      date: "Sep 2023 - Mar 2024",
      description: t('exp.internship.desc'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      technologies: ["Python", "VR", "Sensor Fusion", "Computer Vision"]
    },
    {
      category: 'exp.origin',
      title: t('exp.wippass'),
      date: "Mar 2023",
      description: t('exp.wippass.desc'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      technologies: ["Python", "Flask", "MySQL", "AWS EC2", "AWS S3", "AWS RDS"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title={t('exp.title')} 
          description={t('exp.description')} 
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {experiences.map((experience, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold inline-block">
                    {t(experience.category)}
                  </div>
                </div>
                <TimelineItem {...experience} />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;