"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const roles = [
  "Full-Stack Engineer (MERN)",
  "Product Architect & System Designer",
  "Startup & SaaS Platform Builder",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/minhajkc", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minhaj-kc-a7b118308",
    Icon: FaLinkedin,
  },
  { label: "X", href: "https://twitter.com/minhaj_kc", Icon: FaXTwitter },
  {
    label: "Instagram",
    href: "https://instagram.com/minhaj.kc",
    Icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/muhammedminhaj.kc",
    Icon: FaFacebook,
  },
  { label: "Telegram", href: "https://telegram.me/Minhajkc", Icon: FaTelegram },
];

const codeLines = [
  [
    { text: "const ", className: "text-violet-300" },
    { text: "buildProduct", className: "text-blue-200" },
    { text: " = ", className: "text-slate-400" },
    { text: "async ", className: "text-violet-300" },
    { text: "() => {", className: "text-slate-300" },
  ],
  [
    { text: "  const ", className: "text-violet-300" },
    { text: "app", className: "text-sky-200" },
    { text: " = ", className: "text-slate-400" },
    { text: "createApp", className: "text-amber-200" },
    { text: "({", className: "text-slate-300" },
  ],
  [
    { text: '    frontend: ', className: "text-slate-300" },
    { text: '"Next.js"', className: "text-emerald-300" },
    { text: ",", className: "text-slate-400" },
  ],
  [
    { text: '    backend: ', className: "text-slate-300" },
    { text: '"Node.js"', className: "text-emerald-300" },
    { text: ",", className: "text-slate-400" },
  ],
  [
    { text: '    database: ', className: "text-slate-300" },
    { text: '"MongoDB"', className: "text-emerald-300" },
  ],
  [{ text: "  });", className: "text-slate-300" }],
  [
    { text: "  await ", className: "text-violet-300" },
    { text: "app", className: "text-sky-200" },
    { text: ".", className: "text-slate-400" },
    { text: "deploy", className: "text-amber-200" },
    { text: "();", className: "text-slate-300" },
  ],
  [{ text: "};", className: "text-slate-300" }],
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");
  const roleTimeout = useRef(null);
  const tiltRef = useRef(null);

  const handleTilt = (event) => {
    const node = tiltRef.current;
    if (
      !node ||
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0");
      roleTimeout.current = setTimeout(() => {
        setCurrentRoleIndex((index) => (index + 1) % roles.length);
        setFadeClass("opacity-100");
      }, 250);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(roleTimeout.current);
    };
  }, []);

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-28 text-white sm:px-8 sm:pt-32 lg:flex lg:items-center lg:pb-24"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <a
        href="https://wa.me/917034936080"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Minhaj on WhatsApp"
        className="glass-strong sq-md fixed bottom-5 right-5 z-20 inline-flex items-center gap-2 !border-emerald-300/25 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:-translate-y-1 hover:!border-emerald-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:bottom-7 sm:right-7"
      >
        <FaWhatsapp className="h-5 w-5" />
        <span>Let&apos;s talk</span>
      </a>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="relative z-10 max-w-2xl">
          <div
            style={{ animationDelay: "0ms" }}
            className="animate-rise glass-subtle mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-slate-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for select projects
          </div>

          <p
            style={{ animationDelay: "80ms" }}
            className="animate-rise mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300"
          >
            Hello, I&apos;m
          </p>
          <h1
            style={{ animationDelay: "160ms" }}
            className="animate-rise text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
          >
            Minhaj
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              KC<span className="text-white">.</span>
            </span>
          </h1>

          <p
            aria-live="polite"
            style={{ animationDelay: "240ms" }}
            className={`animate-rise mt-6 min-h-8 text-lg font-medium text-slate-200 transition-opacity duration-300 sm:text-xl ${fadeClass}`}
          >
            {roles[currentRoleIndex]}
          </p>
          <p
            style={{ animationDelay: "320ms" }}
            className="animate-rise mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            I design, build, and scale{" "}
            <span className="text-slate-200">production-ready web platforms</span>{" "}
            with MERN, Firebase, and cloud-native tools—turning ambitious ideas
            into thoughtful, reliable products.
          </p>

          <div
            style={{ animationDelay: "400ms" }}
            className="animate-rise mt-8 flex flex-wrap gap-2.5 text-xs font-medium text-slate-300 sm:text-sm"
          >
            {["MERN stack", "Next.js", "Firebase", "System design"].map(
              (skill) => (
                <span
                  key={skill}
                  className="glass-subtle rounded-full px-3.5 py-2 transition hover:-translate-y-0.5 hover:border-blue-300/30 hover:text-white"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div
            style={{ animationDelay: "480ms" }}
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="sq-md inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-400 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/50 ring-1 ring-inset ring-white/20 transition hover:-translate-y-0.5 hover:from-blue-300 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="glass sq-md inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore my work
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div
            style={{ animationDelay: "560ms" }}
            className="animate-rise mt-10 flex items-center gap-5"
          >
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Find me on
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-white/15" />
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-subtle sq-sm inline-flex h-10 w-10 items-center justify-center text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-300/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{ animationDelay: "250ms" }}
          onPointerMove={handleTilt}
          onPointerLeave={resetTilt}
          className="animate-rise relative mx-auto w-full max-w-[27rem] lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-5 sq-xl bg-gradient-to-br from-blue-500/25 via-indigo-500/5 to-violet-500/25 blur-2xl"
          />
          <div
            ref={tiltRef}
            role="img"
            aria-label="Illustration of a web application being built with Next.js, Node.js, and MongoDB"
            className="glass sq-xl relative min-h-[38rem] overflow-hidden transition-transform duration-200 ease-out will-change-transform"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-violet-500/10 blur-[90px]"
            />

            <div className="absolute inset-0 flex flex-col p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="glass-subtle sq-sm flex h-9 w-9 items-center justify-center text-blue-200">
                    <Terminal className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-slate-200">
                      Minhaj&apos;s workspace
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      PRODUCT_ENGINEERING
                    </p>
                  </div>
                </div>
                <span className="glass-subtle inline-flex items-center gap-1.5 rounded-full !border-emerald-300/25 !bg-emerald-300/10 px-2.5 py-1.5 text-[10px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Building
                </span>
              </div>

              <div className="sq-lg mt-6 overflow-hidden border border-white/10 bg-[#05070c]/60 shadow-xl shadow-black/30 sm:mt-8">
                <div className="flex h-11 items-center justify-between border-b border-white/[0.08] px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <Code2 className="h-3 w-3" />
                    platform.ts
                  </span>
                  <span className="w-8" />
                </div>

                <div className="space-y-2 px-3 py-4 font-mono text-[10px] leading-4 sm:px-5 sm:py-5 sm:text-xs">
                  {codeLines.map((line, index) => (
                    <div key={index} className="flex min-w-0">
                      <span className="mr-4 w-4 shrink-0 select-none text-right text-slate-600">
                        {index + 1}
                      </span>
                      <code className="truncate">
                        {line.map((part, partIndex) => (
                          <span key={partIndex} className={part.className}>
                            {part.text}
                          </span>
                        ))}
                        {index === codeLines.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="animate-blink ml-1 inline-block h-3 w-1.5 bg-blue-300 align-middle"
                          />
                        )}
                      </code>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Braces className="h-3 w-3 text-blue-300" />
                    TypeScript
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {[
                  { label: "Frontend", value: "Next.js", Icon: Layers3 },
                  { label: "Backend", value: "Node.js", Icon: Server },
                  { label: "Database", value: "MongoDB", Icon: Database },
                ].map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="glass-subtle sq-md min-w-0 p-3"
                  >
                    <Icon className="h-4 w-4 text-blue-300" />
                    <p className="mt-3 truncate text-[10px] text-slate-500">
                      {label}
                    </p>
                    <p className="mt-0.5 truncate text-xs font-medium text-slate-200">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pb-6 pt-5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Globe2 className="h-4 w-4 text-violet-300" />
                  From idea to production
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Ready to scale</span>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-strong sq-md animate-float absolute -bottom-9 left-6 px-4 py-3 sm:px-5">
            <p className="flex items-center gap-2 text-xs text-slate-400">
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              Focused on
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Products that scale
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300 lg:flex"
      >
        Scroll to explore
        <ArrowDown className="h-3.5 w-3.5" />
      </a>
    </section>
  );
};

export default HeroSection;
