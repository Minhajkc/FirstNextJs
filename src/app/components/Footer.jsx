import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram,FaFacebook,FaTelegram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-8">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0 ">
        <div className='flex justify-center md:justify-start mb-4'>
    <img className="h-5 w-auto" src="/images/Logo.png" alt="Logo" />
  </div>
            <p className="text-sm">Full Stack Developer(MERN) & UI/UX Designer</p>
           <p className="text-sm">+91 7034936080</p>
        </div>
      <div className="flex justify-center space-x-6">
            <a href="https://github.com/minhajkc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/minhaj-kc-a7b118308" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/minhaj_kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaXTwitter className="w-8 h-8" />
        
            </a>
            <a href="https://instagram.com/minhaj.kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/muhammedminhaj.kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-8 h-8" />
            </a>
            <a href="https://telegram.me/Minhajkc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTelegram  className="w-8 h-8" />
            </a>
        </div>
    </div>
    <div className="text-center mt-8 text-sm">
        <p>© {new Date().getFullYear()} Minhaj. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Footer
