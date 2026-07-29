'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────
   Sparkle dot that orbits the glass badge
───────────────────────────────────────── */
function OrbitingStar({ radius = 64, duration = 3 }) {
  return (
    <motion.span
      className="pointer-events-none absolute h-3 w-3 rounded-full bg-amber-400"
      style={{
        boxShadow: '0 0 10px 4px rgba(251,191,36,0.8)',
        top: '50%',
        left: '50%',
        marginTop: -6,
        marginLeft: -6,
      }}
      animate={{
        x: [
          radius, // right
          0,       // bottom
          -radius, // left
          0,       // top
          radius,  // right
        ],
        y: [
          0,
          radius,
          0,
          -radius,
          0,
        ],
      }}
      transition={{
        duration,
        ease: 'linear',
        repeat: Infinity,
      }}
    />
  );
}

/* ─────────────────────────────────────────
   Diagonal light flare
───────────────────────────────────────── */
function DiagonalFlare() {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-full"
      style={{
        background:
          'linear-gradient(130deg, transparent 20%, rgba(251,191,36,0.15) 45%, rgba(255,255,255,0.45) 55%, transparent 75%)',
      }}
      animate={{ x: ['-120%', '160%'] }}
      transition={{
        duration: 2.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1.5,
      }}
    />
  );
}

/* ─────────────────────────────────────────
   Rooftop / skyline icon (SVG)
───────────────────────────────────────── */
function SkylineIcon() {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 drop-shadow-lg"
      aria-hidden="true"
    >
      {/* Two building towers */}
      <rect x="2"  y="18" width="10" height="22" rx="1" fill="rgba(147,197,253,0.25)" stroke="rgba(147,197,253,0.8)" strokeWidth="1.2" />
      <rect x="19" y="8"  width="10" height="32" rx="1" fill="rgba(99,102,241,0.25)"  stroke="rgba(129,140,248,0.9)" strokeWidth="1.2" />
      <rect x="36" y="14" width="10" height="26" rx="1" fill="rgba(147,197,253,0.25)" stroke="rgba(147,197,253,0.8)" strokeWidth="1.2" />
      {/* Roof peaks */}
      <polyline points="2,18 7,10 12,18"  stroke="rgba(251,191,36,0.9)" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <polyline points="19,8 24,0 29,8"   stroke="rgba(251,191,36,1)"   strokeWidth="1.6" fill="none" strokeLinejoin="round" />
      <polyline points="36,14 41,6 46,14" stroke="rgba(251,191,36,0.9)" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      {/* Star sparkle at top of center tower */}
      <path
        d="M24 0 L25 2.5 L27.5 2.5 L25.5 4 L26.3 6.5 L24 5 L21.7 6.5 L22.5 4 L20.5 2.5 L23 2.5 Z"
        fill="#fbbf24"
        opacity="0.95"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Main GlobalLoader
───────────────────────────────────────── */
export default function GlobalLoader() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If pathname changed — a navigation just happened
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      setLoading(true);

      // Auto-dismiss after a short window (nav is fast in Next.js App Router)
      const timer = setTimeout(() => setLoading(false), 700);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm"
          aria-live="polite"
          aria-label="Navigating…"
        >
          {/* Radial ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 45% at 50% 55%, rgba(37,99,235,0.22) 0%, transparent 70%)',
            }}
          />

          {/* ── Glass badge ── */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulse ring */}
            <motion.span
              className="absolute rounded-full border border-blue-500/30"
              animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
              transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity }}
              style={{ width: 148, height: 148 }}
            />

            {/* Second pulse ring, offset */}
            <motion.span
              className="absolute rounded-full border border-indigo-500/20"
              animate={{ scale: [1, 1.55], opacity: [0.4, 0] }}
              transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity, delay: 0.4 }}
              style={{ width: 148, height: 148 }}
            />

            {/* Orbiting amber star */}
            <OrbitingStar radius={76} duration={2.8} />

            {/* Glassmorphic badge */}
            <div className="relative h-[120px] w-[120px] rounded-full border border-slate-700/60 bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-950/60 flex items-center justify-center overflow-hidden">
              <DiagonalFlare />
              <SkylineIcon />
              {/* Inner ambient ring */}
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {/* ── Brand text ── */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
            className="mt-8 text-base font-black tracking-[0.4em] text-white uppercase"
          >
            AMAZE{' '}
            <span className="font-extralight text-blue-400 tracking-[0.3em]">PMSPL</span>
          </motion.p>

          <p className="mt-1.5 text-[10px] font-medium tracking-[0.45em] uppercase text-slate-500">
            Navigating
          </p>

          {/* ── Slim progress shimmer bar ── */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[2px] rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #2563eb, #818cf8, #fbbf24, #818cf8, #2563eb)',
                backgroundSize: '300% 100%',
              }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
