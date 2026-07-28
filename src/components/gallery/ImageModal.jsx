"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ImageModal({ selectedImage, onClose }) {
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
        >
          <X size={24} />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 flex flex-col"
        >
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
            <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{selectedImage.category}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
