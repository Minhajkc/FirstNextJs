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
    <div>
      <Head>
        <title>Minhaj KC | CTO & Full-Stack Engineer (MERN)</title>
        <meta
          name="description"
          content="Learn about Minhaj KC, CTO and Full-Stack Engineer specializing in MERN, Firebase, scalable system design, startup products, and UI/UX development."
        />
        <meta
          name="keywords"
          content="Minhaj KC, CTO, Full Stack Engineer, MERN Stack Developer, Product Architect, Startup Engineer, System Design, UI/UX Developer"
        />
        <meta name="author" content="Minhaj KC" />

        <meta property="og:title" content="Minhaj KC | CTO & Full-Stack Engineer" />
        <meta
          property="og:description"
          content="CTO and Full-Stack Engineer experienced in building scalable web platforms, leading products from idea to deployment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minhajkc.vercel.app" />
        <meta property="og:image" content="https://minhajkc.vercel.app/images/Minhajreal.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://minhajkc.vercel.app" />
      </Head>

      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <DesignWorks />
      <Achievements />
      <ContactForm />
      <Footer />
    </div>
  );
}
