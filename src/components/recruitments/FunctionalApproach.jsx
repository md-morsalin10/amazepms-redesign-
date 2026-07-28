"use client";
import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    title: "Requirement Gathering",
    stage: "STAGE - 1",
    desc: "Understanding property needs, creating job descriptions, and defining SLA parameters.",
    align: "left"
  },
  {
    title: "Sourcing & Screening",
    stage: "STAGE - 2",
    desc: "Deploying local recruitment drives, filtering candidates, and conducting primary interviews.",
    align: "right"
  },
  {
    title: "Verification & Training",
    stage: "STAGE - 3",
    desc: "Background checks, medical tests, followed by intense domain-specific training protocols.",
    align: "left"
  },
  {
    title: "Deployment & Audit",
    stage: "STAGE - 4",
    desc: "On-site deployment, continuous performance monitoring, and rigorous periodic audits.",
    align: "right"
  }
];

export default function FunctionalApproach() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Functional Approach Roadmap
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Our step-by-step process ensures transparency, efficiency, and excellence at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-12 md:space-y-24 relative">
            {stages.map((item, index) => {
              const isLeft = item.align === "left";
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-5/12 mb-8 md:mb-0">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative z-10"
                    >
                      <span className="text-xs font-bold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full mb-4 inline-block">
                        {item.stage}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-950 z-20 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Empty space for alternative side */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
