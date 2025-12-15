import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex justify-center md:justify-start mb-4">
            <img className="h-5 w-auto" src="/images/Logo.png" alt="Minhaj KC Logo" />
          </div>

          <p className="text-sm font-medium">
            CTO & Full-Stack Engineer (MERN)
          </p>
          <p className="text-xs text-gray-400">
            Building scalable web platforms & startup products
          </p>
          <p className="text-sm mt-1">+91 70349 36080</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/minhajkc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-8 h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/minhaj-kc-a7b118308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>

          <a
            href="https://twitter.com/minhaj_kc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaXTwitter className="w-8 h-8" />
          </a>

          <a
            href="https://instagram.com/minhaj.kc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram className="w-8 h-8" />
          </a>

          <a
            href="https://www.facebook.com/muhammedminhaj.kc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebook className="w-8 h-8" />
          </a>

          <a
            href="https://telegram.me/Minhajkc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTelegram className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Muhammed Minhaj KC. All rights reserved.
        </p>
        <p className="mt-1">
          Built with Heart 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
