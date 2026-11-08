"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Reveal from "./Reveal";

const designWorks = [
  { image: "/designworks/p.jpg", title: "Design 1" },
  { image: "/designworks/4.jpg", title: "Design 2" },
  { image: "/designworks/2.jpg", title: "Design 3" },
  { image: "/designworks/6.jpg", title: "Design 4" },
  { image: "/designworks/3.jpg", title: "Design 5" },
];

function DesignWorks() {
  const [activeIndex, setActiveIndex] = useState(null);
  const triggerRefs = useRef([]);
  const lastTriggerIndex = useRef(0);
  const closeButtonRef = useRef(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(
    () =>
      setActiveIndex((index) =>
        index === null ? index : (index - 1 + designWorks.length) % designWorks.length
      ),
    []
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((index) =>
        index === null ? index : (index + 1) % designWorks.length
      ),
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRefs.current[lastTriggerIndex.current]?.focus();
    };
  }, [isOpen, close, showPrevious, showNext]);

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-28" id="design-works">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-2xl sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Beyond the code
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            Design explorations
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A few visual ideas and creative projects from my design practice.
            Tap any piece to view it larger.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {designWorks.map((design, index) => (
            <Reveal key={design.image} delay={index * 80}>
              <button
                type="button"
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                onClick={() => {
                  lastTriggerIndex.current = index;
                  setActiveIndex(index);
                }}
                aria-label={`View ${design.title} larger`}
                className="glass glass-interactive sq-lg group relative block aspect-[4/5] w-full p-1.5 text-left hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                <span className="sq-md relative block h-full w-full overflow-hidden bg-slate-900">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#080b12]/80 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                <span className="glass-strong sq-sm absolute inset-x-2.5 bottom-2.5 flex translate-y-1 items-center justify-between px-3.5 py-2.5 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {design.title}
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${designWorks[activeIndex].title}, image ${activeIndex + 1} of ${designWorks.length}`}
          className="animate-fade-in-fast fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            ref={closeButtonRef}
            onClick={close}
            aria-label="Close image viewer"
            className="glass-strong sq-sm absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="glass-strong sq-sm absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="glass-strong sq-sm absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <figure
            className="relative h-[78vh] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={designWorks[activeIndex].image}
              src={designWorks[activeIndex].image}
              alt={designWorks[activeIndex].title}
              fill
              sizes="(max-width: 768px) 92vw, 768px"
              className="animate-fade-in-fast sq-lg object-contain"
            />
            <figcaption className="glass-strong absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 text-sm text-slate-200">
              {designWorks[activeIndex].title} · {activeIndex + 1} /{" "}
              {designWorks.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default DesignWorks;
