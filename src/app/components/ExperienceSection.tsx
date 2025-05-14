'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

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
  isActive,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className='relative pl-10 pb-10 last:pb-0'
    >
      {/* Vertical line */}
      <div className='absolute left-0 top-0 bottom-0 w-px bg-indigo-200'></div>

      {/* Icon marker */}
      <div
        className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 
        ${
          isActive
            ? 'bg-indigo-600 text-white border-4 border-indigo-100'
            : 'bg-white text-indigo-600 border-2 border-indigo-200'
        }`}
      >
        {icon}
      </div>

      <div
        className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 ml-4 
        ${isActive ? 'border-l-4 border-l-indigo-600' : ''}`}
      >
        <div className='text-sm text-indigo-600 font-medium mb-1'>
          {date}
          {isActive && (
            <span className='inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800'>
              Current
            </span>
          )}
        </div>

        <h3 className='text-xl font-bold mb-2'>
          {title}
          {company && <span className='text-gray-600'> @ {company}</span>}
        </h3>

        <p className='text-gray-600 mb-4'>{description}</p>

        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700'
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.internship'),
      date: 'Mar 2013 - Jul 2024',
      description: t('experience.internship.desc'),
      tags: ['sotf skills', 'teamwork', 'communication', 'problem-solving'],
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          ></path>
        </svg>
      ),
    },

    {
      title: `${t('experience.devol')}`,
      date: 'Ago 2024 - Present',
      description: t('experience.devol.desc'),
      tags: [
        'Node.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Docker',
        'React',
        'PostgreSQL',
      ],
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          ></path>
        </svg>
      ),
      isActive: true,
    },

    {
      title: `${t('experience.milestone')}`,
      date: '',
      description: t('experience.transactions.desc'),
      tags: [
        'Node.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Docker',
        'React',
        'PostgreSQL',
      ],
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          ></path>
        </svg>
      ),
    },

    {
      title: t('experience.selfemployed'),
      date: '',
      description: t('experience.selfemployed.desc'),
      tags: [
        'Node.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Docker',
        'React',
        'PostgreSQL',
      ],
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section id='experience' className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('experience.title')}
          </h2>
          <div className='h-1 w-20 bg-indigo-500 mx-auto mb-8'></div>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            {t('experience.description')}
          </p>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              date={exp.date}
              description={exp.description}
              tags={exp.tags}
              icon={exp.icon}
              isActive={exp.isActive}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-16 bg-indigo-50 rounded-xl p-8'
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div>
              <div className='text-indigo-600 font-bold text-4xl mb-2'>9</div>
              <div className='text-gray-700'>{t('experience.years')}</div>
            </div>
            <div>
              <div className='text-indigo-600 font-bold text-4xl mb-2'>4+</div>
              <div className='text-gray-700'>{t('experience.projects')}</div>
            </div>
            <div>
              <div className='text-indigo-600 font-bold text-4xl mb-2'>1+</div>
              <div className='text-gray-700'>{t('experience.tech')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
