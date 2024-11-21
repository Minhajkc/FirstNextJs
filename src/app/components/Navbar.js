'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Info, Briefcase, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Phone }
  ];

  return (
    <nav className="fixed bottom- left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-between items-center px-4 py-3">
        {/* Desktop/Mobile Navigation */}
        <div className="flex w-full justify-between items-center">
          {NavLinks.map(({ href, label, icon: Icon }) => (
            <Link 
              key={href} 
              href={href} 
              className="flex flex-col items-center justify-center hover:text-gray-300 transition-colors"
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;