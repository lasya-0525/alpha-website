"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ThreeDMarqueeProps = {
  images: string[];
  className?: string;
  speedSeconds?: number;
};

/**
 * A lightweight 3D-ish marquee that continuously scrolls images
 * left-to-right. Cards have a subtle perspective tilt on hover.
 */
export function ThreeDMarquee({
  images,
  className,
  speedSeconds = 28,
}: ThreeDMarqueeProps) {
  const loopImages = [...images, ...images]; // duplicate for seamless loop

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f0f0f] via-[#151515] to-[#0f0f0f] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        "backdrop-blur-sm",
        className
      )}
      style={{ perspective: "1200px" }}
    >
      <style>{`
        @keyframes marqueeX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent opacity-70" />

      <div
        className="flex w-[200%] items-center"
        style={{
          animation: `marqueeX ${speedSeconds}s linear infinite`,
        }}
      >
        {loopImages.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="relative mx-3 h-56 w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateY(-6deg)",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={src}
                alt="Marquee item"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 240px, 200px"
                unoptimized={src.startsWith("http")}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
}


