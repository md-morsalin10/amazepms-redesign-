"use client";
import React from "react";
import { ReactLenis } from 'lenis/react';
import RecruitmentsHero from "@/components/recruitments/RecruitmentsHero";
import RecruitmentStrategy from "@/components/recruitments/RecruitmentStrategy";
import SkillDevelopment from "@/components/recruitments/SkillDevelopment";
import AuditsSection from "@/components/recruitments/AuditsSection";
import FunctionalApproach from "@/components/recruitments/FunctionalApproach";

export default function RecruitmentPage() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
        <RecruitmentsHero />
        <RecruitmentStrategy />
        <SkillDevelopment />
        <AuditsSection />
        <FunctionalApproach />
      </main>
    </ReactLenis>
  );
}
