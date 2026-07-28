"use client";
import React from "react";
import { ReactLenis } from 'lenis/react';
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import GoogleMapSection from "@/components/contact/GoogleMapSection";

export default function ContactPage() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
        <ContactHero />
        <ContactDetails />
        <GoogleMapSection />
      </main>
    </ReactLenis>
  );
}
