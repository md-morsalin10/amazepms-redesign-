"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

const audits = [
  "Security Audit",
  "Engineering Audit",
  "Soft Services Audit",
  "EHS (Environmental, Health & Safety)",
  "AMC (Annual Maintenance Contract) Audit",
  "Energy Efficiency Audit",
  "Statutory Compliance Audit"
];

export default function AuditsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Audit Services List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold text-sm mb-6">
              <ClipboardCheck size={16} />
              <span>Comprehensive Inspections</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Rigorous Audits for <br className="hidden md:block" /> Quality Assurance
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              We conduct routine and specialized audits across all our operations to guarantee compliance, optimize performance, and maintain the highest industry standards.
            </p>

            <div className="space-y-4">
              {audits.map((audit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-4" />
                  <span className="font-medium text-slate-700 dark:text-slate-200">{audit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-[3rem] transform rotate-3" />
            <div className="relative grid grid-cols-2 gap-4 p-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-2 h-64 rounded-3xl overflow-hidden shadow-lg border border-white/20 dark:border-slate-800"
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2000&auto=format&fit=crop")' }} />
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="h-48 rounded-3xl overflow-hidden shadow-lg border border-white/20 dark:border-slate-800"
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop")' }} />
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="h-48 rounded-3xl overflow-hidden shadow-lg border border-white/20 dark:border-slate-800"
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop")' }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
