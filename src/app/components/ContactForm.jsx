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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_9hd1kfq",          // ✅ Your SERVICE ID
        "template_xxxxxxx",         // ❗ Replace with TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"           // ❗ Replace with PUBLIC KEY
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="py- pb-20 px-4" id="contact">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Me
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-800 border-2 border-blue-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* LEFT */}
            <div className="md:w-1/2 p-8 bg-gray-500 text-white">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-6">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="ml-2">Minhajvvo@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="ml-2">+91 7034936080</span>
                </div>
                <div className="flex items-center">
                  <span className="ml-2">Calicut, Kerala</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:w-1/2 p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 rounded-lg font-bold transition ${
                    loading
                      ? "bg-gray-400 text-gray-700"
                      : "bg-white text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <svg
          className="h-6 w-6 float-right animate-bounce cursor-pointer mt-10"
          onClick={scrollToTop}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </section>
    </div>
  );
};

export default ContactForm;
