"use client";
import React from "react";
import { ReactLenis } from 'lenis/react';
import StrengthHero from "@/components/our-strength/StrengthHero";
import StrengthPointsSection from "@/components/our-strength/StrengthPointsSection";

export default function OurStrengthPage() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
        <StrengthHero />
        <StrengthPointsSection />
      </main>
    </ReactLenis>
  );
}
