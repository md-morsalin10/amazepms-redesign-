"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
      />
      
      <div className="relative z-20 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Our Services
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center space-x-2 text-sm md:text-base text-slate-300"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={16} className="text-slate-500" />
          <span className="text-white font-medium">Services</span>
        </motion.div>
      </div>
    </section>
  );
}
