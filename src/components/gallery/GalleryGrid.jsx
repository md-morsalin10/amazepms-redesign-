"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi2";
import ImageModal from "./ImageModal";

// Updated with verified working Unsplash image URLs
const galleryImages = [
  { id: 1, title: "Corporate Office Operations", category: "Facility Management", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "Staff Training Session", category: "Training", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, title: "Professional Housekeeping", category: "Housekeeping", url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "Advanced Security Systems", category: "Security", url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, title: "Technical Support & MEP", category: "Technical", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, title: "Client Interaction & Help Desk", category: "Support", url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, title: "Facade Cleaning Operations", category: "Maintenance", url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, title: "Modern Workspace Environment", category: "Facility Management", url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Moments of Excellence
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Explore our diverse range of services, dedicated teams, and operational highlights across various portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Main Card Container with Floating & Glow Hover */}
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-slate-200 dark:bg-slate-800 shadow-sm transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 border border-slate-200/60 dark:border-slate-800/60 group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50">
                  
                  {/* Image Zoom Effect */}
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    
                    {/* Top Right Zoom Icon Indicator */}
                    <div className="self-end translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg">
                        <HiOutlineEye className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Bottom Animated Text Content */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 px-2.5 py-1 rounded-md bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg leading-snug line-clamp-2 mt-1 drop-shadow-sm">
                        {image.title}
                      </h3>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Render Modal conditionally */}
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}