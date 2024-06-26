'use client'

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaCopy, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

const HomePage = () => {

  const email = "hola@markelramiro.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
  };

  const technologies = [
    "/kubernetes.svg",
    "/docker.svg",
    "/grafana.svg",
    "/prometheus.svg",
    "python.svg",
    "JavaScript-logo.png",
    "google-cloud.svg",
    "azure.png",
    "/amazon-aws.svg",
  ];



  return (

    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      {/* Primera Sección Visual */}
      <section className="relative w-full flex flex-col items-center justify-center py-12 px-4 text-gray-800 md:pb-48">
        {/* Círculo 1 */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-50 rounded-full mix-blend-multiply blur-xl transform -translate-y-1/2 animate-move-slower md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Círculo 2 */}
        <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-lime-50 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Contenido */}
        <img
          src="/perfil-markel.jpg"
          alt="Avatar"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative z-10">Markel Ramiro</h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">
          Driven by Big Data, Backend Development and Cloud Solutions | Entrepreneur.
        </p>
        {/* Sección de Contacto */}
        <div className="flex items-center space-x-4 mt-12 relative z-10 bg-gray-200/40 p-2 rounded-lg">
          <p className="text-lg md:text-xl text-gray-700">{email}</p>
          <a href={`mailto:${email}`} className="text-slate-400 hover:text-slate-500">
            <FaEnvelope size={24} />
          </a>
          <button onClick={handleCopyEmail} className="text-slate-400 hover:text-slate-500">
            {copied ? <FaCheck size={24} /> : <FaCopy size={24} />}
          </button>
        </div>
        <div className="flex space-x-8 mt-8 relative z-10">
          <a href="https://github.com/Riemann-def" className="text-slate-900 hover:text-blue-500">
            <FaGithub size={52} />
          </a>
          <a href="https://www.linkedin.com/in/markel-ramiro-vaquero-92530319b/" className="text-slate-800 hover:text-blue-500">
            <FaLinkedin size={52} />
          </a>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">My Daily Tools</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          Here are the technologies I work with every day to create efficient and scalable solutions.
          </p>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Main Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wippass */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/wippass.jpg" alt="Wippass Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Wippass</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                An online ticket management and sales platform for event organizers. It provides real-time analytics and a user-friendly interface.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/kubernetes.svg" alt="Kubernetes Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/amazon-aws.svg" alt="AWS Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/flask.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/mysql-original-wordmark.svg" alt="MySQL Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://wippass.com" className="bg-black text-white px-4 py-2 rounded">Visit Site</a>
              </div>
            </div>

             {/* Smart Query */}
             <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/SmartQuery.PNG" alt="Smart Query Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Smart Query</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              An online platform that allows users to access and interact with SQL data using natural language queries, leveraging advanced OpenAI technology like GPT.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/docker.svg" alt="Docker Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/rabbitmq.svg" alt="RabbitMQ Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/openai.svg" alt="OpenAI Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/react.svg" alt="React Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Riemann-def/smart-query" className="bg-black text-white px-4 py-2 rounded">View Code</a>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Other Projects...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/screenshoot.jpg" alt="Portfolio Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Portfolio</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              My personal portfolio, built with Next.js and Tailwind CSS, showcases my projects, skills, and experience. It is deployed with Vercel and GitHub.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/next.svg" alt="Next.js Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/typescript.svg" alt="TypeScript Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/tailwind.svg" alt="Tailwind Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/vercel.svg" alt="Vercel Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Riemann-def/portfolio" className="bg-black text-white px-4 py-2 rounded">View Code</a>
              </div>
            </div>
            {/* Proyecto Anomalias */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/result.gif" alt="Project 2 Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Anomaly Detection</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                A Flask application that simulates API performance and detects anomalies using AI algorithms. It offers real-time monitoring and visualization of key API metrics.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/docker.svg" alt="Docker Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/grafana.svg" alt="Grafana Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/prometheus.svg" alt="Prometheus Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/flask.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/pulse/monitoreo-y-detecci%C3%B3n-de-anomal%C3%ADas-en-apis-con-flask-ramiro-vaquero-mf2yc" className="bg-black text-white px-4 py-2 rounded">View Case Study</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='experience'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experience</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Here are some of the milestones I have achieved in my career.
          </p>
          <Experience />
        </div>
      </section>

    </main>
  );
};

export default HomePage;
