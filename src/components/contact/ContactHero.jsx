"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, PhoneCall, Mail, AtSign } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function ContactHero() {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Abstract Overlay */}
      <div className="absolute inset-0 bg-slate-950/80 z-10 backdrop-blur-sm" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop")' }}
      />
      
      {/* Floating 3D-styled Abstract Shapes/Icons */}
      <motion.div 
        animate={{ y: ["0px", "-20px", "0px"], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 z-10 opacity-30 text-blue-500 blur-[2px]"
      >
        <PhoneCall size={80} />
      </motion.div>
      <motion.div 
        animate={{ y: ["0px", "20px", "0px"], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 z-10 opacity-30 text-purple-500 blur-[2px]"
      >
        <Mail size={100} />
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 z-10 text-emerald-500 blur-[3px]"
      >
        <AtSign size={60} />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Contact <span className="text-blue-400">Us</span>
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 text-sm md:text-base text-slate-300 bg-white/10 w-fit mx-auto px-5 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-xl"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={16} className="text-slate-400" />
          <span className="text-white font-medium">Contact</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
