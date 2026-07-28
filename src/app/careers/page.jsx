"use client";
import React from "react";
import { ReactLenis } from 'lenis/react';
import CareersHero from "@/components/careers/CareersHero";
import CareersContent from "@/components/careers/CareersContent";

export default function CareersPage() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
        <CareersHero />
        <CareersContent />
      </main>
    </ReactLenis>
  );
}
