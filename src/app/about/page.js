import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto   rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-white mb-6">About Me</h1>
      <p className="text-lg text-white mb-4"><strong className="font-bold">Name:</strong> Minhaj</p>
      <p className="text-lg text-white mb-4">
        As a MERN Stack Developer and UI/UX Designer, I blend technical expertise with creative flair. My journey in the world of web development has been driven by a passion for crafting seamless digital experiences.
      </p>
      <p className="text-lg text-white mb-6">
        I specialize in building scalable web applications and designing intuitive user interfaces that not only look great but also solve real-world problems.
      </p>
      <h3 className="text-2xl font-semibold text-white mb-4">Skills & Attributes</h3>
      <ul className="list-disc pl-5 space-y-2 text-white">
        <li className="text-lg">Problem Solver</li>
        <li className="text-lg">Innovative Thinker</li>
        <li className="text-lg">Fast Learner</li>
      </ul>
    </div>
  )
}

export default About
