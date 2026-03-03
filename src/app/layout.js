import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Minhaj KC | Best Full Stack Engineer",
  description:
    "Minhaj KC – Best Full Stack Engineer & Former CTO in Kozhikode, Kerala, India. Expert MERN Stack developer (MongoDB, Express, React, Node.js), Next.js, Firebase, scalable apps, UI/UX & startup products. Top full stack developer for hire.",
  keywords:
    "Minhaj KC, Minhaj KC MERN, Minhaj KC full stack, Best Full Stack Engineer, Best Full Stack Developer India, Best MERN Developer Kozhikode, Full Stack Developer Kerala, Former CTO Minhaj KC, Engineer Minhaj KC, Kc Minhaj, Top Full Stack Developer Kozhikode, MERN Stack Developer Calicut, Best Full Stack Engineer Kerala, full stack engineer India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Override metadata values with optimized versions */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Minhaj KC" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph – strong for social sharing & entity signals */}
        <meta property="og:title" content="Minhaj KC | Best Full Stack Engineer & Former CTO – Kozhikode, Kerala" />
        <meta
          property="og:description"
          content="Former CTO and leading MERN full stack engineer from Kozhikode, Kerala, India. Specializing in scalable web platforms, Next.js, Firebase, UI/UX, and startup product development."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://minhajkc.vercel.app" />
        <meta property="og:image" content="/images/Minhajreal.png" />
        <meta property="og:image:alt" content="Minhaj KC – Best Full Stack Engineer" />
        <meta property="og:site_name" content="Minhaj KC Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minhaj KC | Best Full Stack Engineer" />
        <meta
          name="twitter:description"
          content="Best full stack engineer & former CTO in Kozhikode, Kerala | MERN, Next.js, Firebase expert | Scalable apps & startup solutions"
        />
        <meta name="twitter:image" content="/images/Minhajreal.png" />
        <meta name="twitter:creator" content="@minhajkc" /> {/* Add your real handle if available */}

        <link rel="icon" href="/favicon.PNG" />
        <link rel="canonical" href="https://minhajkc.vercel.app" />

        {/* Structured Data – Person schema (site-wide for strong entity SEO) */}
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
                "Former CTO and expert Full Stack Engineer from Kozhikode (Calicut), Kerala, India. Specializing in MERN stack (MongoDB, Express, React, Node.js), Next.js, Firebase, scalable system design, UI/UX development, and production-ready startup platforms.",
              url: "https://minhajkc.vercel.app",
              image: "https://minhajkc.vercel.app/images/Minhajreal.png",
              email: "minhajvvo@gmail.com", // ← Update if different
              telephone: "+917034936080",   // ← Update if you want to include
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
                // Add more verified profiles (Twitter/X, etc.) if you have them
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
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}