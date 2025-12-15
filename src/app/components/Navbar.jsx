'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Home, Info, Briefcase, Phone, Menu, X, MedalIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const NavLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/#about', label: 'About', icon: Info },
    { href: '/#Skills', label: 'Skills', icon: Briefcase },
    { href: '/#achievements', label: 'Achievements', icon: MedalIcon },
    { href: '/#contact', label: 'Contact', icon: Phone },
    { href: 'https://github.com/Minhajkc?tab=repositories', label: 'Explore GitHub', icon: FaGithub },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the sidebar if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 border-blue-700 hover:bg-blue-900 transition-all duration-300 p-2 rounded-md"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 bottom-0 w-64 bg-gray-900 z-50 border-r-2 border-r-blue-600 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mt-10 ml-6">
          <a href="/">
            <img className="h-5 w-auto" src="/images/Logo.png" alt="Minhaj kc Logo" />
          </a>
        </div>
        <div className="p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="mt-12 space-y-6">
            {NavLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-white hover:text-blue-400 transition"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
            <div className="mt-30 pt-10">
              <a
                href="/cv/Minhaj_KC_CTO_Full_Stack_Engineer.pdf"
                download
                className="px-6 py-2 text-white border-2 border-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
