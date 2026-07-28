"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 bg-slate-950/75 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")' }}
      />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Build Your <span className="text-blue-400">Career</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-sm md:text-base text-slate-300 bg-white/10 w-fit mx-auto px-5 py-2 rounded-full backdrop-blur-md border border-white/10"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={16} className="text-slate-400" />
          <span className="text-white font-medium">Careers</span>
        </motion.div>
      </div>
    </section>
  );
}
