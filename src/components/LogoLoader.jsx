'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LogoLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate page load progress
    let start = null;
    const duration = 2400; // total ms to fill the bar

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(animate);
      } else {
        // Short pause at 100%, then dismiss
        setTimeout(() => setIsVisible(false), 400);
      }
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="logo-loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
          aria-label="Loading"
          role="status"
        >
          {/* ── Radial atmospheric glow ── */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(37,99,235,0.18) 0%, transparent 70%)',
            }}
          />

          {/* ── Subtle grid texture ── */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* ── Logo card ── */}
          <div className="relative flex flex-col items-center">
            {/* Glassmorphic card */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-44 rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-950/40 overflow-hidden flex items-center justify-center"
            >
              {/* Diagonal metallic flare — sweeps bottom-left to top-right */}
              <motion.span
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(130deg, transparent 20%, rgba(251,191,36,0.18) 45%, rgba(255,255,255,0.55) 55%, transparent 75%)',
                }}
                animate={{ x: ['-100%', '160%'] }}
                transition={{
                  duration: 2.4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
              />

              {/* Logo image */}
              <img
                src="https://www.amazepms.com/assets/logo.png"
                alt="Amaze PMSPL"
                className="h-20 w-auto object-contain relative z-10 drop-shadow-lg"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />

              {/* Pulsing star glow dot — top-right corner */}
              <span className="absolute top-4 right-4 z-20">
                <motion.span
                  className="block h-3 w-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/60"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>

              {/* Inner ambient border glow */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </motion.div>

            {/* Brand name below card */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg font-black tracking-widest text-white uppercase"
            >
              AMAZE{' '}
              <span className="font-extralight text-blue-400">PMSPL</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-1 text-[11px] font-medium tracking-[0.4em] uppercase text-slate-500"
            >
              Property Management
            </motion.p>
          </div>

          {/* ── Progress section ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-64"
          >
            {/* Percentage */}
            <span className="font-mono text-xs font-semibold tabular-nums text-slate-400">
              {progress}%
            </span>

            {/* Track */}
            <div className="w-full h-[3px] rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #2563eb, #6366f1, #f59e0b)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Subtle loading label */}
            <span className="text-[10px] tracking-[0.35em] uppercase text-slate-600 font-medium">
              Loading
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
