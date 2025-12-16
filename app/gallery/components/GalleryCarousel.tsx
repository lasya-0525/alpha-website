"use client";

import { AlphaCarousel } from "@/components/ui/alpha-carousel";

const carouselSlides = [
  {
    title: "Alpha Circle – Heritage",
    button: "Explore",
    src: "/hero-1.JPG",
  },
  {
    title: "Alpha Circle – Vision",
    button: "Explore",
    src: "/hero-2.JPG",
  },
  {
    title: "Leadership",
    button: "Meet the Founder",
    src: "/founder.JPG",
  },
  {
    title: "Global Presence",
    button: "Our Circles",
    src: "/gallery/0K6A8206.JPG",
  },
];

export function GalleryCarousel() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#af2324]">Carousel</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Signature Moments</h2>
          <p className="text-sm text-gray-600">
            Swipe through featured Alpha visuals below the marquee.
          </p>
        </div>
        <div className="flex justify-center">
          <AlphaCarousel slides={carouselSlides} />
        </div>
      </div>
    </section>
  );
}


