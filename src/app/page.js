import Head from 'next/head';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import DesignWorks from "./components/DesignWorks";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Title – optimized for branded + aspirational searches */}
        <title>Minhaj KC | Best Full Stack Engineer</title>

        {/* Meta Description – keyword-rich, under 160 chars, includes location & CTA */}
        <meta
          name="description"
          content="Minhaj KC – Best Full Stack Engineer & Former CTO in Kozhikode, Kerala, India. Expert in MERN Stack (MongoDB, Express, React, Node.js), Next.js, Firebase, scalable web apps, UI/UX & startup platforms. Top full stack developer for hire."
        />

        {/* Keywords – covers name variations, locations, skills & "best" modifiers */}
        <meta
          name="keywords"
          content="Minhaj KC, Minhaj KC MERN, Minhaj KC full stack, Best Full Stack Engineer, Best Full Stack Developer India, Best MERN Developer Kozhikode, Full Stack Developer Kerala, Former CTO Minhaj KC, Engineer Minhaj KC, Kc Minhaj, Minhaj Kc engineer, Top Full Stack Developer Kozhikode, MERN Stack Developer Calicut, Best Full Stack Engineer Kerala, full stack engineer India, mern developer Kozhikode"
        />

        <meta name="author" content="Minhaj KC" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph – optimized for LinkedIn, Facebook, WhatsApp sharing */}
        <meta property="og:title" content="Minhaj KC | Best Full Stack Engineer & Former CTO – Kozhikode, Kerala" />
        <meta
          property="og:description"
          content="Former CTO and leading MERN full stack engineer from Kozhikode, Kerala, India. Specializing in scalable web platforms, Next.js, Firebase, UI/UX, and startup product development. View portfolio & projects."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://minhajkc.vercel.app" />
        <meta property="og:image" content="https://minhajkc.vercel.app/images/Minhajreal.png" />
        <meta property="og:image:alt" content="Minhaj KC – Best Full Stack Engineer" />
        <meta property="og:site_name" content="Minhaj KC – Best Full Stack Engineer Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Cards – large image for better visibility */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minhaj KC | Best Full Stack Engineer" />
        <meta
          name="twitter:description"
          content="Best full stack engineer & former CTO in Kozhikode, Kerala | MERN, Next.js, Firebase expert | Scalable apps & startup solutions"
        />
        <meta name="twitter:image" content="https://minhajkc.vercel.app/images/Minhajreal.png" />
        <meta name="twitter:creator" content="@minhajkc" /> {/* Add if you have X handle */}

        {/* Canonical URL */}
        <link rel="canonical" href="https://minhajkc.vercel.app" />

        {/* Basic favicons & viewport */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data – Person schema (very powerful for personal branding & entity SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Minhaj KC",
              alternateName: ["Minhaj Kc", "Kc Minhaj", "Engineer Minhaj KC", "Minhaj K C"],
              jobTitle: "Best Full Stack Engineer | Former CTO | MERN Stack Developer",
              description:
                "Former CTO and expert Full Stack Engineer from Kozhikode, Kerala, India. Specializing in MERN stack (MongoDB, Express, React, Node.js), Next.js, Firebase, scalable system design, UI/UX development, and building production-ready startup platforms.",
              url: "https://minhajkc.vercel.app",
              image: "https://minhajkc.vercel.app/images/Minhajreal.png",
              email: "minhajvvo@gmail.com", // Update if different
              telephone: "+917034936080",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kozhikode",
                addressRegion: "Kerala",
                postalCode: "673001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/in/minhaj-kc-a7b118308",
                "https://github.com/minhajkc",
                "https://www.instagram.com/mnhaj.__",
                "https://www.facebook.com/muhammedminhaj.kc",
                // Add Twitter/X, other profiles if available
              ],
              knowsAbout: [
                "MERN Stack",
                "Full Stack Development",
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Next.js",
                "Firebase",
                "Tailwind CSS",
                "UI/UX Design",
                "System Design",
                "Scalable Web Applications",
                "Startup Product Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Calicut",
              },
              nationality: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
      </Head>

      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <DesignWorks />
      <Achievements />
      <ContactForm />
      <Footer />
    </>
  );
}