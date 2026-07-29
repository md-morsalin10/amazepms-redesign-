"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';
import { Building2, Award, ArrowUpRight } from 'lucide-react';

// --- CHART DATA CONFIGURATION ---
const chartData = [
  { name: 'Residential Communities', value: 33, color: '#3B82F6', gradient: 'from-blue-600 to-cyan-400' },
  { name: 'Commercial & IT Parks', value: 25, color: '#F97316', gradient: 'from-orange-500 to-amber-400' },
  { name: 'Corporate Office', value: 12, color: '#EAB308', gradient: 'from-yellow-500 to-amber-300' },
  { name: 'Educational Institutions', value: 8, color: '#10B981', gradient: 'from-emerald-500 to-teal-300' },
  { name: 'Malls & Retail Stores', value: 8, color: '#A855F7', gradient: 'from-purple-600 to-pink-400' },
  { name: 'Others', value: 9, color: '#06B6D4', gradient: 'from-cyan-500 to-blue-400' },
  { name: 'Manufacturing Units', value: 5, color: '#EF4444', gradient: 'from-red-500 to-rose-400' },
];

// --- LEFT COLUMN DATA ---
const educationalInstitutions = [
  'Institute of Public Enterprise',
  'NICMAR',
  'Nalsar University of Law',
  'EFL University',
  'Administrative Staff College of India',
  'Aga Khan Academy',
  'KL University',
  'Delhi Public School (DPS)',
  'Mahindra University',
  'Analog IAS Academy'
];

const manufacturingPharma = [
  'Vidur Pharma',
  'Srivar Pharma',
  'MSN Pharma',
  'Renew Power Projects',
  'Astra Microwave Products',
  'UB Beer Ltd',
  'BMM Ispat Ltd',
  'VRKP Steels Ltd',
  'Pokarna Ltd',
  'MSPL Ltd'
];

// Custom Active Sector with Expanded Arc & Glow Effect
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      {/* Outer Glow Pass */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 4}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.25}
      />
      {/* Main Expanded Sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 2}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={6}
      />
    </g>
  );
};

// Glassmorphism Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-3.5 rounded-2xl shadow-2xl shadow-black/40 text-white">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
          <p className="font-semibold text-xs text-slate-200">{data.name}</p>
        </div>
        <p className="text-lg font-black mt-1 text-white pl-5">
          {data.value}% <span className="text-[11px] font-normal text-slate-400">Market Share</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function ClientsChartSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeCategory = activeIndex !== null ? chartData[activeIndex] : null;

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" /> Market Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Client Distribution & Sectors
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-md mt-4 md:mt-0">
            A comprehensive overview of our footprint across diverse commercial, residential, and institutional developments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT COLUMN: CLIENT LISTS ================= */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* 1. Educational Institutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-7 rounded-full bg-emerald-500" />
                  Educational Institutions
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {educationalInstitutions.length} Top Campus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationalInstitutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition-all duration-200"
                  >
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 w-5 text-right group-hover:text-emerald-500 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 truncate group-hover:text-slate-900 dark:group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Manufacturing & Pharma */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-7 rounded-full bg-rose-500" />
                  Manufacturing & Pharma
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {manufacturingPharma.length} Plants
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {manufacturingPharma.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition-all duration-200"
                  >
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 w-5 text-right group-hover:text-rose-500 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 truncate group-hover:text-slate-900 dark:group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>


          {/* ================= RIGHT COLUMN: HIGH-END RECHARTS ================= */}
          <div className="lg:col-span-6 sticky top-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-2xl overflow-hidden"
            >
              {/* Background Aura */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Title */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Portfolio Share</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Interactive sector breakdown</p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>

              {/* Chart & Live Legend Grid */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                
                {/* 1. Recharts Canvas with Interactive Badge */}
                <div className="w-[260px] h-[260px] relative flex-shrink-0">
                  
                  {/* Center Interactive Stats Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <AnimatePresence mode="wait">
                      {activeCategory ? (
                        <motion.div
                          key="active"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-center px-4"
                        >
                          <span 
                            className="text-2xl md:text-3xl font-black tracking-tight block"
                            style={{ color: activeCategory.color }}
                          >
                            {activeCategory.value}%
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block truncate max-w-[120px]">
                            {activeCategory.name}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-center"
                        >
                          <span className="text-3xl font-black text-slate-900 dark:text-white block tracking-tight">
                            200+
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Active Clients
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={78}
                        outerRadius={108}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={6}
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        {chartData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            className="transition-all duration-300 cursor-pointer outline-none"
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* 2. Interactive Progress-Bar Legend */}
                <div className="w-full flex flex-col space-y-2.5">
                  {chartData.map((entry, index) => {
                    const isSelected = activeIndex === index;
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className={`group p-2.5 rounded-xl cursor-pointer transition-all duration-300 border ${
                          isSelected 
                            ? 'bg-white dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 shadow-md scale-[1.02]' 
                            : 'bg-transparent border-transparent hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                          <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 truncate">
                            <span 
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                              style={{ backgroundColor: entry.color }} 
                            />
                            {entry.name}
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white pl-2">
                            {entry.value}%
                          </span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${entry.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: entry.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Footer Note */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                <span>Updated Realtime Metric</span>
                <span className="flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  View Full Report <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}