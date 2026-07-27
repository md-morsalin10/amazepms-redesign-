'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// React Icons থেকে প্রিমিয়াম আইকনসমুহ
import { HiSparkles, HiChevronDown } from 'react-icons/hi2';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About Us', href: '#about', hasDropdown: true },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Recruitments', href: '#recruitments' },
  { name: 'Strength', href: '#strength' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Careers', href: '#careers' },
];

const navContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 mt-4"
    >
      {/* 🔮 Glassmorphic Container with Increased Height (py-3.5 sm:py-4 & min-h-[72px]) */}
      <div className="max-w-7xl mx-auto rounded-full border border-white/10 bg-slate-950/70 py-3.5 sm:py-4 px-6 backdrop-blur-2xl shadow-[0_12px_45px_rgba(0,0,0,0.6),0_0_25px_rgba(34,211,238,0.15)] flex items-center justify-between min-h-[72px]">
        
        {/* 1. Logo Section */}
        <motion.div
          variants={navItemVariants}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <HiSparkles className="h-5 w-5 animate-pulse" />
          </div>
          <h1 className="text-2xl font-black tracking-wider text-white">
            AMAZE <span className="font-light text-slate-400">PMSPL</span>
          </h1>
        </motion.div>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              className={`relative group px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                link.current
                  ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{link.name}</span>
              {link.hasDropdown && (
                <HiChevronDown className="h-4 w-4 text-slate-400 group-hover:text-cyan-300 transition-transform duration-300 group-hover:rotate-180" />
              )}
              
              {/* Active Link Pill */}
              {link.current && (
                <motion.span
                  layoutId="activePill"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* 3. Right Side: CTA Button & Mobile Menu */}
        <motion.div variants={navItemVariants} className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          >
            <span>Contact Us</span>
            <FiArrowRight className="h-4 w-4" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="xl:hidden text-slate-200 hover:text-white p-3 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-lg hover:bg-slate-800 transition"
          >
            {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </motion.div>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-4 right-4 z-40 mt-3 rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-2xl backdrop-blur-3xl xl:hidden"
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                    link.current
                      ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <HiChevronDown className="h-5 w-5 text-slate-500" />}
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:from-cyan-400"
                >
                  <span>Book a Demo</span>
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