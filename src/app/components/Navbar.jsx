"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUp,
  Briefcase,
  Home,
  Info,
  Medal,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const navLinks = [
  { href: "/#home", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: Info },
  { href: "/#Skills", label: "Skills", icon: Briefcase },
  { href: "/#achievements", label: "Achievements", icon: Medal },
  { href: "/#contact", label: "Contact", icon: Phone },
  {
    href: "https://github.com/Minhajkc?tab=repositories",
    label: "Explore GitHub",
    icon: FaGithub,
    external: true,
  },
];

const sectionIds = [
  "home",
  "about",
  "Skills",
  "projects",
  "design-works",
  "achievements",
  "contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const sidebarRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let frame = 0;
    let topButtonVisible = false;
    const update = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        progressRef.current.style.transform = `scaleX(${Math.max(0, Math.min(1, progress))})`;
      }
      const shouldShowTop = window.scrollY > 700;
      if (shouldShowTop !== topButtonVisible) {
        topButtonVisible = shouldShowTop;
        setShowTop(shouldShowTop);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      >
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "instant"
              : "smooth",
          })
        }
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        className={`glass-strong sq-md fixed bottom-24 right-5 z-20 inline-flex h-11 w-11 items-center justify-center text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:bottom-28 sm:right-7 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        className="glass-strong sq-md fixed left-5 top-5 z-40 inline-flex h-12 w-12 items-center justify-center text-white transition hover:-translate-y-0.5 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:left-7 sm:top-7"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        className={`fixed inset-0 z-50 transition ${
          isOpen
            ? "pointer-events-auto bg-black/70"
            : "pointer-events-none bg-transparent"
        }`}
        aria-hidden={!isOpen}
        aria-label="Site navigation"
        aria-modal={isOpen}
        role="dialog"
        inert={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <nav
          ref={sidebarRef}
          id="site-navigation"
          aria-label="Main navigation"
          className={`glass-strong sq-xl absolute inset-y-3 left-3 flex w-[min(21rem,calc(100vw-1.5rem))] flex-col p-6 transition-transform duration-300 ease-out sm:p-8 ${
            isOpen ? "translate-x-0" : "-translate-x-[110%]"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/#home"
              onClick={() => setIsOpen(false)}
              aria-label="Minhaj KC home"
            >
              <Image
                src="/images/Logo.png"
                alt="Minhaj KC"
                width={144}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="glass-subtle sq-sm inline-flex h-10 w-10 items-center justify-center text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mb-4 mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Navigate
          </p>
          <div className="space-y-1">
            {navLinks.map(({ href, label, icon: Icon, external }) => {
              const isActive = !external && href.endsWith(`#${activeId}`);
              return (
                <Link
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`sq-md group relative flex items-center gap-4 px-4 py-3.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 ${
                    isActive
                      ? "glass-subtle text-white"
                      : "border border-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-3 left-0 w-0.5 rounded-full bg-blue-400"
                    />
                  )}
                  <Icon
                    className={`h-5 w-5 transition ${
                      isActive
                        ? "text-blue-300"
                        : "text-slate-500 group-hover:text-blue-300"
                    }`}
                  />
                  <span className="font-medium">{label}</span>
                </Link>
              );
            })}
          </div>

          <div className="glass-subtle sq-lg mt-auto p-5">
            <p className="text-sm font-semibold text-white">Want to work together?</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Get in touch or take a look at my experience.
            </p>
            <a
              href="/cv/FullStack Engineer Minhaj Kc.pdf"
              download
              className="sq-sm mt-4 inline-flex items-center gap-2 bg-gradient-to-br from-blue-400 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 ring-1 ring-inset ring-white/20 transition hover:from-blue-300 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
