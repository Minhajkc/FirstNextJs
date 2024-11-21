'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Lightbulb, 
  Zap 
} from 'lucide-react';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delayChildren: 0.1,  // Reduced delay for faster appearance
        staggerChildren: 0.1 // Reduced stagger interval
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.3 // Reduced duration for quicker animations
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 px-4 bg-gradient-to-l"
      id='about'
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2"
          >
            <Image 
              src='/images/Minhajreal.png'
              alt="Minhaj" 
              width={256}
              height={296}
              className="rounded-full w-64 h-74 object-cover mx-auto shadow-lg border-2 border-blue-500"
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 space-y-6 lg:text-left text-center"
          >
            <p className="text-lg leading-relaxed text-gray-300">
              As a <span className="text-blue-400 font-semibold">MERN Stack Developer</span> and <span className="text-purple-400 font-semibold">UI/UX Designer</span>, I blend technical expertise with creative flair. My journey in the world of web development has been driven by a passion for crafting seamless digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I specialize in building scalable web applications and designing intuitive user interfaces that not only look great but also solve real-world problems.
            </p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-6"
            >
              {[ 
                { 
                  icon: CheckCircle, 
                  color: 'text-blue-400', 
                  text: 'Problem Solver' 
                },
                { 
                  icon: Lightbulb, 
                  color: 'text-purple-400', 
                  text: 'Innovative Thinker' 
                },
                { 
                  icon: Zap, 
                  color: 'text-green-400', 
                  text: 'Fast Learner' 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ 
            y: [0, -15, 0], // Faster bounce effect
            transition: { 
              repeat: Infinity, 
              duration: 1 // Faster duration for the bounce effect
            } 
          }}
          className="bottom-10 left-1/2 transform -translate-x-1/2 text-center float-end"
        >
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
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
