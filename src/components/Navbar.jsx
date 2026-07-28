'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services-page' },
  { name: 'Recruitments', href: '/recruitments' },
  { name: 'Our Strength', href: '/our-strength' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detect korar jonno effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Invisible placeholder to prevent layout shift when header becomes fixed */}
      {isScrolled && <div className="h-[80px] w-full" />}
      
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled ? 'fixed top-4 left-4 right-4 mx-auto max-w-7xl' : 'sticky top-0 left-0 right-0'
        }`}
      >
        {/* 🔮 Dynamic Glassmorphic Navbar Container */}
        <div
          className={`mx-auto flex items-center justify-between min-h-[80px] transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'rounded-full px-5 lg:px-6 py-3.5 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-blue-500/10'
              : 'w-full max-w-full rounded-none px-6 lg:px-10 py-5 lg:py-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 mt-0 mx-0'
          }`}
        >
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://www.amazepms.com/assets/logo.png"
            alt="Amaze PMSPL Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h1 className={`text-xl lg:text-2xl font-black tracking-tight whitespace-nowrap ${isScrolled ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            AMAZE <span className="text-blue-600 font-light text-lg lg:text-xl">PMSPL</span>
          </h1>
        </div>

        {/* 2. Nav Items */}
        <nav className="hidden xl:flex items-center justify-center gap-1 flex-1 px-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                  isActive
                    ? isScrolled 
                      ? 'text-blue-400 bg-blue-950/50 border border-blue-800 shadow-sm'
                      : 'text-blue-600 bg-blue-50 border border-blue-200 shadow-sm dark:bg-blue-950/50 dark:border-blue-800'
                    : isScrolled
                      ? 'text-slate-200 hover:text-blue-400 hover:bg-slate-800/80 border border-transparent'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-blue-400 border border-transparent'
                }`}
              >
                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* 3. CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_auto] hover:bg-right px-5 py-2 xl:px-6 xl:py-2.5 text-xs xl:text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-500 hover:scale-[1.04] hover:-translate-y-0.5 whitespace-nowrap before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700"
            >
              <span className="relative z-10 whitespace-nowrap">Contact Us</span>
              <FiArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
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
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition whitespace-nowrap ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 border border-blue-200 dark:bg-blue-950/50 dark:border-blue-800'
                        : 'text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full group relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_auto] hover:bg-right px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-500 hover:scale-[1.02] whitespace-nowrap before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700"
                >
                  <span className="relative z-10 whitespace-nowrap">Contact Us</span>
                  <FiArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}