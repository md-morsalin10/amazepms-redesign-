"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Home, Wrench, Bug, HeadphonesIcon, 
  TreePine, Waves, Castle, Droplets, Users, 
  Hammer, PartyPopper 
} from "lucide-react";

const services = [
  { title: "Security", icon: ShieldCheck, description: "24/7 advanced security and surveillance." },
  { title: "House Keeping", icon: Home, description: "Professional cleaning and upkeep." },
  { title: "Technical Services", icon: Wrench, description: "Expert MEP maintenance." },
  { title: "Pest Control", icon: Bug, description: "Safe and effective pest management." },
  { title: "Help Desk", icon: HeadphonesIcon, description: "Round-the-clock resident support." },
  { title: "Gardening", icon: TreePine, description: "Landscape and garden maintenance." },
  { title: "Swimming Pool", icon: Waves, description: "Pool cleaning and water treatment." },
  { title: "Club House", icon: Castle, description: "Recreational facility management." },
  { title: "Facade Cleaning", icon: Droplets, description: "High-rise exterior glass cleaning." },
  { title: "Tenant Management", icon: Users, description: "Streamlined tenant onboarding." },
  { title: "Home Repairs", icon: Hammer, description: "Quick household repair services." },
  { title: "Events & Promotions", icon: PartyPopper, description: "Community event planning." },
];

export default function PropertyAssetManagement() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Property & Asset Management
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive solutions to maintain, secure, and elevate your properties with our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Anti-gravity randomizer
            const floatDuration = 3 + (index % 3);
            const floatDelay = index * 0.15;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Floating wrapper */}
                <motion.div
                  animate={{ y: ["0px", "-12px", "0px"] }}
                  transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: floatDelay,
                  }}
                  className="h-full"
                >
                  <motion.div 
                    whileHover={{ scale: 1.015, y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden hover:border-transparent"
                  >
                    {/* Glowing Gradient Border Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10 blur-[2px] m-[-2px]" />
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-3xl z-0 transition-colors duration-300" />
                    
                    {/* Hover Inner Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                    
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10 shadow-sm">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm relative z-10 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
