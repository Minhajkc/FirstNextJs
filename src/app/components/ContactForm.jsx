"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Reveal from "./Reveal";

const MAX_MESSAGE_LENGTH = 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [emailTouched, setEmailTouched] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailInvalid =
    emailTouched && formData.email.trim() !== "" && !emailPattern.test(formData.email.trim());

  useEffect(() => {
    if (status.type !== "success") return;
    const timer = setTimeout(() => setStatus({ type: "", message: "" }), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Minhajvvo@gmail.com");
      setCopied(true);
    } catch {
      window.location.href = "mailto:Minhajvvo@gmail.com";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please complete all fields." });
      return;
    }
    if (!emailPattern.test(email)) {
      setEmailTouched(true);
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        "service_9hd1kfq",
        "template_zfkna0b",
        { name, email, message },
        "F00m3fDSWyL-3kpJk"
      );
      setFormData({ name: "", email: "", message: "" });
      setEmailTouched(false);
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch (error) {
      console.error("Failed to send contact message:", error);
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[30rem] w-[45rem] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-2xl sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Let&apos;s connect
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            Good ideas start with a conversation.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a product to build, a problem to solve, or an opportunity to
            discuss? I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={100} className="glass sq-xl grid p-2.5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="sq-lg glass-subtle relative flex flex-col overflow-hidden bg-gradient-to-br from-blue-500/15 via-transparent to-violet-500/15 p-6 sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
            />
            <div className="relative">
              <span className="glass-subtle inline-flex items-center gap-2 rounded-full !border-emerald-300/25 !bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Open to select opportunities
              </span>
              <span className="glass-strong sq-md mt-7 flex h-12 w-12 items-center justify-center text-blue-300">
                <Send className="h-5 w-5" />
              </span>
              <h3 className="mt-7 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Let&apos;s build something meaningful.
              </h3>
              <p className="mt-4 max-w-sm leading-7 text-slate-400">
                Tell me what you have in mind. I&apos;ll get back to you as
                soon as I can.
              </p>

              <div className="mt-9 space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:Minhajvvo@gmail.com"
                    className="group flex min-w-0 flex-1 items-center gap-4 text-slate-300 transition hover:text-white"
                  >
                    <span className="glass-subtle sq-sm flex h-11 w-11 shrink-0 items-center justify-center text-blue-300">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-500">Email</span>
                      <span className="mt-1 block break-all text-sm font-medium">
                        Minhajvvo@gmail.com
                      </span>
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={copied ? "Email address copied" : "Copy email address"}
                    className="glass-subtle sq-xs inline-flex h-9 shrink-0 items-center gap-1.5 px-3 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <a
                  href="tel:+917034936080"
                  className="group flex items-center gap-4 text-slate-300 transition hover:text-white"
                >
                  <span className="glass-subtle sq-sm flex h-11 w-11 shrink-0 items-center justify-center text-blue-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Phone</span>
                    <span className="mt-1 block text-sm font-medium">
                      +91 70349 36080
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="glass-subtle sq-sm flex h-11 w-11 shrink-0 items-center justify-center text-blue-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Based in</span>
                    <span className="mt-1 block text-sm font-medium">
                      Calicut, Kerala, India
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <p className="relative mt-auto pt-10 text-xs leading-5 text-slate-500">
              Prefer email?{" "}
              <a
                href="mailto:Minhajvvo@gmail.com"
                className="font-medium text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                Write to me directly
              </a>
              .
            </p>
          </div>

          <div className="p-6 sm:p-9 lg:p-10">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Contact form
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Send me a message
                </h3>
              </div>
              <span className="text-xs text-slate-500">All fields required</span>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="glass-field sq-md w-full px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/10"
                  placeholder="Minhaj KC"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setEmailTouched(true)}
                  required
                  maxLength={254}
                  aria-invalid={emailInvalid}
                  aria-describedby={emailInvalid ? "contact-email-error" : undefined}
                  className={`glass-field sq-md w-full px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:ring-4 ${
                    emailInvalid
                      ? "!border-rose-400/60 focus:ring-rose-400/10"
                      : "border-white/10 hover:border-white/20 focus:border-blue-400/60 focus:ring-blue-400/10"
                  }`}
                  placeholder="you@example.com"
                />
                {emailInvalid && (
                  <p id="contact-email-error" className="mt-2 text-xs text-rose-300">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  How can I help?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="glass-field sq-md w-full resize-y px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/10"
                  placeholder="Tell me a little about your project..."
                />
                <p
                  aria-hidden="true"
                  className="mt-2 text-right text-xs text-slate-600"
                >
                  {formData.message.length} / {MAX_MESSAGE_LENGTH}
                </p>
              </div>

              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`animate-toast-in glass-subtle sq-sm flex items-start gap-2 px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "!border-emerald-400/30 !bg-emerald-400/10 text-emerald-200"
                      : "!border-rose-400/30 !bg-rose-400/10 text-rose-200"
                  }`}
                >
                  {status.type === "success" && (
                    <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="sq-md inline-flex w-full items-center justify-center gap-2 bg-gradient-to-br from-blue-400 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/40 ring-1 ring-inset ring-white/20 transition hover:-translate-y-0.5 hover:from-blue-300 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:translate-y-0 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
              >
                {loading && (
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                  />
                )}
                {loading ? "Sending..." : "Send message"}
                {!loading && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactForm;
