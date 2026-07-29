"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ClientsHero() {
  return (
    <section className="relative h-[380px] md:h-[450px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND CITY IMAGE WITH DARK OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` 
        }}
      >
        {/* Dark Blue/Slate Tint Overlay for High Contrast */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]" />
      </div>

      {/* 2. ABSTRACT TOP-LEFT LINE PATTERN (SVG) */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 pointer-events-none opacity-20">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="50" cy="50" r="120" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="160" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="200" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="240" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="280" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 3. ABSTRACT TOP-RIGHT LINE PATTERN (SVG) */}
      <div className="absolute top-0 right-0 w-60 md:w-80 h-60 md:h-80 pointer-events-none opacity-20">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="250" cy="50" r="80" stroke="white" strokeWidth="1.5" />
          <circle cx="250" cy="50" r="110" stroke="white" strokeWidth="1.5" />
          <circle cx="250" cy="50" r="140" stroke="white" strokeWidth="1.5" />
          <circle cx="250" cy="50" r="170" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 4. MAIN HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-3"
        >
          Our Clients
        </motion.h1>

        {/* Clean Minimal Breadcrumb Directly Below Title */}
        <motion.nav 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center space-x-2 text-sm md:text-base font-medium text-slate-300"
        >
          <Link href="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-white font-semibold">Our Clients</span>
        </motion.nav>

      </div>
    </section>
  );
}