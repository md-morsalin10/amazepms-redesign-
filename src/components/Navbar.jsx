'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About Us', href: '#about', hasDropdown: true },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Recruitments', href: '#recruitments' },
  { name: 'Our Strength', href: '#strength' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Careers', href: '#careers' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 mt-4"
    >
      {/* 🔮 White Glassmorphic Floating Container */}
      <div className="max-w-7xl mx-auto rounded-full border border-slate-200/80 bg-white/80 py-3.5 px-6 backdrop-blur-md shadow-xl shadow-slate-900/5 flex items-center justify-between min-h-[72px]">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://www.amazepms.com/assets/logo.png" 
            alt="Amaze PMSPL Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback if image fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            AMAZE <span className="text-blue-600 font-light text-xl">PMSPL</span>
          </h1>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                link.current
                  ? 'text-blue-600 bg-blue-50/80 border border-blue-200/60 shadow-sm'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/60'
              }`}
            >
              <span>{link.name}</span>
              {link.hasDropdown && <HiChevronDown className="h-4 w-4 text-slate-400" />}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Contact Us</span>
            <FiArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-slate-700 p-2.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"
          >
            {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-full left-4 right-4 z-40 mt-3 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl xl:hidden"
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                    link.current
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <HiChevronDown className="h-5 w-5 text-slate-400" />}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg"
                >
                  <span>Contact Us</span>
                  <FiArrowRight className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}