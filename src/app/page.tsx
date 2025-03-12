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
        <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Contenido */}
        <img
          src="/perfil-markel.jpg"
          alt="Avatar"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative z-10">Markel Ramiro</h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">
        Impulsado por la IA, el Desarrollo Backend y Soluciones en la Nube | Emprendedor.
        </p>
        {/* Sección de Contacto */}
        <div className="flex items-center space-x-4 mt-12 relative z-10 bg-zinc-200/10 p-2 rounded-lg border border-[#e7e7e775]">
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
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='herramientas'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Mis Herramientas Diarias</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          Aquí están las tecnologías con las que trabajo todos los días para crear soluciones eficientes y escalables.
          </p>
        </div>
        <LogoCarousel />
      </section>


      

      {/* Sección de Experiencia */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='experiencia'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experiencia</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Aquí hay algunos de los hitos que he alcanzado en mi carrera.
          </p>
          <Experience />
        </div>
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='proyectos'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Proyectos Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wippass */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/wippass.jpg" alt="Wippass Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Wippass</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              Una plataforma online para la gestión y venta de entradas para organizadores de eventos. Ofrece análisis en tiempo real y una interfaz fácil de usar.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/kubernetes.svg" alt="Kubernetes Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/amazon-aws.svg" alt="AWS Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/flask.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/mysql-original-wordmark.svg" alt="MySQL Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/posts/markel-ramiro-vaquero-92530319b_cu%C3%A1nto-dinero-ha-procesado-wippass-para-activity-7190682971429883904-Je80?utm_source=share&utm_medium=member_desktop"
                 className="bg-black text-white px-4 py-2 rounded">Ver Post</a>
              </div>
            </div>

             {/* Smart Query */}
             <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/SmartQuery.PNG" alt="Smart Query Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Smart Query</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              Una plataforma en línea que permite a los usuarios acceder e interactuar con datos SQL utilizando consultas en lenguaje natural, aprovechando la tecnología avanzada de OpenAI como GPT y utilizando RAG.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/docker.svg" alt="Docker Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/rabbitmq.svg" alt="RabbitMQ Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/openai.svg" alt="OpenAI Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/react.svg" alt="React Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Riemann-def/smart-query" className="bg-black text-white px-4 py-2 rounded">Ver Código</a>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Otros Proyectos...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LinkedIn Finder */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/linkedin-finder.jpg" alt="LinkedIn Finder UI Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">LinkedIn Finder</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              Un proyecto que automatiza la búsqueda de empleo en LinkedIn. Permite hacer scraping de numerosas ofertas y luego analizarlas con IA para extraer información y filtrar solo las que se ajustan a tus necesidades.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/openai.svg" alt="OpenAI Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/flask.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/linkedin.png" alt="LinkedIn Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/sveltekit.svg" alt="SvelteKit Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/posts/markel-ramiro-vaquero-92530319b_baeqsquedadeempleo-productividad-automatizaciaejn-activity-7305559300788117504-8cL9" className="bg-black text-white px-4 py-2 rounded">Ver Artículo</a>
              </div>
            </div>
            {/* Proyecto Anomalias */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/result.gif" alt="Project 2 Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Detección de Anomalías</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                Una aplicación Flask que simula el rendimiento de APIs y detecta anomalías utilizando algoritmos de inteligencia artificial. Ofrece monitoreo en tiempo real y visualización de métricas clave de la API.
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

      

    </main>
  );
};

export default HomePage;
