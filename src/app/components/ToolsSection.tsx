// components/ToolsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './shared/SectionHeader';

interface TechBadgeProps {
  icon: string;
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-2 bg-indigo-800/30 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-800/50 hover:scale-105">
      <img src={icon} alt={name} className="w-5 h-5" />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};

interface TechCategoryProps {
  title: string;
  technologies: { icon: string; name: string }[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, technologies }) => {
  return (
    <div className="bg-indigo-900/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-indigo-400">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <TechBadge key={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

const ToolsSection: React.FC = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      title: "AI & Machine Learning",
      technologies: [
        { icon: "/openai.svg", name: "OpenAI" },
        { icon: "/python.svg", name: "Python" },
        { icon: "/tensorflow.svg", name: "TensorFlow" },
        { icon: "/pytorch.svg", name: "PyTorch" },
        { icon: "/scikit-learn.svg", name: "Scikit-learn" }
      ]
    },
    {
      title: "Backend & Infrastructure",
      technologies: [
        { icon: "/kubernetes.svg", name: "Kubernetes" },
        { icon: "/docker.svg", name: "Docker" },
        { icon: "/amazon-aws.svg", name: "AWS" },
        { icon: "/azure.png", name: "Azure" },
        { icon: "/flask.svg", name: "Flask" },
        { icon: "/node.svg", name: "Node.js" },
        { icon: "/prometheus.svg", name: "Prometheus" },
        { icon: "/grafana.svg", name: "Grafana" }
      ]
    },
    {
      title: "Databases & Frontend",
      technologies: [
        { icon: "/postgres.svg", name: "PostgreSQL" },
        { icon: "/mysql-original-wordmark.svg", name: "MySQL" },
        { icon: "/mongodb.svg", name: "MongoDB" },
        { icon: "/react.svg", name: "React" },
        { icon: "/next.svg", name: "Next.js" },
        { icon: "/tailwind.svg", name: "Tailwind" },
        { icon: "/sveltekit.svg", name: "SvelteKit" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title={t('tools.title')} 
          description={t('tools.description')} 
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-10"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl"></div>

          {/* Tech categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <TechCategory key={index} title={category.title} technologies={category.technologies} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;