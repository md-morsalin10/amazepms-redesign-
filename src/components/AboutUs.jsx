'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle, HiArrowRight, HiShieldCheck } from 'react-icons/hi2';

const features = [
  'Strong 15000+ Work Force',
  '200+ Valued Clients',
  'Presence PAN INDIA',
  'Comprehensive Integrated Solutions',
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden dark:bg-slate-900">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold uppercase tracking-wider dark:bg-blue-950/40 dark:border-blue-800/60">
              <HiShieldCheck className="h-4 w-4" />
              <span>Established Since 2001</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight dark:text-white">
              About <span className="text-blue-600">Us</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal dark:text-slate-300">
              <strong className="text-slate-900 font-semibold dark:text-white">Amaze PMS Pvt Ltd (AMAZE)</strong> is a Property Management division of <strong className="text-slate-900 font-semibold dark:text-white">ACTION GROUP</strong> of Companies founded in the year 2001 by Mr. Subhani Abdul, a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed dark:text-slate-300">
              Amaze has its Head Quarters in Cyberabad, Telangana - INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15000+ strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, and office support services.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300 dark:bg-slate-800/80 dark:border-slate-700 dark:hover:bg-blue-950/40 dark:hover:border-blue-800"
                >
                  <HiCheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-4 pl-7 pr-3 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/25 transition-all group"
              >
                <span>GET STARTED WITH US</span>
                <span className="p-2.5 rounded-full bg-white text-blue-600 group-hover:translate-x-1 transition-transform">
                  <HiArrowRight className="h-4 w-4" />
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Image Stack (Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Back Card Image (Action Group Shield Logo Box) */}
              <div className="w-[85%] sm:w-[80%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-blue-600 aspect-square flex items-center justify-center p-6 ml-auto dark:border-slate-800">
                <img
                  src="https://www.amazepms.com/assets/about-ag.jpg" 
                  alt="Action Group Logo"
                  className="w-full h-full object-contain rounded-2xl"
                  onError={(e) => {
                    // Fallback visual if logo image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Front Overlapping Floating Image (Team Photo) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 left-0 w-[75%] sm:w-[70%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white backdrop-blur-md dark:border-slate-800 dark:bg-slate-800"
              >
                <img
                  src="https://www.amazepms.com/assets/about-team.jpg" 
                  alt="Amaze Team"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </motion.div>

              {/* Decorative Dot Pattern Background */}
              <div className="absolute -top-6 -left-6 -z-10 text-slate-200 hidden sm:block dark:text-slate-700">
                <svg width="100" height="100" fill="currentColor" viewBox="0 0 100 100">
                  <pattern id="dot-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="2.5" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dot-pattern)" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}