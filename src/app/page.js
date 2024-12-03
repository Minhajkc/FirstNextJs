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
        <title>Minhaj KC | Full Stack Developer</title>
        <meta name="description" content="Minhaj KC - Full Stack Developer from Kozhikode, specializing in building responsive web applications and modern UI/UX designs." />
        <meta name="keywords" content="Minhaj KC, MinhajKC, Minhaj Developer, Full Stack Developer, Kozhikode, Best Developer in Kozhikode, minhajkc.com" />
        <meta name="author" content="Minhaj KC" />
        <meta property="og:title" content="Minhaj KC | Full Stack Developer" />
        <meta property="og:description" content="Discover the portfolio of Minhaj KC, a highly skilled full-stack developer based in Kozhikode." />
        <meta property="og:url" content="https://minhajkc.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://minhajkc.vercel.app/images/og-image.jpg" />
        <link rel="canonical" href="https://minhajkc.vercel.app" />
      </Head>
   <HeroSection/>
   <About/>
   <Skills/>
   <Projects/>
   <DesignWorks/>
   <Achievements/>
   <ContactForm/>
   <Footer/>
   </div>
  );
}
