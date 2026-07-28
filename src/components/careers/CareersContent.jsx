"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Mail } from "lucide-react";

const jobOpenings = [
  "Facility Manager",
  "Assistant Facility Manager",
  "Operations Manager",
  "Security Officer",
  "Electrician",
  "Field Officer - Technical",
  "Field Officer - Security",
  "Plumber",
  "Carpenter",
  "Gardener",
  "House Keeping Supervisor",
  "House Keeper",
  "Fire & Safety Technicians",
  "Help Desk Executive"
];

export default function CareersContent() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-4"
          >
            <Briefcase size={14} />
            <span>Careers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Work With Us
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Take the next step in your career with Amaze. We are constantly looking for passionate individuals to join our growing team.
          </motion.p>
        </div>

        {/* Main Glassmorphism Container */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xl rounded-[2rem] p-6 md:p-10 backdrop-blur-xl">
          
          {/* Instruction Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Ready to join?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Send your updated CV to our HR team.</p>
              </div>
            </div>
            <a 
              href="mailto:careers@amazepms.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-500/30 whitespace-nowrap"
            >
              careers@amazepms.com
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column - Current Openings */}
            <div className="lg:col-span-7 xl:col-span-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center border-b border-slate-200 dark:border-slate-800 pb-4">
                Current Openings
                <span className="ml-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm py-1 px-3 rounded-full font-medium">
                  {jobOpenings.length} Roles
                </span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {jobOpenings.map((job, index) => {
                  const floatDelay = index * 0.1;
                  return (
                    <motion.div
                      key={index}
                      animate={{ y: ["0px", "-4px", "0px"] }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: floatDelay }}
                    >
                      <motion.a
                        href={`mailto:careers@amazepms.com?subject=Application for ${job}`}
                        whileHover={{ x: 8, scale: 1.015, y: -2 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:border-transparent hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
                      >
                        {/* Glowing Gradient Border Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10 blur-[2px] m-[-2px]" />
                        <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl z-0 transition-colors duration-300" />

                        <span className="relative z-10 font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job}
                        </span>
                        <div className="relative z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-all shadow-sm">
                          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </motion.a>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Anti-Gravity Banner */}
            <div className="lg:col-span-5 xl:col-span-4 h-full">
              <motion.div
                animate={{ y: ["0px", "-15px", "0px"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="h-full"
              >
                <div className="h-full rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-600/20 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-900/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                  
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 transform rotate-12">
                    <Briefcase size={36} className="text-white transform -rotate-12" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    NOW <br /> HIRING
                  </h3>
                  
                  <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                    Join a dynamic, fast-paced environment where your skills are valued, and growth is guaranteed. We provide comprehensive training and benefits.
                  </p>

                  <motion.a 
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href="mailto:careers@amazepms.com"
                    className="w-full text-center py-4 group relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-white bg-[length:200%_auto] hover:bg-right text-blue-700 font-bold rounded-xl transition-all duration-500 shadow-lg shadow-white/20 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-blue-600/10 before:to-transparent before:transition-transform before:duration-700 flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Apply Today</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
