"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Reveal from "./Reveal";
import {
  ArrowDown,
  ArrowDownToLine,
  Boxes,
  GraduationCap,
  Lightbulb,
  Zap,
} from "lucide-react";

const strengths = [
  { label: "Problem solver", Icon: Lightbulb },
  { label: "Systems thinker", Icon: Boxes },
  { label: "Fast learner", Icon: Zap },
];

function About() {
  return (
    <div className="text-white">
      <Head>
        <title>Minhaj KC | CTO & Full-Stack Engineer (MERN)</title>
        <meta
          name="description"
          content="Learn about Minhaj KC, a CTO and Full-Stack Engineer specializing in MERN, Firebase, scalable system design, and startup product development."
        />
        <meta
          name="keywords"
          content="Minhaj KC, CTO, Full Stack Engineer, MERN Stack Developer, Product Architect, Startup Engineer, System Design"
        />
        <meta name="author" content="Minhaj KC" />
        <meta
          property="og:title"
          content="Minhaj KC | CTO & Full-Stack Engineer"
        />
        <meta
          property="og:description"
          content="CTO and Full-Stack Engineer experienced in building scalable web platforms, leading products from idea to deployment."
        />
        <meta property="og:image" content="/images/Minhajreal.png" />
        <meta property="og:url" content="https://minhajkc.vercel.app/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section
        className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
        id="about"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-2xl sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              A little about me
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              The person behind
              <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                {" "}
                the products.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              I bring product thinking and engineering together to build
              software that works in the real world.
            </p>
          </Reveal>

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <Reveal className="glass sq-xl group flex p-2">
              <div className="sq-lg relative min-h-[24rem] flex-1 overflow-hidden bg-slate-900 sm:min-h-[32rem]">
              <Image
                src="/images/Minhajreal.png"
                alt="Muhammed Minhaj KC"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover object-[center_22%] grayscale-[35%] transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/80 via-transparent to-transparent" />
              <div className="glass-strong sq-md absolute inset-x-3 bottom-3 p-4 sm:inset-x-4 sm:bottom-4 sm:p-5">
                <p className="text-sm font-medium text-slate-300">
                  Full-Stack Engineer
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  Minhaj KC
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Kozhikode, Kerala, India
                </p>
              </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="glass sq-xl flex flex-col p-6 sm:p-9 lg:p-10">
              <div className="space-y-5 text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8">
                <p>
                  I&apos;m a{" "}
                  <span className="font-semibold text-blue-200">
                    Full-Stack Engineer
                  </span>{" "}
                  with 3+ years of experience building scalable web
                  applications using React.js, Next.js, Node.js, Express.js,
                  MongoDB, Firebase, and AWS.
                </p>
                <p>
                  My work focuses on{" "}
                  <span className="font-medium text-slate-200">
                    system design, product architecture, and startup execution
                  </span>
                  . I&apos;ve led products end-to-end—from idea validation and
                  technical planning to development and deployment—with an
                  emphasis on scalability, performance, and real business
                  impact.
                </p>
              </div>

              <div className="my-7 h-px bg-white/10 sm:my-8" />

              <div className="glass-subtle sq-md flex items-start gap-4 p-4 sm:p-5">
                <div className="glass-subtle sq-sm flex h-11 w-11 shrink-0 items-center justify-center text-blue-300">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Education
                  </p>
                  <p className="mt-1 font-semibold text-slate-100">
                    Bachelor of Computer Applications
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    University of Calicut
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {strengths.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="glass-subtle inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-300/30 hover:text-white"
                  >
                    <Icon
                      className="h-4 w-4 text-blue-300"
                      aria-hidden="true"
                    />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="/cv/FullStack Engineer Minhaj Kc.pdf"
                  download
                  className="sq-md inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-400 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/40 ring-1 ring-inset ring-white/20 transition hover:-translate-y-0.5 hover:from-blue-300 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                  Download my CV
                </a>
              </div>
            </Reveal>
          </div>

          <a
            href="#Skills"
            aria-label="Scroll to skills section"
            className="mx-auto mt-12 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
          >
            What I bring
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
