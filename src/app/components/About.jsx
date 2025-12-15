"use client";
import React from "react";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>Minhaj KC | CTO & Full-Stack Engineer (MERN)</title>
        <meta
          name="description"
          content="Learn about Minhaj KC, a CTO and Full-Stack Engineer specializing in MERN, Firebase, scalable system design, and startup product development."
        />
        <meta
          name="keywords"
          content="Minhaj KC, CTO, Full Stack Engineer, MERN Stack Developer, Product Architect, Startup Engineer, System Design"
        />
        <meta name="author" content="Minhaj KC" />

        <meta property="og:title" content="Minhaj KC | CTO & Full-Stack Engineer" />
        <meta
          property="og:description"
          content="CTO and Full-Stack Engineer experienced in building scalable web platforms, leading products from idea to deployment."
        />
        <meta property="og:image" content="/images/Minhajreal.png" />
        <meta property="og:url" content="https://minhajkc.vercel.app/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="py-20 px-4 bg-gradient-to-l" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <img
                src="/images/Minhajreal.png"
                alt="Muhammed Minhaj KC"
                className="rounded-xl hover:scale-105 transition-transform duration-300 w-64 h-74 object-cover mx-auto shadow-lg border-2 border-blue-500"
              />
            </div>

            <div className="md:w-1/2 space-y-6 lg:text-left md:text-left text-center">
              <p className="text-lg leading-relaxed text-gray-300">
                I am a <span className="text-blue-400 font-semibold">Chief Technology Officer (CTO)</span> and
                <span className="text-purple-400 font-semibold"> Full-Stack Engineer</span> specializing in
                building scalable, production-ready web platforms using the MERN stack, Firebase, and
                cloud-native architectures.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                My work focuses on <strong>system design, product architecture, and startup execution</strong>.
                I have led products end-to-end — from idea validation and technical planning to development,
                deployment, and growth — with a strong emphasis on scalability, performance, and real
                business impact.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                I hold a <span className="text-green-400 font-semibold">Bachelor of Computer Applications (BCA)</span>{" "}
                from the University of Calicut, which provided a strong foundation in computer science,
                software engineering principles, and problem-solving.
              </p>

              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Problem Solver</span>
                </div>

                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0" />
                  </svg>
                  <span>System Thinker</span>
                </div>

                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Fast Learner</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/cv/Minhaj_KC_CTO_Full_Stack_Engineer.pdf"
                  download
                  className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
