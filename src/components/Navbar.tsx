'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Adds a sleek blur effect when you scroll down the page
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restored these to link to separate pages instead of scrolling down one page
  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050806]/80 backdrop-blur-md border-b border-[rgba(120,150,130,0.15)] py-4 shadow-lg shadow-[#050806]/50' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-sm font-mono tracking-widest text-[#F4F6F5] hover:text-[#8CC6A0] transition-colors flex items-center gap-1"
        >
          LEONARDO_MOLINA<span className="text-[#5EA87B]">.IO</span>
        </Link>
        
        {/* Animated Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#A2ADA6] hover:text-[#F4F6F5] transition-all duration-200 relative group"
            >
              {link.name}
              {/* Smooth green underline animation on hover */}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#5EA87B] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(94,168,123,0.6)]"></span>
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
