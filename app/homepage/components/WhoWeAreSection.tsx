"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hasScrollLocked, setHasScrollLocked] = useState(false);
  const [autoOpenUntil, setAutoOpenUntil] = useState<number>(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax without hiding content
  const leftY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const leftOpacity = 1;
  const leftScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
  
  const rightY = useTransform(scrollYProgress, [0, 1], [140, 0]);
  const rightOpacity = 1;
  const rightScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  // Scroll lock + scroll-controlled auto-open:
  // When this section is mostly in view, lock body scroll and
  // use the user's scroll wheel to step through each dropdown.
  // After all are open, unlock scroll and move to the next section.
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || hasScrollLocked) return;

    let previousOverflow = document.body.style.overflow;
    let wheelAttached = false;
    let completed = false;

    const handleWheel = (event: WheelEvent) => {
      if (!sectionRef.current) return;
      if (event.deltaY === 0) return;

      // While locked, prevent page scroll
      event.preventDefault();

      // Scroll down: open next
      if (event.deltaY > 0) {
        setAutoOpenUntil((prev) => {
          const total = alphaItems.length;
          if (prev < total - 1) {
            return prev + 1;
          }

          // All open, allow transition to next section once
          if (!completed) {
            completed = true;
            const nextSection = sectionEl.nextElementSibling as HTMLElement | null;
            document.body.style.overflow = previousOverflow;
            if (wheelAttached) {
              window.removeEventListener("wheel", handleWheel);
              wheelAttached = false;
            }
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
          return prev;
        });
      } else if (event.deltaY < 0) {
        // Scroll up: optionally allow closing steps, but don't go below 0
        setAutoOpenUntil((prev) => Math.max(0, prev - 1));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || entry.intersectionRatio < 0.85) return;

        setHasScrollLocked(true);
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Start with first item open
        setAutoOpenUntil(0);

        window.addEventListener("wheel", handleWheel, { passive: false });
        wheelAttached = true;
      },
      {
        threshold: 0.85,
      }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
      if (wheelAttached) {
        window.removeEventListener("wheel", handleWheel);
      }
      document.body.style.overflow = previousOverflow;
    };
  }, [hasScrollLocked]);

  const alphaItems = [
    {
      letter: "A",
      title: "Authentic Relationships",
      description:
        "Genuine bonds rooted in trust, respect, and shared values.",
    },
    {
      letter: "L",
      title: "Legacy & Influence",
      description:
        "A platform to shape industries and inspire generations.",
    },
    {
      letter: "P",
      title: "Purposeful Stimulations",
      description:
        "Curated experiences and conversations that ignite curiosity and challenge perspectives.",
    },
    {
      letter: "H",
      title: "Holistic Intergenerational Growth",
      description:
        "Insights and exchanges that blend wisdom and fresh thinking across age groups.",
    },
    {
      letter: "A",
      title: "Aspirations & Individualism",
      description:
        "A space that honors your unique journey, ambitions, and identity.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-[70vh] bg-[#FAFAFA] py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-16 scroll-mt-24"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left Section - Who We Are */}
        <motion.div
          className="flex flex-col space-y-3"
          style={{ y: leftY, opacity: leftOpacity, scale: leftScale }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#af2324] leading-tight">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-gray-900 leading-relaxed font-sans">
            A Global Collective of Leaders and Legacy Builders. The Alpha Circle connects
            high-impact individuals from family businesses, emerging ventures, and top
            industrial circles — across sectors and borders.
          </p>
        </motion.div>

        {/* Right Section - The Alpha Advantage */}
        <motion.div
          className="flex flex-col space-y-2"
          style={{ y: rightY, opacity: rightOpacity, scale: rightScale }}
        >
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-2">
            The Alpha Advantage
          </h3>

          <div className="flex flex-col space-y-1.5">
            {alphaItems.map((item, index) => {
              const isOpen = index <= autoOpenUntil || openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-gray-100 rounded-lg px-2.5 py-2 md:px-3 md:py-2.5 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-900 font-bold text-base">
                      {isOpen ? "▼" : "►"}
                    </span>
                    <span className="text-gray-900 font-semibold text-sm md:text-base">
                      <span className="font-bold">{item.letter}</span> - {item.title}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 pl-7 pr-1 text-xs md:text-sm text-gray-700 leading-relaxed overflow-hidden"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

