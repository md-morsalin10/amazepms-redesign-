"use client";
import React from "react";
import { ReactLenis } from 'lenis/react';
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
        <GalleryHero />
        <GalleryGrid />
      </main>
    </ReactLenis>
  );
}
