"use client";

import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa6";
import CodingBackground from "./CodingBackground";

const roles = [
  "Chief Technology Officer (CTO)",
  "Full-Stack Engineer (MERN)",
  "Product Architect & System Designer",
  "Startup & SaaS Platform Builder",
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0");
      setTimeout(() => {
        setCurrentRoleIndex(
          (prevIndex) => (prevIndex + 1) % roles.length
        );
        setFadeClass("opacity-100");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen p-5 text-center relative overflow-hidden bg-gray-900 text-white"
      id="home"
    >
      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/917034936080"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-20"
      >
        <FaWhatsapp size={30} />
      </a>

      <div className="absolute inset-0 z-0">
        <CodingBackground />
      </div>

      <div className="z-10 relative">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fade-in-down">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Minhaj KC
          </span>
        </h1>

        <p
          className={`text-xl sm:text-2xl mb-4 transition-opacity duration-500 ${fadeClass}`}
        >
          {roles[currentRoleIndex]}
        </p>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 mb-8 animate-fade-in">
          I design, build, and scale{" "}
          <strong>production-ready web platforms</strong> using MERN, Firebase,
          and cloud-native architectures. Experienced in leading products from
          idea to deployment, with a strong focus on{" "}
          <strong>system design, scalability, and business impact</strong>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-white hover:bg-gray-300 text-gray-900 transition-all duration-300 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Let’s Work Together
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-transparent border-2 border-blue-600 hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/minhajkc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/minhaj-kc-a7b118308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://twitter.com/minhaj_kc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaXTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://instagram.com/minhaj.kc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.facebook.com/muhammedminhaj.kc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://telegram.me/Minhajkc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTelegram className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
    </section>
  );
};

export default HeroSection;
