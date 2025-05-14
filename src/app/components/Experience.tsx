'use client';

import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <div className='-my-6'>
      {/* Current Role */}
      <div className='relative pl-8 sm:pl-32 py-6 group'>
        <div className='font-medium text-2xl text-blue-500 mb-1 sm:mb-0'>
          {t('experience.current')}
        </div>
        <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
          <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
            Sep, 2024
          </time>
          <div className='text-xl font-bold text-slate-900'>
            {t('experience.devol')}{' '}
            <a
              href='https://devol.es'
              className='text-blue-600 hover:underline'
            >
            </a>
          </div>
        </div>
        <div className='text-slate-500'>{t('experience.devol.desc')}</div>
      </div>

      {/* Growth & Milestones */}
      <div className='relative pl-8 sm:pl-32 py-6 group'>
        <div className='font-medium text-2xl text-blue-500 mb-1 sm:mb-0'>
          {t('experience.milestone')}
        </div>
        <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
          <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
            Jun, 2024
          </time>
          <div className='text-xl font-bold text-slate-900'>
            {t('experience.transactions')}
          </div>
        </div>
        <div className='text-slate-500'>
          {t('experience.transactions.desc')}
        </div>
      </div>

      {/* Professional Experience */}
      <div className='relative pl-8 sm:pl-32 py-6 group'>
        <div className='font-medium text-2xl text-blue-500 mb-1 sm:mb-0'>
          {t('experience.professional')}
        </div>
        <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
          <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
            Oct, 2023
          </time>
          <div className='text-xl font-bold text-slate-900'>
            {t('experience.internship')}
          </div>
        </div>
        <div className='text-slate-500'>{t('experience.internship.desc')}</div>
      </div>

      {/* Freelance & Self-employment */}
      <div className='relative pl-8 sm:pl-32 py-6 group'>
        <div className='font-medium text-2xl text-blue-500 mb-1 sm:mb-0'>
          {t('experience.freelance')}
        </div>
        <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
          <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
            Jun, 2023
          </time>
          <div className='text-xl font-bold text-slate-900'>
            {t('experience.selfemployed')}
          </div>
        </div>
        <div className='text-slate-500'>
          {t('experience.selfemployed.desc')}
        </div>
      </div>

      {/* The Origin */}
      <div className='relative pl-8 sm:pl-32 py-6 group'>
        <div className='font-medium text-2xl text-blue-500 mb-1 sm:mb-0'>
          {t('experience.origin')}
        </div>
        <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
          <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
            Mar, 2023
          </time>
          <div className='text-xl font-bold text-slate-900'>
            {t('experience.wippass')}
          </div>
        </div>
        <div className='text-slate-500'>{t('experience.wippass.desc')}</div>
      </div>
    </div>
  );
};

export default Experience;
