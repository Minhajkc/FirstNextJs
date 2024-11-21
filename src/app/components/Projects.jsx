"use client"
import React from 'react'
import {  FaGithub} from 'react-icons/fa6';


const Projects = () => {
  const projectss = [
    { 
      id: 1,
      title: "FruitBasket-E-Commerce",
      image: "/images/Fruitbasket.png",
      description: 'FruitBasket eCommerce application is a lightweight, Node.js-powered platform for buying and selling fruits online. Using MongoDB for data storage and Handlebars.js for templating, it offers a seamless shopping experience.',
      link: 'https://Fruitbasket.site',
      technologies: [ 'Node.js', 'MongoDB', 'Express','HBS']
    },
    { 
      id: 3,
      title: "Eduprops E-Learning",
      image: "/images/Eduprops.png",
      description: 'EduProps is an innovative e-learning web application built with React, MongoDB, Express, and Node. It features three interfaces: students, admin, and mentor, providing comprehensive tools for education management.',
      link: 'https://eduprops.vercel.app',
      technologies: ['React','Node.js', 'MongoDB', 'Express']
    },
    { 
      id: 2,
      title: "RestoHub-Order-taking-App",
      image: "/images/Restohub.png",
      description: 'RestoHub is a restaurant management application designed to streamline operations between administrators, waiters, and chefs. It offers distinct functionalities for each role.',
      link: 'https://resto-hub.vercel.app/',
      technologies: ['React']
    },
  ];

  return (
    <div>
      <section className="py-2 px-4 " id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projectss.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-blue-700">
                <img 
                  src={project.image} 
                  alt={`Project ${project.title}`} 
                  className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 border-2 text-xs text-white rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-block px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-semibold"
                  >
                    Explore Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-4 sm:">
  <a 
    className="inline-flex items-center px-5 cursor-pointer py-2 border-2 hover:bg-slate-400 text-white rounded-lg  transition-colors duration-300 font-semibold text-sm"
    href='https://github.com/Minhajkc?tab=repositories'
  >
    <FaGithub className="w-4 h-4 mr-2 " /> 
    Explore More Projects →
  </a>
</div>

          {/* Scroll Icon */}
          <div className="bottom-10 left-1/2 transform -translate-x-1/2 mt-10 animate-bounce text-center">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects;
