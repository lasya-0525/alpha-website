"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/utils";

const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1600&q=80",
];

export function GalleryParallax({ className }: { className?: string }) {
  return (
    <section className={cn("bg-white py-16 px-4", className)}>
      <div className="mx-auto mb-10 max-w-6xl space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#af2324]">Parallax Gallery</p>
        <h2 className="text-3xl font-serif font-bold text-gray-900">Layered Motion Grid</h2>
        <p className="text-sm text-gray-600">
          Scroll to see columns drift at different speeds for a subtle depth effect.
        </p>
      </div>
      <ParallaxScroll images={images} />
    </section>
  );
}


