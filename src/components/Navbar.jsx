'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about', hasDropdown: true },
  { name: 'Services', href: '/services-page', hasDropdown: true },
  { name: 'Recruitments', href: '/recruitments' },
  { name: 'Our Strength', href: '#strength' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Careers', href: '#careers' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detect korar jonno effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 mt-4"
    >
      {/* 🔮 Glassmorphic Navbar Container with Enhanced Border & Shadow */}
      <div
        className={`max-w-7xl mx-auto rounded-full px-6 py-3.5 flex items-center justify-between min-h-[72px] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border border-slate-300/80 shadow-2xl shadow-slate-900/10 dark:bg-slate-900/90 dark:border-slate-700 dark:shadow-slate-950/40'
            : 'bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 dark:bg-slate-900/80 dark:border-slate-700/80 dark:shadow-slate-950/20 dark:ring-slate-800'
        }`}
      >
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.amazepms.com/assets/logo.png"
            alt="Amaze PMSPL Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h1 className="text-2xl font-black text-slate-900 tracking-tight dark:text-white">
            AMAZE <span className="text-blue-600 font-light text-xl">PMSPL</span>
          </h1>
        </div>

        {/* 2. Nav Items */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                link.current
                  ? 'text-blue-600 bg-blue-50 border border-blue-200 shadow-sm dark:bg-blue-950/50 dark:border-blue-800'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-blue-400'
              }`}
            >
              <span>{link.name}</span>
              {link.hasDropdown && <HiChevronDown className="h-4 w-4 text-slate-400" />}
            </a>
          ))}
        </nav>

        {/* 3. CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Contact Us</span>
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-800 p-2.5 rounded-full border border-slate-300 bg-slate-100 hover:bg-slate-200 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-full left-4 right-4 z-40 mt-3 rounded-3xl border border-slate-300 bg-white/98 p-6 shadow-2xl backdrop-blur-2xl xl:hidden dark:border-slate-700 dark:bg-slate-900/95"
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                    link.current
                      ? 'text-blue-600 bg-blue-50 border border-blue-200 dark:bg-blue-950/50 dark:border-blue-800'
                      : 'text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <HiChevronDown className="h-5 w-5 text-slate-400" />}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200">
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