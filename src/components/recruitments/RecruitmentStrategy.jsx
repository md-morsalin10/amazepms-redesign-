"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

const sourcingList = [
  "Regional Recruitment Drives",
  "Telangana Focus",
  "Andhra Pradesh Focus",
  "Job Melas & Campus Drives",
  "Referral Programs",
  "Partner Networks"
];

const verificationList = [
  "Identity & Address Verification",
  "Criminal Record Checks",
  "Previous Employment Checks",
  "Educational Credentials",
  "Reference Checks",
  "Medical & Fitness Screening"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function RecruitmentStrategy() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide"
          >
            Recruitment Strategy
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A meticulous approach to identifying, acquiring, and verifying the best talent for facility management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sourcing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Man Power Sourcing</h3>
            </div>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {sourcingList.map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Background Verification */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Background Verification</h3>
            </div>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {verificationList.map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
