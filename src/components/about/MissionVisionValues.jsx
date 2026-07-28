'use client';

import { motion } from 'framer-motion';
import { Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

const values = ['Respect', 'Integrity', 'Excellence', 'Sustainability', 'Customer Focus'];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function MissionVisionValues() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 overflow-hidden dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-2xl font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Mission | Vision | Values
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="space-y-6">
          {/* Mission Card */}
          <motion.article
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/25 sm:p-10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 dark:hover:bg-blue-700"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 transition-colors duration-300 group-hover:text-blue-200">
                  Mission
                </p>
                <h3 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white sm:text-3xl dark:text-white">
                  To deliver dependable and innovative facility solutions that improve every environment.
                </h3>
              </div>
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 dark:bg-blue-950/40 dark:text-blue-400">
                <Compass className="h-10 w-10" />
              </div>
            </div>
          </motion.article>

          {/* Vision Card */}
          <motion.article
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/25 sm:p-10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 dark:hover:bg-blue-700"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 transition-colors duration-300 group-hover:text-blue-200">
                  Vision
                </p>
                <h3 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white sm:text-3xl dark:text-white">
                  (ATHMA NIRBHAR BHARATH)
                </h3>
                <p className="text-base leading-8 text-slate-600 transition-colors duration-300 group-hover:text-blue-100 dark:text-slate-300">
                  Creating self-reliant, resilient communities through trusted partnerships and service excellence.
                </p>
              </div>
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 dark:bg-blue-950/40 dark:text-blue-400">
                <ShieldCheck className="h-10 w-10" />
              </div>
            </div>
          </motion.article>

          {/* Values Card */}
          <motion.article
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/25 sm:p-10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 dark:hover:bg-blue-700"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 transition-colors duration-300 group-hover:text-blue-200">
                  Values
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {values.map((value) => (
                    <motion.span
                      key={value}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
                <p className="text-base leading-8 text-slate-600 transition-colors duration-300 group-hover:text-blue-100 dark:text-slate-300">
                  Our culture is rooted in respect, integrity, excellence, sustainability, and customer focus, ensuring every relationship is built on trust and measurable value.
                </p>
              </div>
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 dark:bg-blue-950/40 dark:text-blue-400">
                <HeartHandshake className="h-10 w-10" />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}