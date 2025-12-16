"use client";

import { GalleryMarquee } from "./components/GalleryMarquee";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { GalleryParallax } from "./components/GalleryParallax";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <GalleryMarquee />
      <GalleryCarousel />
      <GalleryParallax />
    </main>
  );
}




