// components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './shared/SectionHeader';

const AboutCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-indigo-900/20 p-8 rounded-xl border border-indigo-500/20 backdrop-blur-sm hover:bg-indigo-900/30 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-500/20 text-indigo-400 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const aboutCards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: "AI Expertise",
      description: "Developed and deployed AI solutions including document extraction, natural language SQL queries, and anomaly detection systems."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: "Full-Stack Developer",
      description: "Built and deployed end-to-end applications using modern technologies like React, Flask, and cloud infrastructure services."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Entrepreneur",
      description: "Founded Wippass, a successful ticketing platform handling €30,000+ in transactions with 7,000+ registered users."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-indigo-950/30">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="About Me" 
          description="I'm an AI Engineer and Backend Developer with a passion for cloud solutions and entrepreneurship. With experience in developing and deploying AI-powered applications, I bring technical expertise and business acumen to every project."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {aboutCards.map((card, index) => (
            <AboutCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;