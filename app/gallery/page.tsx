"use client";

import { AlphaCarousel } from "@/components/ui/alpha-carousel";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const marqueeImages = [
  "/gallery/DSC01118.JPG",
  "/gallery/8K6A1522.JPG",
  "/gallery/0Z0A3082.JPG",
  "/gallery/0Z0A2873.JPG",
  "/gallery/0Z0A2863.JPG",
  "/gallery/0Z0A2070.JPG",
];

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

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-20 px-4 text-white">
        <div className="relative z-10 mx-auto max-w-4xl space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb3b3]">
            Gallery
          </p>
          <h1 className="text-4xl font-serif font-bold leading-tight md:text-5xl lg:text-6xl">
            One Immersive Marquee
          </h1>
          <p className="text-base text-white/75 md:text-lg">
            A single, continuous 3D marquee showcasing the Alpha gallery set.
          </p>
        </div>

        <div className="relative z-10 mt-12 w-full max-w-7xl">
          <ThreeDMarquee images={marqueeImages} speedSeconds={30} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </section>

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
    </main>
  );
}




