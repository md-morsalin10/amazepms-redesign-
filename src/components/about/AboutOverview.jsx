'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, MapPinned, Users } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Strong 15000+ Work Force' },
  { icon: BadgeCheck, label: '200+ Clients' },
  { icon: MapPinned, label: 'Presence PAN INDIA' },
];

// Animation Variants for Left (Fade In Right) & Right (Fade In Left)
const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
    },
  },
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function AboutOverview() {
  return (
    <section className="bg-white py-20 sm:py-24 overflow-hidden dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 items-center">
        
        {/* Left Side: Fade In from Left */}
        <motion.div
          variants={fadeInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              About Amaze PMS Pvt Ltd
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              About Us
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Amaze PMS Pvt Ltd (AMAZE) is a leading property management division of the Action Group of Companies, founded in 2001 by Mr. Subhani Abdul. With a strong workforce and a pan-India presence, we deliver integrated facility management services that elevate the performance, security, and experience of every space we touch.
            </p>
          </div>

          {/* Staggered Stats Items */}
          <div className="space-y-3">
            {stats.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-800"
              >
                <div className="rounded-full bg-blue-600/10 p-2 text-blue-600">
                  <Icon className="h-4 w-4" />
                </div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <span>GET STARTED WITH US</span>
              <span className="rounded-full bg-white/15 p-2">
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Fade In from Right */}
        <motion.div
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative h-115">
            {/* Top Back Card */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 top-10 w-[72%] rounded-4xl bg-slate-900 p-4 shadow-2xl"
            >
              <Image
                src="https://www.amazepms.com/assets/about-ag.jpg"
                alt="Action Group shield logo"
                width={900}
                height={700}
                className="h-72 w-full rounded-[1.4rem] object-contain bg-white/10 p-3"
              />
            </motion.div>

            {/* Bottom Floating Front Card */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[72%] rounded-4xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <Image
                src="https://www.amazepms.com/assets/about-team.jpg"
                alt="Amaze team"
                width={900}
                height={700}
                className="h-72 w-full rounded-[1.4rem] object-cover"
              />
            </motion.div>

            {/* Background Decorative Accents */}
            <div className="absolute -left-4 top-0 h-28 w-28 rounded-full border border-dashed border-slate-300 pointer-events-none dark:border-slate-700" />
            <div className="absolute bottom-8 left-12 h-16 w-16 rounded-full bg-blue-100/60 blur-xs pointer-events-none dark:bg-blue-950/40" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}