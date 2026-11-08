import React from "react";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

const Achievements = () => (
  <section className="px-5 py-20 sm:px-8 sm:py-24" id="achievements">
    <div className="mx-auto max-w-7xl">
      <Reveal className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          Learning & growth
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
          Milestones worth sharing
        </h2>
      </Reveal>

      <Reveal delay={100}>
      <article className="glass glass-interactive sq-xl group grid p-2.5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="sq-lg relative min-h-64 overflow-hidden bg-slate-900 sm:min-h-80">
          <Image
            src="/images/achi.PNG"
            alt="Google Fundamentals of Digital Marketing certificate"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <span className="glass-subtle sq-md mb-6 inline-flex h-12 w-12 items-center justify-center text-blue-300">
            <BadgeCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="text-sm font-medium text-blue-300">
            Google Certification · 01 Nov 2020
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Fundamentals of Digital Marketing
          </h3>
          <p className="mt-4 leading-7 text-slate-400">
            Successfully completed the Google certification exam in the
            fundamentals of digital marketing.
          </p>
          <a
            href="/images/achi.PNG"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            View certificate
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>
      </Reveal>
    </div>
  </section>
);

export default Achievements;
