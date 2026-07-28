"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";

const strengths = [
  "Managing an area of more than 20 million Sq.ft across different portfolios.",
  "All services are in-house.",
  "Availability of back up staff to take care of emergencies.",
  "Yearly training calendar will be shared and conducted by Training Officer.",
  "Risk Assessment of Equipment and its Operations and Recommended measures from time to time.",
  "Internal team will audit the site on a regular basis and propose the site improvement plans.",
  "Site specific SOP's / Checklists for all the services.",
  "Coordination and Supervision towards Annual Shutdown Maintenance and mobilizing.",
  "Liaison with Government agencies.",
  "EHS, Security, Technical, Fire & Safety, Inventory, Process, Soft Services, Compliance, Customer Satisfaction audits.",
  "AMC Tracking and Negotiations.",
  "STAFF WELFARE: Diwali Sweets, Gifts & Rewards on RD/ID, ₹2 Lakhs insurance, ₹10k funeral expenses, ₹1 Lakh compensation, Ranker students & staff (₹1L, ₹50k, ₹25k) from the company."
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, y: 10 },
  show: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function StrengthPointsSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-4"
          >
            <Shield size={14} />
            <span>Strength</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Why Choose Us?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Our core capabilities and infrastructure that empower us to deliver unmatched facility management solutions.
          </motion.p>
        </div>

        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            {strengths.map((point, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ x: 6, scale: 1.015, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start space-x-4 p-4 rounded-2xl group transition-all duration-300 bg-white/50 dark:bg-slate-800/30 border border-transparent hover:border-transparent shadow-sm hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
              >
                {/* Glowing Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-[2px] m-[-2px]" />
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/90 rounded-2xl z-0 transition-colors duration-300" />
                
                {/* Hover Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                <div className="flex-shrink-0 mt-1 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    <CheckCircle2 size={24} className="text-blue-600 dark:text-blue-400 relative z-10" />
                  </div>
                </div>
                <p className="relative z-10 text-slate-700 dark:text-slate-300 font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
