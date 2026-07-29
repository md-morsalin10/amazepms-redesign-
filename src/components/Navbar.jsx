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
  { name: 'Our Clients', href: '/our-clients' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating pill only applies on desktop AND when scrolled
  const isFloating = isScrolled && isDesktop;

  return (
    <>
      {/* Placeholder spacer — only on desktop floating state to prevent layout shift */}
      {isFloating && <div className="h-[80px] w-full bg-transparent" aria-hidden="true" />}

      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`z-50 w-full transition-all duration-500 ease-in-out ${isFloating
            ? 'fixed top-4 left-0 right-0 px-3 sm:px-6 pointer-events-none'
            : 'sticky top-0 left-0 right-0'
          }`}
      >
        {/* 🔮 Dynamic Glassmorphic Navbar Container */}
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between flex-nowrap min-w-0 transition-all duration-500 ease-in-out ${isFloating
              ? 'max-w-7xl min-h-[64px] rounded-full px-4 lg:px-7 py-2.5 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-blue-500/10'
              : 'w-full max-w-full min-h-[72px] rounded-none px-4 lg:px-8 py-3.5 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800'
            }`}
        >
          {/* 1. Logo Section */}
          <div className="flex items-center gap-2 shrink-0">
            <img
              src="https://www.amazepms.com/assets/logo.png"
              alt="Amaze PMSPL Logo"
              className="h-8 lg:h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <h1 className={`text-base lg:text-xl font-black tracking-tight whitespace-nowrap ${isFloating ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              AMAZE <span className="text-blue-500 font-light text-xs lg:text-base">PMSPL</span>
            </h1>
          </div>

          {/* 2. Nav Items (Desktop Nav) */}
          <nav className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2 flex-1 min-w-0 px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${isActive
                      ? isFloating
                        ? 'text-blue-400 bg-blue-950/60 border border-blue-800/80 shadow-sm'
                        : 'text-blue-600 bg-blue-50 border border-blue-200 shadow-sm dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-400'
                      : isFloating
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
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <Link
                href="/contact"
                className="shrink-0 group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_auto] hover:bg-right px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-500 hover:scale-[1.03] whitespace-nowrap"
              >
                <span className="relative z-10 whitespace-nowrap">Contact Us</span>
                <FiArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full border transition ${isFloating
                    ? 'border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700'
                    : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                  }`}
              >
                {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 Compact Responsive Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-3 right-3 z-40 mt-2 rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-xl xl:hidden dark:border-slate-800 dark:bg-slate-900/95 max-h-[80vh] overflow-y-auto"
            >
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-sm font-semibold transition whitespace-nowrap ${isActive
                          ? 'text-blue-600 bg-blue-50 border border-blue-200/60 dark:bg-blue-950/60 dark:border-blue-800/60 dark:text-blue-400'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70'
                        }`}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                    </Link>
                  );
                })}

                <div className="pt-2.5 mt-2 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full group relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_auto] hover:bg-right px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/30 transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="relative z-10 whitespace-nowrap">Contact Us</span>
                    <FiArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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