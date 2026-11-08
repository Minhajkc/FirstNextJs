import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

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

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#Skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => (
  <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#080b12]/40 px-5 pb-7 pt-16 text-slate-400 backdrop-blur-xl sm:px-8 sm:pt-20">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -right-32 -top-56 h-[32rem] w-[48rem] rounded-full bg-blue-600/[0.08] blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
    </div>

    <div className="mx-auto max-w-7xl">
      <Reveal className="glass sq-xl flex flex-col justify-between gap-8 p-6 sm:p-9 md:flex-row md:items-center lg:p-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            Have something in mind?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-400">
            Have a product idea or a challenge to solve? I&apos;m always glad to
            connect and talk through what&apos;s possible.
          </p>
        </div>
        <Link
          href="/#contact"
          className="group sq-md inline-flex w-fit shrink-0 items-center justify-center gap-2 bg-gradient-to-br from-blue-400 to-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/40 ring-1 ring-inset ring-white/20 transition hover:-translate-y-0.5 hover:from-blue-300 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </Reveal>

      <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.7fr_0.9fr] md:py-14">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Link href="/#home" aria-label="Minhaj KC home">
            <Image
              src="/images/Logo.png"
              alt="Minhaj KC"
              width={144}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm font-medium text-slate-200">
            Full-Stack Engineer (MERN)
          </p>
          <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
            Building scalable web platforms and thoughtful digital products.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center gap-3 md:items-start"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Explore
          </p>
          {footerLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Find me online
          </p>
          <nav aria-label="Social links" className="flex flex-wrap justify-center gap-2 md:justify-start">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-subtle sq-sm inline-flex h-10 w-10 items-center justify-center text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-300/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
          <a
            href="mailto:Minhajvvo@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-white"
          >
            Minhajvvo@gmail.com
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Muhammed Minhaj KC. All rights reserved.
        </p>
        <a
          href="tel:+917034936080"
          className="transition hover:text-slate-300"
        >
          +91 70349 36080
        </a>
        <p>Designed and built with care.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
