import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import {  FaWhatsapp} from 'react-icons/fa6';
import Achievements from "./components/Achievements";

export default function Home() {
  return (
   <div>
  
   <HeroSection/>
   <About/>
   <Skills/>
   <Projects/>
   <Achievements/>
   <ContactForm/>
   <Footer/>
   </div>
  );
}
