import React from 'react'
import SkillCategory from './SkillCategory'
import {  FaWhatsapp} from 'react-icons/fa6';

const Skills = () => {
  return (
    <div>
      <section className="py-10 px-4 " id="Skills">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills & Expertise
        </h2>
        <a
  href="https://wa.me/917034936080" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300"
>
  <FaWhatsapp size={30} />
</a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1. Frontend Development */}
            <SkillCategory 
                title="Frontend Development" 
                icon="🖥️" 
                skills={[
                    'React (SPA Development)', 
                    'JavaScript (ES6+)', 
                    'HTML5 & CSS3', 
                    'Tailwind CSS & Bootstrap', 
                    'Responsive Design',
                    'Figma & Sketch',
                    'Wireframing & Prototyping'
                ]} 
            />

            {/* 2. Backend Development */}
            <SkillCategory 
                title="Backend Development" 
                icon="🔧" 
                skills={[
                    'Node.js', 
                    'Express.js', 
                    'RESTful APIs', 
                    'MongoDB & Database Design', 
                    'Authentication & Authorization (JWT)',
                    'Database Design',
                    'Data Structures and Algorithms'
                ]} 
            />

            {/* 3. DevOps & Tools */}
            <SkillCategory 
                title="DevOps & Tools" 
                icon="🛠️" 
                skills={[
                    'Git & Version Control', 
                    'AWS & Cloud Deployment', 
                    'Webpack & Babel', 
                    'npm/Yarn', 
                    'Project Planning & Scheduling'
                ]} 
            />

            {/* 4. UI/UX & Design Principles */}
            <SkillCategory 
                title="UI/UX & Design Principles" 
                icon="🎨" 
                skills={[
                    'Responsive Design Principles', 
                    'Color Theory & Typography',
                    'Usability Testing', 
                    'Wireframing & Prototyping', 
                    'User-Centered Design'
                ]} 
            />

            {/* 5. Project Management & Agile */}
            <SkillCategory 
                title="Project Management & Agile" 
                icon="📈" 
                skills={[
                    'Agile Methodology (Scrum & Kanban)', 
                    'Effective Sprint Planning',
                    'Team Collaboration', 
                    'Time Management', 
                    'Mentoring & Leadership'
                ]} 
            />

            {/* 6. Additional Technologies */}
            <SkillCategory 
                title="Additional Technologies" 
                icon="📚" 
                skills={[
                    'Redux for State Management', 
                    'WebSockets for Real-Time Communication', 
                    'Performance Optimization',
                    'APIs & Integrations', 
                    'MVC Architecture',
                    'Soft Skills: Problem Solving, Creativity, Adaptability'
                ]} 
            />

        </div>

        {/* Scroll Down Arrow */}
        <div className="bottom-10 left-1/2 transform -translate-x-1/2 mt-10 animate-bounce text-center">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </div>
</section>
    </div>
  )
}

export default Skills
