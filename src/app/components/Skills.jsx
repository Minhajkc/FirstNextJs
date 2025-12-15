import React from "react";
import SkillCategory from "./SkillCategory";
import { FaWhatsapp } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="py-10 px-4" id="Skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Skills & Expertise
        </h2>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917034936080"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300"
        >
          <FaWhatsapp size={30} />
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Frontend Engineering */}
          <SkillCategory
            title="Frontend Engineering"
            icon="🖥️"
            skills={[
              "React.js (SPA Development)",
              "Next.js (SSR, App Router)",
              "JavaScript (ES6+)",
              "HTML5, CSS3, Media Queries",
              "Tailwind CSS, Bootstrap, Ant Design",
              "Redux, Redux Toolkit, Zustand",
              "React Router, React Hook Form",
              "Chart.js, React Beautiful DnD",
              "Vite, NPM"
            ]}
          />

          {/* 2. Backend Engineering */}
          <SkillCategory
            title="Backend Engineering"
            icon="🔧"
            skills={[
              "Node.js, Express.js",
              "REST API Design & Development",
              "MongoDB & Database Schema Design",
              "MVC Architecture",
              "Authentication & Authorization (JWT)",
              "Firebase Authentication & Firestore",
              "Multer (File Uploads)",
              "Nodemailer (Email Services)",
              "Razorpay Payment Gateway Integration"
            ]}
          />

          {/* 3. DevOps, Cloud & Deployment */}
          <SkillCategory
            title="DevOps, Cloud & Deployment"
            icon="☁️"
            skills={[
              "AWS (EC2, S3, IAM)",
              "AWS Route 53 (DNS Management)",
              "Nginx (Reverse Proxy & Server Setup)",
              "Vercel Deployment",
              "Linux Server Management",
              "Environment Configuration",
              "CI/CD Basics"
            ]}
          />

          {/* 4. API, Testing & Tools */}
          <SkillCategory
            title="API, Testing & Tools"
            icon="🧪"
            skills={[
              "Postman (API Testing)",
              "Swagger (API Documentation)",
              "Axios & Fetch API",
              "AJAX",
              "Git & GitHub",
              "Version Control & Branching",
              "Debugging & Performance Optimization"
            ]}
          />

          {/* 5. System Design & Architecture */}
          <SkillCategory
            title="System Design & Architecture"
            icon="🏗️"
            skills={[
              "Scalable Web Architecture",
              "Database Design & Normalization",
              "System Flowcharts & Technical Documentation",
              "Role-Based Access Control (RBAC)",
              "Secure Authentication Flows",
              "Multi-Service Platform Design"
            ]}
          />

          {/* 6. Product, Agile & Professional Skills */}
          <SkillCategory
            title="Product, Agile & Leadership"
            icon="📈"
            skills={[
              "Agile SDLC (Scrum, Kanban)",
              "Project Planning & Execution",
              "Technical Leadership",
              "Startup Product Development",
              "Cross-Team Collaboration",
              "Problem Solving & Critical Thinking",
              "Data Structures & Algorithms"
            ]}
          />
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-12 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
