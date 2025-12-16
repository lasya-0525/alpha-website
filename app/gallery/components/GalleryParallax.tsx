"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

// --- Types & Interfaces ---
interface ImageItem {
  src: string;
  alt: string;
}

// --- Gallery Images ---
const GALLERY_IMAGES = [
  "/gallery/0Z0A3048.JPG",
  "/gallery/0Z0A2863.JPG",
  "/gallery/0Z0A2192.png",
  "/gallery/0Z0A2070.JPG",
  "/gallery/0K6A8206.JPG",
  "/gallery/0B4A0588.JPG",
  "/gallery/0B4A0565.JPG",
  "/gallery/0B4A0365.JPG",
  "/gallery/0B4A0194.JPG",
  "/gallery scroll images/DSC01118.JPG",
  "/gallery scroll images/8K6A1522.JPG",
  "/gallery scroll images/0Z0A3082.JPG",
  "/gallery scroll images/0Z0A2873.JPG",
  "/gallery scroll images/gallery-1.JPG",
  "/gallery scroll images/gallery-2.jpg",
];

// Helper Functions
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- Sub-Component: The Image Card (Clean and Formal) ---
const GalleryCard = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  return (
    <div 
      className="group relative w-full break-inside-avoid mb-8 transition-all duration-300 ease-out hover:z-20 hover:scale-[1.02] hover:cursor-pointer"
    >
      {/* Frame / Border: Clean, thin border with subtle shadow */}
      <div className="relative bg-white border border-gray-100 p-1 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-gray-300/50">
        <div className="overflow-hidden aspect-[4/3] relative bg-gray-100">
           <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            // Fallback for image loading error using a placeholder pattern
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null; 
              (e.target as HTMLImageElement).src = `https://placehold.co/600x450/e0e0e0/555555?text=Frame%20${index + 1}`;
            }}
          />
        </div>
      </div>
      
      {/* Formal Caption */}
       <p className="mt-4 text-left text-xs text-gray-500 font-sans tracking-wide uppercase">
          Archive Reference: <span className="text-gray-900 font-medium">#{index + 1}</span>
      </p>
    </div>
  );
};

// --- Main Component ---
export function GalleryParallax() {
  // Split images into 3 columns
  const [columns, setColumns] = useState<ImageItem[][]>([[], [], []]);
  
  // Parallax State
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Process images into columns
    const cols: ImageItem[][] = [[], [], []];
    GALLERY_IMAGES.forEach((src, i) => {
      cols[i % 3].push({
        src,
        alt: `Corporate Visual Archive image ${i + 1}`,
      });
    });
    setColumns(cols);
    
    // Scroll listener for parallax
    const handleScroll = () => {
      if (containerRef.current) {
        const offset = window.scrollY;
        setScrollY(offset);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white py-20 px-4 md:px-8 font-sans"
    >
      {/* Background Pattern for subtle depth */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#f3f4f6 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />
      
      {/* Header Content (Formal and Clear) */}
      <div className="relative z-10 mx-auto mb-20 max-w-4xl text-center">
        <div className="inline-flex items-center justify-center space-x-2 mb-4">
          <span className="h-px w-8 bg-gray-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-700">
            Corporate Visual Archive
          </p>
          <span className="h-px w-8 bg-gray-500" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Operational <span className="text-[#af2324]">Highlights</span>
        </h2>
        
        <p className="mx-auto max-w-lg text-base text-gray-600 leading-relaxed">
          Showcasing key moments and achievements from our recent projects and operational milestones. Scroll down for a layered exploration of our journey.
        </p>
        <div className="mt-8 flex justify-center opacity-60">
          <ArrowDown className="w-5 h-5 text-gray-500 animate-pulse" />
        </div>
      </div>
      
      {/* Parallax Grid - Reduced gap from gap-8/12 to gap-4/6 */}
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          
          {/* Column 1: Very Slow Speed - Reduced vertical gap from gap-12 to gap-8 */}
          <div 
            className="flex flex-col gap-8"
            style={{ transform: `translateY(-${scrollY * 0.08}px)` }} // Very subtle movement
          >
            {columns[0].map((img, idx) => (
              <GalleryCard key={`col1-${idx}`} src={img.src} alt={img.alt} index={idx * 3} />
            ))}
          </div>
          
          {/* Column 2: Medium-Fast Speed - Reduced vertical gap from gap-12 to gap-8 */}
          <div 
            className="flex flex-col gap-8" 
            style={{ transform: `translateY(-${scrollY * 0.2}px)` }} // Faster movement for background depth
          >
            {columns[1].map((img, idx) => (
              <GalleryCard key={`col2-${idx}`} src={img.src} alt={img.alt} index={idx * 3 + 1} />
            ))}
          </div>
          
          {/* Column 3: Slow-Medium Speed - Reduced vertical gap from gap-12 to gap-8 */}
          <div 
            className="flex flex-col gap-8" 
            style={{ transform: `translateY(-${scrollY * 0.12}px)` }} // Moderate movement
          >
            {columns[2].map((img, idx) => (
              <GalleryCard key={`col3-${idx}`} src={img.src} alt={img.alt} index={idx * 3 + 2} />
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Decorative Blur at bottom to fade out */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
}
