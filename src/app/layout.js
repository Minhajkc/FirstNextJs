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
  title: "Minhaj KC | CTO & Full-Stack Engineer (MERN)",
  description:
    "Learn about Minhaj KC, a CTO and Full-Stack Engineer specializing in MERN, Firebase, scalable system design, and startup product development.",
  keywords:
    "Minhaj KC, CTO, Full Stack Engineer, MERN Stack Developer, Product Architect, Startup Engineer, System Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Minhaj KC" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minhajkc.vercel.app" />
        <meta property="og:image" content="/images/Minhajreal.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.PNG" />
        <link rel="canonical" href="https://minhajkc.vercel.app" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
