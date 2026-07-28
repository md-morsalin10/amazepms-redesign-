'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, Hospital, House, Landmark, Sparkles, Trees, Warehouse } from 'lucide-react';

const segments = [
  'Commercial and IT Parks',
  'Corporate Offices',
  'Educational Institutions',
  'Residential Communities',
  'Hotels and Hospitals',
  'Industries',
  'Infrastructure',
  'Malls & Retail',
  'Manufacturing',
  'Special Events',
  'Warehouses',
  'Pharma',
];

export default function SegmentsCatered() {
  return (
    <section className="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* Left Column: Segments List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              Segments We Cater To
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Tailored facility solutions for every business and community
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {segments.map((segment, index) => (
              <motion.div
                key={segment}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 transition-all duration-200 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {segment}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Service Footprint Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/90"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-600/20 p-3 text-blue-400">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Service footprint
              </p>
              <h3 className="text-xl font-semibold text-white">Across industries and geographies</h3>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Factory, label: 'Industries' },
              { icon: Hospital, label: 'Healthcare' },
              { icon: House, label: 'Residential' },
              { icon: Warehouse, label: 'Warehouses' },
              { icon: Trees, label: 'Campus & Parks' },
              { icon: Landmark, label: 'Infrastructure' },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-slate-200">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}