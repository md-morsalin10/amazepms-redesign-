'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// React Icons
import { 
  HiMiniBuildingOffice2, 
  HiMiniShieldCheck, 
  HiMiniTruck, 
  HiMiniPhone,
  HiMiniWrenchScrewdriver,
  HiMiniSparkles,
  HiMiniHome,
  HiMiniSun
} from 'react-icons/hi2';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Integrated Property Management',
    highlight: 'Solutions Pvt Ltd',
    subtitle: 'A one stop solution for all your comprehensive property management and facility needs.',
    badge: 'Premier Facility Solutions',
    icon: HiMiniBuildingOffice2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
    stats: '500+ Properties Managed',
  },
  {
    id: 2,
    title: 'Professional Mechanical &',
    highlight: 'Technical Services',
    subtitle: 'Expert MEP (Mechanical, Electrical, Plumbing) operations ensuring zero downtime for your facilities.',
    badge: 'Technical Excellence',
    icon: HiMiniWrenchScrewdriver,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1920&auto=format&fit=crop',
    stats: '24/7 Technical Support',
  },
  {
    id: 3,
    title: 'Manned & Modern',
    highlight: 'Security Services',
    subtitle: 'Trained personnel and advanced surveillance integration for maximum safety and asset protection.',
    badge: 'Safety & Protection',
    icon: HiMiniShieldCheck,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1920&auto=format&fit=crop',
    stats: '100% Guarded Premises',
  },
  {
    id: 4,
    title: 'Corporate & Industrial',
    highlight: 'Housekeeping Services',
    subtitle: 'Comprehensive hygiene standards, deep cleaning, and waste management for commercial spaces.',
    badge: 'Hygiene & Cleanliness',
    icon: HiMiniSparkles,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop',
    stats: 'Top Quality Cleaning',
  },
  {
    id: 5,
    title: 'Professional Eco-Friendly',
    highlight: 'Landscaping Services',
    subtitle: 'Creating and maintaining pristine green spaces, lawn care, and horticulture solutions.',
    badge: 'Green Environment',
    icon: HiMiniSun,
    // FIXED: Updated 5th Slide Working High-Res Image
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1920&auto=format&fit=crop',
    stats: 'Sustainable Living',
  },
  {
    id: 6,
    title: 'Eco-Safe Advanced',
    highlight: 'Pest Control Services',
    subtitle: 'Safe, non-toxic, and efficient pest management tailored for residential and corporate sectors.',
    badge: 'Safe & Non-Toxic',
    icon: HiMiniHome,
    image: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=1920&auto=format&fit=crop',
    stats: '100% Guaranteed Hygiene',
  },
  {
    id: 7,
    title: '24/7 Dedicated',
    highlight: 'Help Desk Services',
    subtitle: 'Instant tenant assistance, issue tracking, and priority resolution desk for property occupants.',
    badge: 'Uninterrupted Support',
    icon: HiMiniPhone,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop',
    stats: '< 15 Mins Response',
  },
  {
    id: 8,
    title: 'Smart Automated',
    highlight: 'Parking Management',
    subtitle: 'Optimizing space utilization, traffic control systems, and automated boom barrier entry solutions.',
    badge: 'Smart Operations',
    icon: HiMiniTruck,
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1920&auto=format&fit=crop',
    stats: '99.9% Traffic Efficiency',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  return (
    <section className="relative w-full min-h-[85vh] lg:h-[calc(100vh-80px)] overflow-hidden text-white flex items-center justify-center">
      
      {/* 📹 Background Video/Image Slider Setup */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay for clean contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 📌 Floating Social Links */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
        {[
          { icon: FaFacebookF, href: '#', label: 'Facebook' },
          { icon: FaInstagram, href: '#', label: 'Instagram' },
          { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.15, x: 5 }}
              className="p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              aria-label={item.label}
            >
              {Icon && <Icon className="h-4 w-4" />}
            </motion.a>
          );
        })}
      </div>

      {/* 📝 Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:border-blue-400 hover:bg-white/20 transition-all duration-300 cursor-default">
                {IconComponent && <IconComponent className="h-4 w-4 text-blue-400 animate-pulse" />}
                <span>{slide.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                {slide.title} <br />
                <span className="text-blue-400">
                  {slide.highlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-gray-200 max-w-xl font-medium leading-relaxed drop-shadow">
                {slide.subtitle}
              </p>

              {/* Buttons with Premium Hover Effects */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                
                {/* Primary Action Button */}
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href="#services"
                  className="group relative overflow-hidden px-7 py-3.5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_auto] hover:bg-right text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700"
                >
                  <span className="relative z-10">Explore Service</span>
                  <FiArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
                </motion.a>

                {/* Secondary Badge/Button */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="cursor-default px-5 py-3.5 inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-xs sm:text-sm text-white font-semibold shadow-sm hover:border-blue-400/60 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="animate-bounce">🔥</span>
                  <span className="text-blue-300 font-bold group-hover:text-blue-200">
                    {slide.stats}
                  </span>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* 🎛️ Navigation Controls */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-4">
        
        {/* Prev Arrow Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-3.5 rounded-full border border-white/20 bg-black/30 text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-md"
        >
          <FiChevronLeft className="h-5 w-5" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? 'w-8 bg-blue-500 shadow-md shadow-blue-500/50'
                  : 'w-2 bg-white/40 hover:bg-white/80 hover:w-4'
              }`}
            />
          ))}
        </div>

        {/* Next Arrow Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-3.5 rounded-full border border-white/20 bg-black/30 text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-md"
        >
          <FiChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

    </section>
  );
}