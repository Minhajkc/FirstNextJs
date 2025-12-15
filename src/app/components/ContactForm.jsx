"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Portfolio Contact",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pb-20 px-4" id="contact">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto bg-gray-800 border border-blue-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT */}
          <div className="md:w-1/2 p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-6 opacity-90">
              I’m open to collaborations, freelance work, and opportunities.
            </p>

            <div className="space-y-4 text-sm">
              <p>📧 minhajvvo@gmail.com</p>
              <p>📞 +91 7034936080</p>
              <p>📍 Calicut, Kerala</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-gray-900 hover:bg-gray-200"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Message sent successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Please fill all fields or try again
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <div
        onClick={scrollToTop}
        className="mt-10 flex justify-end cursor-pointer animate-bounce"
      >
        ⬆️
      </div>
    </section>
  );
};

export default ContactForm;
