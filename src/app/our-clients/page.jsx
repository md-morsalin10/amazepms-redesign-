import React from 'react';
import ClientsHero from '@/components/our-clients/ClientsHero';
import ClientsChartSection from '@/components/our-clients/ClientsChartSection';
import SectorsGrid from '@/components/our-clients/SectorsGrid';
import ClientsMarquee from '@/components/our-clients/ClientsMarquee';

export default function OurClientsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <ClientsHero />
      <SectorsGrid />
      <ClientsChartSection />
      <ClientsMarquee />
    </div>
  );
}
