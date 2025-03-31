'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

interface SkillBadgeProps {
  name: string;
  icon: string;
  level?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, level = 0 }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative w-8 h-8">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <span className="font-medium text-gray-800">{name}</span>
      {level > 0 && (
        <div className="ml-auto flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-200'}`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: SkillBadgeProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-bold mb-6 text-gray-800">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillBadge 
            key={index}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const mlSkills = [
    { name: 'Python', icon: '/python.svg', level: 5 },
    { name: 'TensorFlow', icon: '/tensorflow.svg', level: 4 },
    { name: 'PyTorch', icon: '/pytorch.svg', level: 4 },
    { name: 'Scikit-learn', icon: '/scikit-learn.svg', level: 5 },
    { name: 'OpenAI API', icon: '/openai.svg', level: 5 },
    { name: 'Hugging Face', icon: '/huggingface.svg', level: 4 },
    { name: 'Langchain', icon: '/langchain.png', level: 4 },
    { name: 'Pandas', icon: '/pandas.svg', level: 5 },
    { name: 'NumPy', icon: '/numpy.svg', level: 5 },
    { name: 'Matplotlib', icon: '/matplotlib.svg', level: 4 },
  ];

  const dataSkills = [
    { name: 'SQL', icon: '/sql.svg', level: 5 },
    { name: 'PostgreSQL', icon: '/postgres.svg', level: 4 },
    { name: 'MongoDB', icon: '/mongodb.svg', level: 3 },
    { name: 'ETL Pipelines', icon: '/etl.svg', level: 4 },
    { name: 'Apache Spark', icon: '/spark.svg', level: 3 },
    { name: 'Kafka', icon: '/kafka.svg', level: 3 },
    { name: 'Airflow', icon: '/airflow.svg', level: 3 },
    { name: 'Data Visualization', icon: '/visualization.svg', level: 4 },
  ];

  const cloudSkills = [
    { name: 'Docker', icon: '/docker.svg', level: 5 },
    { name: 'Kubernetes', icon: '/kubernetes.svg', level: 4 },
    { name: 'AWS', icon: '/amazon-aws.svg', level: 4 },
    { name: 'Azure', icon: '/azure.png', level: 4 },
    { name: 'CI/CD Pipelines', icon: '/cicd.svg', level: 3 },
    { name: 'Git', icon: '/git.svg', level: 5 },
    { name: 'Monitoring', icon: '/grafana.svg', level: 4 },
  ];

  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory title={t('skills.ml.title')} skills={mlSkills} />
          <SkillCategory title={t('skills.data.title')} skills={dataSkills} />
          <SkillCategory title={t('skills.cloud.title')} skills={cloudSkills} />
        </div>
        
        <div className="mt-20 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Technology Stack</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Python', icon: '/python.svg' },
              { name: 'TensorFlow', icon: '/tensorflow.svg' },
              { name: 'PyTorch', icon: '/pytorch.svg' },
              { name: 'Scikit-learn', icon: '/scikit-learn.svg' },
              { name: 'Docker', icon: '/docker.svg' },
              { name: 'Kubernetes', icon: '/kubernetes.svg' },
              { name: 'AWS', icon: '/amazon-aws.svg' },
              { name: 'Azure', icon: '/azure.png' },
              { name: 'PostgreSQL', icon: '/postgres.svg' },
              { name: 'MongoDB', icon: '/mongodb.svg' },
              { name: 'Git', icon: '/git.svg' },
              { name: 'OpenAI', icon: '/openai.svg' },
            ].map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;