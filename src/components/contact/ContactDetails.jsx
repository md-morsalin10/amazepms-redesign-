"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

const services = [
  "PMS Services",
  "MEP Services",
  "House Keeping Services",
  "Security Services",
  "Gardening Services",
  "Deep Cleaning Services",
  "Maid Cleaning Services",
  "Facade Services",
  "Project Cleaning Services",
  "Pest Control Services",
  "Office Support Services"
];

export default function ContactDetails() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side: Services List */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                {/* Placeholder Logo / Brand Mark */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6">
                  <span className="text-white font-bold text-3xl">A</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Contact For Our Services
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Comprehensive property and facility management solutions tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                      <CheckCircle2 size={18} className="text-blue-500 dark:text-blue-400 relative z-10 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-300" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Office Address & Contacts */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center bg-slate-50 dark:bg-slate-950/50 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800/80"
            >
              <div className="mb-10 relative">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 relative inline-block">
                  Our Office Address
                  {/* Accent Underline */}
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-blue-600 rounded-full" />
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-4">Stay Connected</p>
              </div>

              <div className="space-y-8">
                {/* Location */}
                <motion.div whileHover={{ x: 8, y: -4, scale: 1.015 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="flex items-start space-x-5 group p-4 -ml-4 rounded-2xl relative overflow-hidden border border-transparent hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                  {/* Glowing Gradient Border Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10 blur-[2px] m-[-2px]" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white dark:group-hover:bg-slate-900 rounded-2xl z-0 transition-colors duration-300" />

                  <div className="relative z-10 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                      4th floor, High Mark Chambers,<br />
                      Khajaguda X road, Cyberabad,<br />
                      Hyderabad-500008
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.a 
                  href="tel:9100694137"
                  whileHover={{ x: 8, y: -4, scale: 1.015 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} 
                  className="flex items-start space-x-5 group cursor-pointer p-4 -ml-4 rounded-2xl relative overflow-hidden border border-transparent hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]"
                >
                  {/* Glowing Gradient Border Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10 blur-[2px] m-[-2px]" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white dark:group-hover:bg-slate-900 rounded-2xl z-0 transition-colors duration-300" />

                  <div className="relative z-10 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      +91 9100694137
                    </p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a 
                  href="mailto:Info@amazepms.com"
                  whileHover={{ x: 8, y: -4, scale: 1.015 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} 
                  className="flex items-start space-x-5 group cursor-pointer p-4 -ml-4 rounded-2xl relative overflow-hidden border border-transparent hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
                >
                  {/* Glowing Gradient Border Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10 blur-[2px] m-[-2px]" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white dark:group-hover:bg-slate-900 rounded-2xl z-0 transition-colors duration-300" />

                  <div className="relative z-10 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      Info@amazepms.com
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
