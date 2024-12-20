"use client"
import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
      
        if (!formData.name || !formData.email || !formData.message) {
            alert('Items field cannot be empty');
            return;
        }
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycby9GzqGyg_gX_IKdr-PTZ90AM1J49M4uYnl_IjDaZ8ujeNPmWq5k8ZgLDvThz-hZw_m/exec';
        setLoading(true);
        
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
    
            if (response.ok) {
                alert('Form submitted successfully');
                window.location.reload();
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };
    const scrollToTop = () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div>
      <section className="py- pb-20 px-4  " id="contact">
<h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
           Contact Me
        </h2>
    <div className="max-w-4xl mx-auto bg-gray-800 border-2 border-blue-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2  p-8  bg-gray-500 text-white">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                <div className="space-y-4">
    <div className="flex items-center">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span>Minhajvvo@gmail.com</span>
    </div>
    <div className="flex items-center">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span>+91 7034936080</span>
    </div>
    <div className="flex items-center">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <span>Calicut, Kerala</span>
    </div>
  
</div>
            </div>
            <div className="md:w-1/2 p-8">
  <form className="space-y-6" id="gform" method="POST" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
      <textarea
        id="message"
        placeholder="Your Message"
        name="message"
        rows="4"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
    </div>
    <button 
      type="submit" 
      disabled={loading}
      className={`w-full px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
        loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-white text-gray-900 hover:bg-gray-300"
      }`}
    >
      {loading ? "Submitting..." : "Send Message"}
    </button>
  </form>
</div>

        </div>
    </div>
    <svg
        className="h-6 w-6 float-right animate-bounce cursor-pointer mt-10 mr-"
        fill="none"
        onClick={scrollToTop}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
</section>
    </div>
  )
}

export default ContactForm
