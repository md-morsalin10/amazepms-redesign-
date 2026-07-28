"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const stages = [
  {
    stage: "STAGE - 1",
    points: [
      "Getting connected with the client",
      "Understanding the client requirement",
      "Site Survey & studying the existing processes",
      "Submission of service & commercial proposal"
    ]
  },
  {
    stage: "STAGE - 2",
    points: [
      "Contract confirmation by the client",
      "Resource planning, recruitment & training",
      "Preparation of site specific SOP's.",
      "Finalizing the service agreement"
    ]
  },
  {
    stage: "STAGE - 3",
    points: [
      "Deployment of contract start up team",
      "Parallel deployment of security force",
      "Taking over from the existing service provider",
      "Supervision and co-ordination by field staff"
    ]
  },
  {
    stage: "STAGE - 4",
    points: [
      "Close monitoring by the operations team",
      "Review of security posture & procedures",
      "Site specific training",
      "Feedback & Suggestions from client"
    ]
  }
];

export default function FunctionalApproach() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* 🏙️ Building / Skyscraper Image on Right Side */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] bg-right bg-cover bg-no-repeat pointer-events-none z-0 opacity-70 dark:opacity-50 transition-opacity duration-300"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')`,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
        }}
      />

      <div className="max-w-[1350px] mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 xl:mb-28">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-1 block">
            APPROACH
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Functional Approach
          </h2>
        </div>

        {/* 📈 Exact Staircase Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 relative">
          
          {stages.map((item, index) => {
            // Ascending Staircase Effect: Each step is exactly 48px higher (3rem)
            const translateYClasses = [
              "xl:translate-y-24", // 96px
              "xl:translate-y-12", // 48px
              "xl:translate-y-0",  // 0px
              "xl:-translate-y-12" // -48px
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`w-full flex flex-col relative ${translateYClasses[index]}`}
              >
                {/* Stage Pill Button */}
                <div className="w-full relative mb-8">
                  <div className="relative z-10 w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-extrabold text-center shadow-lg shadow-blue-500/20 text-sm tracking-wider uppercase">
                    {item.stage}
                  </div>
                  
                  {/* Step Connector Line (Links right side of button to left side of next button) */}
                  {index < stages.length - 1 && (
                    <svg 
                      className="hidden xl:block absolute left-full top-1/2 w-8 h-[49px] -translate-y-[48px] overflow-visible z-0" 
                      viewBox="0 0 32 48" 
                      fill="none"
                    >
                      <path 
                        d="M0 48 L16 48 L16 0 L32 0" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="text-slate-400 dark:text-slate-600" 
                      />
                      <circle cx="32" cy="0" r="3.5" className="fill-slate-900 dark:fill-blue-500" />
                    </svg>
                  )}
                </div>

                {/* Bullet Points Checklist */}
                <div className="space-y-3 w-full px-2">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-200">
                      <FiCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                      <span className="leading-tight whitespace-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}