import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stepper from "./components/Stepper.";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section id="hero">
      <Hero />
      </section>
      <Stepper>
        {/* Page sections */}
        <section id="projects">
        <Projects />
        </section>
        <section  id="skills">
        <Skills />
        </section>
        <section id="education">
        <Education />
        </section>
      </Stepper>
      <section id="footer">
      <Footer />
      </section>
    </>
  );
}

export default App;
