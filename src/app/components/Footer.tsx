'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='py-8 bg-zinc-950 relative overflow-hidden border-t border-zinc-900'>
      {/* Background pattern */}
      <div className='absolute inset-0 dot-grid opacity-5'></div>

      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <div className='text-2xl font-bold font-space gradient-text mb-2'>
              Juan Sebastian Cardona
            </div>
            <p className='text-zinc-500 text-sm'>
              FullStack Developer 
            </p>
          </div>

          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8'>
            {/* Quick links */}
            <div className='flex space-x-6'>
              <a
                href='#about'
                className='text-zinc-400 hover:text-cyan-400 transition-colors text-sm'
              >
                {t('nav.about')}
              </a>
              <a
                href='#skills'
                className='text-zinc-400 hover:text-cyan-400 transition-colors text-sm'
              >
                {t('nav.skills')}
              </a>
              <a
                href='#projects'
                className='text-zinc-400 hover:text-cyan-400 transition-colors text-sm'
              >
                {t('nav.projects')}
              </a>
              <a
                href='#contact'
                className='text-zinc-400 hover:text-cyan-400 transition-colors text-sm'
              >
                {t('nav.contact')}
              </a>
            </div>

            {/* Social links */}
            <div className='flex space-x-4'>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href='https://github.com/Sebaswolf31'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-white transition-colors'
                aria-label='GitHub'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
                  />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href='https://www.linkedin.com/in/juan-sebastian-cardona-595449261/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-white transition-colors'
                aria-label='LinkedIn'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href='sebasunivercal@gmail.com'
                className='text-zinc-400 hover:text-white transition-colors'
                aria-label='Email'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-zinc-600 text-sm'>
            &copy; {currentYear} Juan Sebastian Cardona {t('footer.rights')}
          </p>

          <div className='mt-4 md:mt-0 text-zinc-600 text-xs'>
            {t('footer.built')} <span className='text-cyan-500'>♥</span>{' '}
            {t('footer.using')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;