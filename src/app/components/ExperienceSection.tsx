'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TimelineItemProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  tags?: string[];
  icon: React.ReactNode;
  isActive?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  company, 
  date, 
  description, 
  tags, 
  icon, 
  isActive 
}) => {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200"></div>
      
      {/* Icon marker */}
      <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 
        ${isActive ? 'bg-blue-600 text-white border-4 border-blue-100' : 'bg-white text-blue-600 border-2 border-blue-200'}`}>
        {icon}
      </div>
      
      <div className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 ml-4 
        ${isActive ? 'border-l-4 border-l-blue-600' : ''}`}>
        <div className="text-sm text-blue-600 font-medium mb-1">
          {date}
          {isActive && (
            <span className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Current
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          {title}
          {company && <span className="text-gray-600"> @ {company}</span>}
        </h3>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.devol.title'),
      date: t('experience.devol.date'),
      description: t('experience.devol.description'),
      tags: ["OpenAI", "Azure", "LLMs", "Python", "Flask", "Docker", "Kubernetes"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      isActive: true
    },
    {
      title: t('experience.internship.title'),
      date: t('experience.internship.date'),
      description: t('experience.internship.description'),
      tags: ["AI", "VR Technology", "Sensor Fusion", "Computer Vision", "Python"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Founder",
      company: "Wippass",
      date: "Mar 2023 - Jul 2024",
      description: "Built and deployed a complete ticketing platform handling €30,000+ in transactions for local events, with 7,000+ registered users. Managed all technical aspects from development to deployment on AWS.",
      tags: ["Python", "Flask", "MySQL", "AWS", "EC2", "RDS", "S3"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: t('experience.education.title'),
      date: t('experience.education.date'),
      description: t('experience.education.description'),
      tags: ["AI", "Machine Learning", "Neural Networks", "Data Processing", "Kubernetes"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.description')}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              tags={exp.tags}
              icon={exp.icon}
              isActive={exp.isActive}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-blue-600 font-bold text-4xl mb-2">4+</div>
              <div className="text-gray-700">Years of Experience</div>
            </div>
            <div>
              <div className="text-blue-600 font-bold text-4xl mb-2">10+</div>
              <div className="text-gray-700">ML Projects Delivered</div>
            </div>
            <div>
              <div className="text-blue-600 font-bold text-4xl mb-2">5+</div>
              <div className="text-gray-700">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;