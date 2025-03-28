'use client'

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
const technologies = [
  {
    name: 'Kubernetes',
    lightLogo: '/kubernetes.svg',
    darkLogo: '/kubernetes.svg',
  },
  {
    name: 'Docker',
    lightLogo: '/docker.svg',
    darkLogo: '/docker.svg',
  },
  {
    name: 'OpenAI',
    lightLogo: '/openai.svg',
    darkLogo: '/openai.svg',
  },
  {
    name: 'Azure',
    lightLogo: '/azure.png',
    darkLogo: '/azure.png',
  },
  {
    name: 'AWS',
    lightLogo: '/amazon-aws.svg',
    darkLogo: '/amazon-aws.svg',
  },
  {
    name: 'Grafana',
    lightLogo: '/grafana.svg',
    darkLogo: '/grafana.svg',
  },
  {
    name: 'PostgreSQL',
    lightLogo: '/postgres.svg',
    darkLogo: '/postgres.svg',
  },
  {
    name: 'MySQL',
    lightLogo: '/mysql-original-wordmark.svg',
    darkLogo: '/mysql-original-wordmark.svg',
  },
  {
    name: 'Python',
    lightLogo: '/python.svg',
    darkLogo: '/python.svg',
  },
  {
    name: 'Prometheus',
    lightLogo: '/prometheus.svg',
    darkLogo: '/prometheus.svg',
  },
  {
    name: 'ReactJS',
    lightLogo: '/react.svg',
    darkLogo: '/react.svg',
  },
];

const LogoCarousel = () => {
  const { language } = useLanguage();
  
  return (
    <div className="relative overflow-hidden mx-auto max-w-7xl py-6">
      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white dark:from-gray-800 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white dark:from-gray-800 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Carousel container */}
      <div className="flex animate-slide-infinite space-x-8 py-4">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex-shrink-0 w-24 md:w-32 lg:w-40 flex flex-col items-center group">
            <div className="h-12 md:h-16 lg:h-20 w-full relative flex items-center justify-center">
              <Image 
                src={tech.lightLogo} 
                alt={`${tech.name} logo`}
                width={80}
                height={80}
                className="h-10 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-110 dark:hidden"
              />
              <Image 
                src={tech.darkLogo} 
                alt={`${tech.name} logo`}
                width={80}
                height={80}
                className="h-10 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-110 hidden dark:block"
              />
            </div>
            <span className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;