'use client';
import React from 'react';
import Image from 'next/image';

const Achievements = () => {
  return (
    <section id="achievements" className="py-2 pb-20 px-6  text-white" >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          My Achievement
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-12 md:space-y-0 ">
          <div className="flex flex-col items-center border-2 border-blue-500 bg-gray-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <Image
              src="/images/achi.PNG" 
              alt="Google Achievement"
              width={450}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Google Certification</h3>
            <p className="text-sm text-gray-400 p-4">Achievement for the successful completion of <strong>The Fundamentals of Digital Marketing</strong> certification exam on 01/11/2020</p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Achievements;
