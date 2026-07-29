'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2';

const features = [
  'Strong 15000+ Work Force',
  '200+ Clients',
  'Presence PAN INDIA',
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-slate-50/50 overflow-hidden dark:bg-slate-900">
      
      {/* Background Decorative Wavy Lines / Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none dark:bg-blue-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              About <span className="text-blue-600">Us</span>
            </h2>

            {/* Description Paragraphs */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed dark:text-slate-300">
              <strong className="text-slate-800 font-semibold dark:text-white">Amaze PMS Pvt Ltd (AMAZE)</strong> is a Property Management division of <strong className="text-slate-800 font-semibold dark:text-white">ACTION GROUP</strong> of Companies founded in the year 2001 by Mr. Subhani Abdul, a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed dark:text-slate-300">
              Amaze has its Head Quarters in Cyberabad, Telangana - INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15000 + strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office support services, deep cleaning services etc all these services are inhouse.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <HiCheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* 🚀 CTA Button with Slide Hover Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border-2 border-blue-600 pl-6 pr-2 py-2 active:scale-95 transition-transform duration-150 shadow-md shadow-blue-500/10"
              >
                {/* Background Hover Slide Overlay */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"
                />

                {/* Button Text */}
                <span className="relative z-10 whitespace-nowrap text-xs sm:text-sm font-bold tracking-wide text-blue-600 group-hover:text-white transition-colors duration-300">
                  GET STARTED WITH US
                </span>

                {/* Arrow Icon Badge */}
                <span className="relative z-10 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300 shadow-md flex-shrink-0">
                  <HiArrowRight className="h-4 w-4 text-white group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column: Image Stack Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-md sm:max-w-lg py-6">
              
              {/* 🎈 Animated Floating Dot Grid Pattern */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 left-12 z-0 text-slate-300 dark:text-slate-700 pointer-events-none"
              >
                <svg width="90" height="90" fill="currentColor" viewBox="0 0 100 100">
                  <pattern id="dot-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="2.5" />
                  </pattern>
                  <rect width="90" height="90" fill="url(#dot-grid)" />
                </svg>
              </motion.div>

              {/* Back Image (Action Group Shield Badge) */}
              <div className="relative z-10 ml-auto w-[65%] sm:w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-blue-600 dark:border-slate-800">
                <img
                  src="https://www.amazepms.com/assets/aboutimgmobile.png"
                  alt="Action Group Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Overlapping Image (Amaze Team Photo) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute left-0 top-[28%] z-20 w-[72%] sm:w-[68%] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-white dark:border-slate-800 dark:bg-slate-800"
              >
                <img
                  src="https://www.amazepms.com/assets/about1.png"
                  alt="Amaze Team"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}