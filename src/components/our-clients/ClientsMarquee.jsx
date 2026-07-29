"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';

const partnerLogos = [
  { id: 1, name: 'Lodha', logo: 'https://www.amazepms.com/assets/client6.png' },
  { id: 2, name: 'Oliva', logo: 'https://www.amazepms.com/assets/client7.jpg' },
  { id: 3, name: 'JLL', logo: 'https://www.amazepms.com/assets/client9.png' },
  { id: 4, name: 'Ashvita', logo: 'https://www.amazepms.com/assets/client10.png' },
  { id: 5, name: 'CBRE', logo: 'https://www.amazepms.com/assets/client11.png' },
  { id: 6, name: 'Hill Country', logo: 'https://www.amazepms.com/assets/client14.png' },
  { id: 7, name: 'Sri Sairam Towers', logo: 'https://www.amazepms.com/assets/client5.png' },
  { id: 8, name: 'Golf view', logo: 'https://www.amazepms.com/assets/client12.png' },
  { id: 9, name: 'Kalpa Taru', logo: 'https://www.amazepms.com/assets/client13.png' },
];

export default function ClientsMarquee() {
  return (
    <section className="relative w-full bg-white dark:bg-slate-950 py-12 overflow-hidden transition-colors duration-300">
      
      {/* 1. SECTION SUB-HEADING (Exact Style & Alignment) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-8">
        <p className="text-sm md:text-base font-semibold text-[#3b82f6] dark:text-blue-400 tracking-normal">
          Trusted by 100+ valued partners around the India
        </p>
      </div>

      {/* 2. LOGO MARQUEE SLIDER */}
      <div className="relative w-full">
        <Marquee
          gradient={true}
          gradientColor="255, 255, 255" // Clean white fade effect on sides
          gradientWidth={100}
          speed={45}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
            {partnerLogos.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain max-w-[160px] md:max-w-[200px]"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

    </section>
  );
}