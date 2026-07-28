'use client';

import Marquee from 'react-fast-marquee';

const partnerLogos = [
  { id: 1, name: 'Hill Country', logo: 'https://www.amazepms.com/assets/client14.png' },
  { id: 2, name: 'Sri Sairam Towers', logo: 'https://www.amazepms.com/assets/client5.png' },
  { id: 3, name: 'Lodha', logo: 'https://www.amazepms.com/assets/client6.png' },
  { id: 4, name: 'Olivia', logo: 'https://www.amazepms.com/assets/client7.jpg' },
  { id: 5, name: 'Jill', logo: 'https://www.amazepms.com/assets/client9.png' },
  { id: 6, name: 'Asvita', logo: 'https://www.amazepms.com/assets/client10.png' },
  { id: 7, name: 'CBRE', logo: 'https://www.amazepms.com/assets/client11.png' },
  { id: 8, name: 'Golf view', logo: 'https://www.amazepms.com/assets/client12.png' },
  { id: 9, name: 'Kalfa Taru', logo: 'https://www.amazepms.com/assets/client13.png' },
];

export default function PartnerLogos() {
  return (
    <section className="relative w-full bg-white py-12 border-y border-slate-100 overflow-hidden dark:bg-slate-900 dark:border-slate-800">
      
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center sm:text-left">
        <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          Trusted by <span className="text-blue-600 font-bold">200+</span> valued partners around India
        </p>
      </div>

      {/* Pure White Gradient Marquee */}
      <Marquee
        gradient={true}
        gradientColor="rgb(255, 255, 255)"
        gradientWidth={80}
        speed={45}
        pauseOnHover={true}
      >
        <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer min-w-[140px] dark:bg-slate-800 dark:border-slate-700"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 sm:h-12 w-auto object-contain max-w-[140px] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </Marquee>

    </section>
  );
}