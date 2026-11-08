"use client";

import React from "react";

const SkillCategory = ({ title, icon: Icon, skills }) => {
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      onPointerMove={handlePointerMove}
      className="glass glass-interactive sq-lg group relative h-full overflow-hidden p-5 hover:-translate-y-1 sm:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(96,165,250,0.12), transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="mb-5 flex items-center gap-3.5">
          <span className="glass-subtle sq-sm flex h-11 w-11 shrink-0 items-center justify-center text-blue-300 transition group-hover:scale-105 group-hover:text-blue-200">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
              {title}
            </h3>
            <p className="text-xs text-slate-500">{skills.length} skills</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="glass-subtle rounded-full px-3 py-1.5 text-xs leading-5 text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-300/30 hover:text-white sm:text-[13px]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SkillCategory;
