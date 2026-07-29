'use client';

import dynamic from 'next/dynamic';

// Dynamically import both loaders — both are purely client-side
const LogoLoader  = dynamic(() => import('@/components/LogoLoader'),  { ssr: false });
const GlobalLoader = dynamic(() => import('@/components/GlobalLoader'), { ssr: false });

export default function ClientProviders({ children }) {
  return (
    <>
      {/* Page-load preloader (runs once on first visit) */}
      <LogoLoader />

      {/* Route-change overlay (triggers on every navigation) */}
      <GlobalLoader />

      {children}
    </>
  );
}
