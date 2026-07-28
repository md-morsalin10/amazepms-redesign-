'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
        alt="City skyline"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
      <div className="absolute inset-0 opacity-60">
        <svg viewBox="0 0 1440 500" className="h-full w-full" preserveAspectRatio="none">
          <path d="M0 320C120 280 240 240 360 250C480 260 600 330 720 330C840 330 960 270 1080 250C1200 230 1320 240 1440 270" stroke="#60a5fa" strokeWidth="2" fill="none" strokeOpacity="0.35" />
          <path d="M0 360C120 320 240 300 360 310C480 320 600 380 720 390C840 400 960 350 1080 340C1200 330 1320 340 1440 360" stroke="#ffffff" strokeWidth="1.2" fill="none" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-110 max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <nav className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-semibold text-white">About Us</span>
          </nav>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            We create safe, efficient, sustainable spaces through integrated property and facility management solutions grounded in excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
