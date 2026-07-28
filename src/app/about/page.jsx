'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  Factory,
  HeartHandshake,
  Hospital,
  House,
  Landmark,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  Warehouse,
} from 'lucide-react';

const stats = [
  { icon: Users, label: 'Strong 15000+ Work Force' },
  { icon: BadgeCheck, label: '200+ Clients' },
  { icon: MapPinned, label: 'Presence PAN INDIA' },
];

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

const values = [
  'Respect',
  'Integrity',
  'Excellence',
  'Sustainability',
  'Customer Focus',
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
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

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About Amaze PMS Pvt Ltd</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About Us</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Amaze PMS Pvt Ltd (AMAZE) is a leading property management division of the Action Group of Companies, founded in 2001 by Mr. Subhani Abdul. With a strong workforce and a pan-India presence, we deliver integrated facility management services that elevate the performance, security, and experience of every space we touch.
              </p>
            </div>

            <div className="space-y-3">
              {stats.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <div className="rounded-full bg-blue-600/10 p-2 text-blue-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <span>GET STARTED WITH US</span>
              <span className="rounded-full bg-white/15 p-2">
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative h-115">
              <div className="absolute left-0 top-10 w-[72%] rounded-4xl bg-slate-900 p-4 shadow-2xl">
                <Image
                  src="https://www.amazepms.com/assets/about-ag.jpg"
                  alt="Action Group shield logo"
                  width={900}
                  height={700}
                  className="h-72 w-full rounded-[1.4rem] object-contain bg-white/10 p-3"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[72%] rounded-4xl border border-slate-200 bg-white p-3 shadow-2xl">
                <Image
                  src="https://www.amazepms.com/assets/about-team.jpg"
                  alt="Amaze team"
                  width={900}
                  height={700}
                  className="h-72 w-full rounded-[1.4rem] object-cover"
                />
              </div>

              <div className="absolute -left-4 top-0 h-28 w-28 rounded-full border border-dashed border-slate-300" />
              <div className="absolute bottom-8 left-12 h-16 w-16 rounded-full bg-blue-100" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Mission | Vision | Values</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Purpose-driven excellence for every client and community
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-4xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-600/20 sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Mission</p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">To deliver dependable and innovative facility solutions that improve every environment.</h3>
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <Compass className="h-10 w-10" />
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-blue-600">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Vision</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">(ATHMA NIRBHAR BHARATH)</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    Creating self-reliant, resilient communities through trusted partnerships and service excellence.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Values</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {values.map((value) => (
                      <span key={value} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                        {value}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Our culture is rooted in respect, integrity, excellence, sustainability, and customer focus, ensuring every relationship is built on trust and measurable value.
                  </p>
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white">
                  <HeartHandshake className="h-10 w-10" />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Segments We Cater To</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
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
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div className="rounded-full bg-blue-600/10 p-2 text-blue-600">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{segment}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-4xl bg-slate-900 p-8 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-600/20 p-3 text-blue-400">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Service footprint</p>
                <h3 className="text-xl font-semibold">Across industries and geographies</h3>
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
                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}