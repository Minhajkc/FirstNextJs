"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Reveal from "./Reveal";

const filters = ["All", "Next.js", "React", "Node.js", "Firebase"];
const INITIAL_MOBILE_COUNT = 6;

const projects = [
  {
    id: 9,
    title: "Wolff Global",
    image: "/images/Wolffglobal.png",
    description:
      "A professional corporate website built with Next.js, featuring responsive design, optimized performance, and modern UI components. It showcases the company's services, global presence, and business solutions.",
    link: "https://wolffglobal.ae",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    id: 7,
    title: "Ayadi School Website",
    image: "/images/ayadischool.png",
    description:
      "A full-fledged platform for online school management and admissions. Built with Next.js and Firebase, it allows parents to register students online and access course details.",
    link: "https://ayadischool.com",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Emadi Business School",
    image: "/images/Emadischool.png",
    description:
      "A modern educational platform built with Next.js, Ant Design, and Firebase. It features course management, student registration, and admin dashboards for smooth operations.",
    link: "https://emadibschool.com",
    technologies: ["Next.js", "Firebase", "Ant Design", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Eduprops E-Learning",
    image: "/images/Eduprops.png",
    description:
      "An e-learning web application built with React, MongoDB, Express, and Node. It features student, admin, and mentor interfaces for comprehensive education management.",
    link: "https://eduprops.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 1,
    title: "FruitBasket E-Commerce",
    image: "/images/Fruitbasket.png",
    description:
      "A lightweight, Node.js-powered platform for buying and selling fruits online. MongoDB and Handlebars.js come together for a seamless shopping experience.",
    link: "https://Fruitbasket.site",
    technologies: ["Node.js", "MongoDB", "Express", "HBS"],
  },
  {
    id: 3,
    title: "RestoHub Order-taking App",
    image: "/images/Restohub.png",
    description:
      "A restaurant management application designed to streamline operations between administrators, waiters, and chefs, with distinct functionality for each role.",
    link: "https://resto-hub.vercel.app/",
    technologies: ["React"],
  },
  {
    id: 4,
    title: "Sales Enterprise App",
    image: "/images/Enterprice.png",
    description:
      "A React application for managing product inventory, sales tracking, and revenue calculations, with distinct functionality for Admin and Salesman roles.",
    link: "https://sales-enterprise-app-react.vercel.app/",
    technologies: ["React"],
  },
  {
    id: 5,
    title: "Income and Expense Calculator",
    image: "/images/cal.png",
    description:
      "A simple web application to track and manage income and expenses, helping users monitor their financial activities with ease.",
    link: "https://minhajkc.github.io/Income-Expense-Calculator-using-js/",
    technologies: ["JavaScript"],
  },
  {
    id: 6,
    title: "Post Planner",
    image: "/images/pp.png",
    description:
      "A React application for scheduling and managing social media posts, helping users plan, organize, and track content.",
    link: "https://post-planner-using-react.vercel.app/",
    technologies: ["React"],
  },
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );
  const remainingProjectCount = Math.max(
    filteredProjects.length - INITIAL_MOBILE_COUNT,
    0
  );

  const countFor = (filter) =>
    filter === "All"
      ? projects.length
      : projects.filter((project) => project.technologies.includes(filter))
          .length;

  return (
  <section className="px-5 py-24 sm:px-8 sm:py-28" id="projects">
    <div className="mx-auto max-w-7xl">
      <Reveal className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Selected work
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            Projects I&apos;ve built
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A selection of products and platforms across education, commerce,
            hospitality, and more.
          </p>
        </div>
        <a
          href="https://github.com/Minhajkc?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-subtle sq-md inline-flex w-fit items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
        >
          <FaGithub className="h-4 w-4" />
          More on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>

      <div
        role="group"
        aria-label="Filter projects by technology"
        className="mb-8 flex flex-wrap gap-2 sm:mb-10"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setActiveFilter(filter);
                setShowAllProjects(false);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 ${
                isActive
                  ? "glass-subtle !border-blue-400/50 !bg-blue-500/20 text-blue-100 shadow-lg shadow-blue-950/30"
                  : "glass-subtle text-slate-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {filter}
              <span
                className={`rounded-full px-1.5 text-xs ${
                  isActive ? "bg-blue-400/20 text-blue-100" : "bg-white/5 text-slate-500"
                }`}
              >
                {countFor(filter)}
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={(index % 3) * 90}
            className={`h-full ${
              index >= INITIAL_MOBILE_COUNT && !showAllProjects
                ? "hidden md:block"
                : ""
            }`}
          >
          <article
            className="glass glass-interactive sq-lg group flex h-full flex-col overflow-hidden p-2.5 hover:-translate-y-1"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} project`}
              className="sq-md relative block aspect-[16/10] overflow-hidden bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"
            >
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/50 via-transparent to-transparent opacity-70" />
              <span className="glass-strong sq-xs absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center text-white opacity-0 transition group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="glass-subtle rounded-full px-2.5 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                View project
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      {!showAllProjects && remainingProjectCount > 0 && (
        <div className="mt-8 flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => setShowAllProjects(true)}
            aria-expanded={showAllProjects}
            className="glass-subtle sq-md inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-300/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            Load {remainingProjectCount} more{" "}
            {remainingProjectCount === 1 ? "project" : "projects"}
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  </section>
  );
};

export default Projects;
