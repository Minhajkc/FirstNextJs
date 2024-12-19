"use client"
import React from 'react'
import Head from "next/head";

function About() {
  return (
    <div>
        <Head>
        <title>Minhaj KC - MERN Stack Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Learn about Minhaj KC, a MERN Stack Developer and UI/UX Designer with a passion for crafting seamless digital experiences."
        />
        <meta name="keywords" content="Minhaj KC, MERN Developer, UI/UX Designer, Full Stack Developer, About Minhaj KC, Who is Minhaj KC" />
        <meta name="author" content="Minhaj KC" />
        <meta property="og:title" content="Minhaj KC - MERN Stack Developer" />
        <meta
          property="og:description"
          content="Discover Minhaj KC's expertise as a MERN Stack Developer and UI/UX Designer."
        />
        <meta property="og:image" content="/images/Minhajreal.png" />
        <meta property="og:url" content="https://minhajkc.vercel.app/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
       <section className="py-20 px-4 bg-gradient-to-l" id='about'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2 ">
              <img 
                  src='images/Minhajreal.png'
                  alt="Minhaj kc" 
                  className="rounded-xl hover:scale-105 transition-transform duration-300 w-64 h-74 object-cover mx-auto shadow-lg border-2 border-blue-500"
              />
            </div>
            <div className="md:w-1/2 space-y-6 lg:text-left md:text-left text-center">
              <p className="text-lg leading-relaxed text-gray-300">
                  As a <span className="text-blue-400 font-semibold">MERN Stack Developer</span> and <span className="text-purple-400 font-semibold">UI/UX Designer</span>, I blend technical expertise with creative flair. My journey in the world of web development has been driven by a passion for crafting seamless digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 ">
                  I specialize in building scalable web applications and designing intuitive user interfaces that not only look great but also solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                  I hold a <span className="text-green-400 font-semibold">BCA</span> (Bachelor of Computer Applications) degree from the University of Calicut, which laid a strong foundation for my career in technology.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Problem Solver</span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                      <span>Innovative Thinker</span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      <span>Fast Learner</span>
                  </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/cv/MhdMinhajkc.pdf" 
                  download 
                  className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                >
                  Download CV
                  
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-center float-end">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
    </section>
    </div>
  )
}

export default About
