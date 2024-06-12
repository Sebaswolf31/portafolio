import React from 'react';
import  Image  from 'next/image';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
      {/* Primera Sección Visual */}
      <section className="relative w-full flex flex-col items-center justify-center py-48 bg-slate-50 text-gray-800">
        {/* Círculo 1 */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move-slower md:w-96 md:h-96"></div>
        {/* Círculo 2 */}
        <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-lime-50 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-96 md:h-96"></div>
        {/* Contenido */}
        <h1 className="text-6xl font-bold mb-4 relative z-10">Markel Ramiro</h1>
        <p className="text-2xl text-center max-w-2xl relative z-10">
          A showcase of my projects and skills in Big Data, Backend Development, and Cloud Infrastructure.
        </p>
      </section>

      {/* Sección de Proyectos */}
      <section className="w-full py-24 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
              <Image src="/wippass.PNG" alt="Wippass Image" className="w-full h-64 object-cover rounded-t-lg" />
              <h3 className="text-3xl font-semibold my-4 text-gray-900">Wippass</h3>
              <p className="text-lg mb-4 text-gray-800">
                An online ticket management and sales platform for event organizers. It provides real-time analytics and a user-friendly interface.
              </p>
              <div className="flex items-center mb-4">
                <Image src="/kubernetes.svg" alt="Kubernetes Image" className="w-10 h-10 mr-2" />
                <Image src="/amazon-aws.svg" alt="AWS Image" className="w-10 h-10 mr-2" />
                <Image src="/flask.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image src="/mysql-original-wordmark.svg" alt="MySQL Image" className="w-10 h-10 mr-2" />
                
              </div>
              <div className="flex space-x-4">
                <a href="https://wippass.com"  className="bg-emerald-500 text-white px-4 py-2 rounded">Visit Site</a>
              </div>
            </div>
            {/* Proyecto 2 */}
            <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
              <Image src="/result.gif" alt="Project 2 Image" className="w-full h-64 object-cover rounded-t-lg" />
              <h3 className="text-3xl font-semibold my-4 text-gray-900">Anomaly Detection</h3>
              <p className="text-lg mb-4 text-gray-800">
              A Flask application that simulates API performance and detects anomalies using sophisticated algorithms. It offers real-time monitoring and visualization of key API metrics.
              </p>
              <div className="flex items-center mb-4">
                <Image src="/docker.svg" alt="Docker Image" className="w-10 h-10 mr-2" />
                <Image src="/grafana.svg" alt="Grafana Image" className="w-10 h-10 mr-2" />
                <Image src="/prometheus.svg" alt="Prometheus Image" className="w-10 h-10 mr-2" />
                <Image src="/flask.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/pulse/monitoreo-y-detecci%C3%B3n-de-anomal%C3%ADas-en-apis-con-flask-ramiro-vaquero-mf2yc" className="bg-emerald-500 text-white px-4 py-2 rounded">View Case Study</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
