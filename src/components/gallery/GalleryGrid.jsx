"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

// Using Unsplash placeholders for demonstration
const galleryImages = [
  { id: 1, title: "Corporate Office Operations", category: "Facility Management", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "Staff Training Session", category: "Training", url: "https://images.unsplash.com/photo-1515169065240-5201c109d7d4?q=80&w=1200&auto=format&fit=crop" },
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
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-slate-200 dark:bg-slate-800 shadow-sm group-hover:shadow-xl dark:shadow-none border border-slate-200/50 dark:border-slate-800/50 group-hover:border-blue-400/50 dark:group-hover:border-blue-500/50 transition-all duration-300">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">{image.category}</span>
                    <h3 className="text-white font-medium line-clamp-2">{image.title}</h3>
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
