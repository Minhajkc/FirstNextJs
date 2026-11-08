"use client";

import React from "react";
import {
  Cloud,
  Code2,
  Compass,
  Network,
  Server,
  Wrench,
} from "lucide-react";
import SkillCategory from "./SkillCategory";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend engineering",
    icon: Code2,
    skills: [
      "React.js (SPA Development)",
      "Next.js (SSR, App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5, CSS3, Media Queries",
      "Tailwind CSS, Bootstrap, Ant Design",
      "Redux, Redux Toolkit, Zustand",
      "React Router, React Hook Form",
      "Chart.js, React Beautiful DnD",
      "Vite, NPM",
    ],
  },
  {
    title: "Backend engineering",
    icon: Server,
    skills: [
      "Node.js, Express.js, NestJS",
      "REST API Design & Development",
      "MongoDB, PostgreSQL & SQL",
      "Database Schema Design",
      "MVC Architecture",
      "Authentication & Authorization (JWT)",
      "Firebase Authentication & Firestore",
      "Multer (File Uploads)",
      "Nodemailer (Email Services)",
      "Razorpay Payment Gateway Integration",
    ],
  },
  {
    title: "Cloud & deployment",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, IAM)",
      "AWS Route 53 (DNS Management)",
      "Nginx (Reverse Proxy & Server Setup)",
      "Vercel Deployment",
      "Linux Server Management",
      "Environment Configuration",
      "CI/CD Basics",
    ],
  },
  {
    title: "API, testing & tools",
    icon: Wrench,
    skills: [
      "Postman (API Testing)",
      "Swagger (API Documentation)",
      "Axios & Fetch API",
      "AJAX",
      "Git & GitHub",
      "Version Control & Branching",
      "Debugging & Performance Optimization",
    ],
  },
  {
    title: "System design & architecture",
    icon: Network,
    skills: [
      "Scalable Web Architecture",
      "Database Design & Normalization",
      "System Flowcharts & Technical Documentation",
      "Role-Based Access Control (RBAC)",
      "Secure Authentication Flows",
      "Multi-Service Platform Design",
    ],
  },
  {
    title: "Product & leadership",
    icon: Compass,
    skills: [
      "Agile SDLC (Scrum, Kanban)",
      "Project Planning & Execution",
      "Technical Leadership",
      "Startup Product Development",
      "Cross-Team Collaboration",
      "Problem Solving & Critical Thinking",
      "Data Structures & Algorithms",
    ],
  },
];

const Skills = () => (
  <section className="px-5 py-24 sm:px-8 sm:py-28" id="Skills">
    <div className="mx-auto max-w-7xl">
      <Reveal className="mb-12 max-w-2xl sm:mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          What I work with
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
          Skills &amp; expertise
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          The tools, practices, and product skills I use to take ideas from
          architecture to launch.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 3) * 90} className="h-full">
            <SkillCategory {...group} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
