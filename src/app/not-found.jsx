'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home, LifeBuoy, Search, Mail } from 'lucide-react';

export default function NotFound() {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Search },
    { name: 'Contact Support', href: '/contact', icon: LifeBuoy },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden p-4 font-sans">
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Main Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center">
          
          {/* Glowing 404 Badge */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            className="mb-6 relative"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-[0_0_40px_rgba(96,165,250,0.4)]">
                404
              </h1>
            </motion.div>
          </motion.div>

          {/* Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-100 mb-4 tracking-tight">
              Page Lost in Space
            </h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
              We've searched the entire universe, but the page you are looking for seems to have drifted into a black hole. Let's get you back to safety.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <Link
              href="/"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-colors" />
              <span>Report Issue</span>
              <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full pt-8 border-t border-white/5"
          >
            <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest font-medium">
              Quick Navigation
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <link.icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
