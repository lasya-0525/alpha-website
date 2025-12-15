"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/hero-1.JPG", "/hero-2.JPG"];
  const captions = [
    "WHERE VISIONARIES ALIGN GLOBALLY.",
    "GLOBAL GROUND FOR VISIONARY MINDS."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <DirectionAwareHover
            imageUrl={images[currentImage]}
            className="h-full w-full rounded-none"
            childrenClassName="text-white"
          >
            <div className="flex flex-col items-center justify-center text-center w-full max-w-full px-4">
              <p className="font-bodoni font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-center whitespace-normal break-words">
                {captions[currentImage]}
              </p>
            </div>
          </DirectionAwareHover>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

