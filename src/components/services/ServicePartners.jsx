"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, Shield, Wrench } from "lucide-react";

const partners = [
  {
    name: "Amaze Property Management",
    tag: "Support Staff",
    icon: Building2,
    desc: "Comprehensive staffing and property care to keep your operations smooth.",
  },
  {
    name: "Action & Protection Security",
    tag: "Security Services",
    icon: Shield,
    desc: "Elite security force providing 24/7 surveillance and protection.",
  },
  {
    name: "Action Facility Services",
    tag: "MEP Services",
    icon: Wrench,
    desc: "Mechanical, Electrical & Plumbing experts for seamless facility operations.",
  },
];

export default function ServicePartners() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Our Strategic Partners
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Collaborating with industry leaders to deliver unmatched excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group relative overflow-hidden hover:border-transparent"
              >
                {/* Glowing Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10 blur-[2px] m-[-2px]" />
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 rounded-3xl z-0 transition-colors duration-300" />
                
                {/* Hover Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                <div className="flex flex-col items-center text-center h-full relative z-10">
                  <div className="p-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 block">
                    {partner.tag}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {partner.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 flex-grow">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
