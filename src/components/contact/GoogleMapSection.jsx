"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GoogleMapSection() {
  return (
    <section className="pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative bg-slate-200 dark:bg-slate-900"
        >
          {/* Note: The iframe src is configured to show the approximate Khajaguda area. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.840251390499!2d78.37563851532152!3d17.419409806466986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941f173b9e4b%3A0x6b4f738ea0e8a7d1!2sKhajaguda%20X%20Road!5e0!3m2!1sen!2sin!4v1689255017992!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "var(--map-filter)" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="dark:invert-[90%] dark:hue-rotate-180 dark:contrast-75 transition-[filter] duration-500"
          ></iframe>
          
          {/* Subtle overlay to blend the map slightly with the theme */}
          <div className="absolute inset-0 pointer-events-none bg-blue-500/5 dark:bg-blue-400/10 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
