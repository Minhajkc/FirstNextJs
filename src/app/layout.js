import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
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
  title: "Minhaj KC | Full Stack Developer | Mern | MERN",
  description: "Minhaj KC - Full Stack Developer and UI/UX Designer specializing in the MERN stack.",
  keywords: "Minhaj KC, MinhajKC, Minhaj Developer, Full Stack Developer, Kozhikode, Best Developer in Kozhikode, minhajkc.com, minhaj kc, minhaj Kc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minhajkc.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://minhajkc.vercel.app" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
