import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import {  FaWhatsapp} from 'react-icons/fa6';

export default function Home() {
  return (
   <div>
    <a
  href="https://wa.me/917034936080" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300"
>
  <FaWhatsapp size={30} />
</a>
   <HeroSection/>
   <About/>
   <Skills/>
   <Projects/>
   <ContactForm/>
   <Footer/>
   </div>
  );
}
