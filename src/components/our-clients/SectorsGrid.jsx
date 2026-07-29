"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  Search, Sparkles, CheckCircle2, Layers, ArrowRight, X 
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const clientCategories = [
  {
    id: 'commercial',
    title: 'Commercial & IT Parks',
    color: '#3B82F6',
    clients: [
      'Sohini Tech Park', 'BSR Tech Park', 'Divyasree NSL (Orion Campus)', 'Kapil Towers', 
      'Astra Towers', 'Lanco IT', 'Rajapushpa Summit', 'Cyperoptics', 'IVY Infotech', 
      'L&T Metro Stations', 'Purva Summit', 'Kapil Business Park', 'I Labs', 
      'Sattva Knowledge Park', 'Tech Mahindra', 'T Hub', 'Tech Ridge', 'Cyber Towers', 
      'Aurobindo Galaxy', 'Kapil Kavuri Hub', 'Sitel India Pvt Ltd', 'Jocota', 'Moschip', 
      'Smart Drive', 'ISprout'
    ]
  },
  {
    id: 'residential',
    title: 'Residential Communities',
    color: '#10B981',
    clients: [
      'Golf Edge Residences', 'Aparna Silver Oak', 'Mahindra Ashvitha', 'Golf View', 
      'Ramky Towers', 'Rajapushpa Imperia', 'Lanco Hills', 'Rajapushpa Provincia', 
      'Krinss Villas', 'Hill County', 'Rajapushpa Greendale', 'Jains Balaji', 
      'Kalpatharu Residency', 'Sri Sai Ram Towers', 'The Botanika', 'My Home Mangla', 
      'Rainbow Vista', 'North Star Villas', 'Rajapushpa Regalia', 'Rajapushpa Atria', 
      'Manjeera Diamond Tower', 'L&T Serene County', 'Aparna Hill Park Sarovar', 
      'My Home Avatar', 'Rajapushpa Eterna', 'Hill Ridge Villas', 'Aditya Empress', 
      'Prajay Megapolis'
    ]
  },
  {
    id: 'malls',
    title: 'Malls & Retail Stores',
    color: '#A855F7',
    clients: [
      'Nexus Mall', 'Marina Mall', 'Phoenix Market City', 'GMS Mall', 'Lulu Mall', 
      'DSL Mall', 'L&T Mall - Punjagutta', 'L&T Mall - Hitech City', 
      'L&T Mall - Musarambagh', 'Max Stores', 'Time Zone', 'Life Style'
    ]
  },
  {
    id: 'healthcare',
    title: 'Hospitals & Clinics',
    color: '#EC4899',
    clients: [
      'Rainbow Hospitals', 'Oliva Clinics', 'Star Health', 'Apollo Healthcare'
    ]
  },
  {
    id: 'warehouses',
    title: 'Warehouses & Logistics',
    color: '#F97316',
    clients: [
      'Max Logistics', 'Life Style', 'RIL Supply Chain', 'Metro Cash & Carry', 'UB Beer', 'Emirates Logistics', 'Nippon Express', 'ITC'
    ]
  },
  {
    id: 'education',
    title: 'Educational Institutions',
    color: '#06B6D4',
    clients: [
      'Oakridge International School', 'ISB Campus', 'Delhi Public School (DPS)', 'Chirec International School', 'Mahindra University'
    ]
  },
  {
    id: 'pharma',
    title: 'Manufacturing & Pharma',
    color: '#EF4444',
    clients: [
      'Dr. Reddy\'s Laboratories', 'Aurobindo Pharma', 'Bharat Biotech', 'Hetero Drugs', 'MSN Pharma'
    ]
  }
];

const DEFAULT_PREVIEW_COUNT = 6;

// Recharts Custom Bar Chart Tooltip
const CustomChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-3 rounded-2xl shadow-2xl text-white">
        <p className="font-bold text-xs text-slate-300">{data.title}</p>
        <p className="text-lg font-black text-white mt-0.5">
          {data.count} <span className="text-xs font-normal text-slate-400">Clients Portfolio</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function SectorsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHoverBar, setActiveHoverBar] = useState(null);
  const [activeModalCategory, setActiveModalCategory] = useState(null);
  const [modalSearch, setModalSearch] = useState('');

  // Bar Chart Data Preparation
  const chartData = useMemo(() => {
    return clientCategories.map(cat => ({
      id: cat.id,
      title: cat.title,
      count: cat.clients.length,
      color: cat.color
    }));
  }, []);

  // Filter Categories and Clients
  const filteredCategories = useMemo(() => {
    return clientCategories
      .filter(cat => selectedCategory === 'all' || cat.id === selectedCategory)
      .map(cat => {
        if (!searchQuery.trim()) return cat;
        return {
          ...cat,
          clients: cat.clients.filter(client => 
            client.toLowerCase().includes(searchQuery.toLowerCase())
          )
        };
      })
      .filter(cat => cat.clients.length > 0);
  }, [selectedCategory, searchQuery]);

  // Modal Search Filter
  const modalFilteredClients = useMemo(() => {
    if (!activeModalCategory) return [];
    if (!modalSearch.trim()) return activeModalCategory.clients;
    return activeModalCategory.clients.filter(client => 
      client.toLowerCase().includes(modalSearch.toLowerCase())
    );
  }, [activeModalCategory, modalSearch]);

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* ================= 1. HEADER & SEARCH BAR ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> Sector Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Sectors & Valued Clients
            </h2>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client or brand..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* ================= 2. RECHARTS SECTOR ANALYTICS BAR CHART ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" /> Sector Volume Distribution
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Click on any bar to filter sectors</p>
            </div>
            {selectedCategory !== 'all' && (
              <button 
                onClick={() => setSelectedCategory('all')}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="title" 
                  tick={{ fontSize: 10, fill: '#94A3B8' }} 
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  tickFormatter={(val) => val.split(' ')[0]} 
                />
                <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomChartTooltip />} />
                <Bar 
                  dataKey="count" 
                  radius={[8, 8, 0, 0]}
                  onClick={(data) => setSelectedCategory(data.id)}
                  className="cursor-pointer"
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      opacity={selectedCategory === 'all' || selectedCategory === entry.id ? 1 : 0.3}
                      onMouseEnter={() => setActiveHoverBar(index)}
                      onMouseLeave={() => setActiveHoverBar(null)}
                      style={{
                        filter: activeHoverBar === index ? 'brightness(1.15)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* ================= 3. EQUAL HEIGHT 3-COLUMN GRID WITH PREMIUM HOVER ================= */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {filteredCategories.map((category) => {
              const hasMore = category.clients.length > DEFAULT_PREVIEW_COUNT;
              const visibleClients = category.clients.slice(0, DEFAULT_PREVIEW_COUNT);

              return (
                <div
                  key={category.id}
                  className="group relative flex flex-col justify-between bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-slate-200/80 dark:border-slate-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 h-full overflow-hidden"
                  style={{
                    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Subtle Color Accent Glow on Hover */}
                  <div 
                    className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: category.color }}
                  />

                  {/* Top Accent Bar */}
                  <div 
                    className="absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all duration-300 group-hover:h-1.5 group-hover:left-4 group-hover:right-4"
                    style={{ backgroundColor: category.color }}
                  />

                  {/* Card Content */}
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-6 pt-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight truncate pr-2 group-hover:translate-x-1 transition-transform duration-300">
                        {category.title}
                      </h3>
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded-full text-white flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: category.color }}
                      >
                        {category.clients.length}
                      </span>
                    </div>

                    {/* Client List Items */}
                    <div className="space-y-2">
                      {visibleClients.map((client, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-all duration-200 group/item hover:translate-x-1"
                        >
                          <CheckCircle2 
                            className="w-4 h-4 flex-shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" 
                            style={{ color: category.color }}
                          />
                          <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white truncate">
                            {client}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                    {hasMore ? (
                      <button
                        onClick={() => {
                          setActiveModalCategory(category);
                          setModalSearch('');
                        }}
                        className="w-full flex items-center justify-between text-xs font-bold px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300 group/btn hover:shadow-md"
                      >
                        <span>See All ({category.clients.length})</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <div className="text-center text-xs font-semibold text-slate-400 py-1">
                        Showing all {category.clients.length} items
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ================= 4. FIXED & FULLY SCROLLABLE SEE ALL MODAL ================= */}
      <AnimatePresence>
        {activeModalCategory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            
            {/* Backdrop Click to Close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer pointer-events-auto" 
              onClick={() => setActiveModalCategory(null)} 
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl flex flex-col pointer-events-auto"
              style={{ maxHeight: 'calc(100vh - 2rem)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 1. Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span 
                    className="w-3 h-8 rounded-full" 
                    style={{ backgroundColor: activeModalCategory.color }} 
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                      {activeModalCategory.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Total {activeModalCategory.clients.length} registered clients
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalCategory(null)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 2. Modal Search Input */}
              <div className="my-4 relative flex-shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  placeholder={`Search inside ${activeModalCategory.title}...`}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>

              {/* 3. SCROLLABLE AREA */}
              <div 
                className="overflow-y-auto min-h-0 flex-1 pr-2 my-2 touch-auto overscroll-contain pointer-events-auto"
                style={{ WebkitOverflowScrolling: 'touch' }}
                onWheel={(e) => e.stopPropagation()}
              >
                {modalFilteredClients.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pb-2">
                    {modalFilteredClients.map((client, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                      >
                        <span 
                          className="w-2 h-2 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: activeModalCategory.color }} 
                        />
                        <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {client}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    No clients found matching "{modalSearch}"
                  </div>
                )}
              </div>

              {/* 4. Modal Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-right flex-shrink-0">
                <button
                  onClick={() => setActiveModalCategory(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}