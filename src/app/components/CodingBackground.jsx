import React from "react";

const CodingBackground = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080b12]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    <div className="animate-drift-a absolute -left-32 top-[8%] h-[34rem] w-[34rem] rounded-full bg-blue-600/25 blur-[130px]" />
    <div className="animate-drift-b absolute -right-32 top-[38%] h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-[140px]" />
    <div className="animate-drift-a absolute -bottom-40 left-[28%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[130px]" />
  </div>
);

export default CodingBackground;
