"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Shield, Wrench, Home, Check } from "lucide-react";

const domains = [
  {
    title: "Training Facility",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
    textColor: "text-blue-500",
    bgLight: "bg-blue-50 dark:bg-blue-900/20",
    skills: ["Induction Programs", "Soft Skills Training", "Emergency Drills", "Health & Safety Guidelines", "Customer Service Excellence"]
  },
  {
    title: "Security",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-900/20",
    skills: ["Access Control", "Surveillance Operations", "Patrol Procedures", "Incident Reporting", "Crowd Management"]
  },
  {
    title: "MEP (Technical)",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-500",
    bgLight: "bg-orange-50 dark:bg-orange-900/20",
    skills: ["HVAC Maintenance", "Electrical Troubleshooting", "Plumbing Systems", "Preventative Maintenance", "Tool Safety Protocols"]
  },
  {
    title: "House Keeping",
    icon: Home,
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-500",
    bgLight: "bg-purple-50 dark:bg-purple-900/20",
    skills: ["Chemical Handling", "Equipment Operation", "Waste Management", "Deep Cleaning Techniques", "Hygiene Standards"]
  }
];

export default function SkillDevelopment() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Skill Development
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Continuous training ensures our workforce delivers unparalleled service quality across all domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group h-[420px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl pointer-events-none ${domain.color}" />
                
                <div className="relative h-full p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-2xl transition-all duration-300 flex flex-col group-hover:border-slate-300 dark:group-hover:border-slate-700 overflow-hidden">
                  
                  <div className={`p-4 rounded-2xl w-fit mb-6 ${domain.bgLight} ${domain.textColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {domain.title}
                  </h3>
                  
                  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-3">
                    {domain.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full ${domain.bgLight} ${domain.textColor} flex items-center justify-center`}>
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Fading bottom edge for scrollable area indication */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}} />
    </section>
  );
}
