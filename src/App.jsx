import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stepper from "./components/Stepper.";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [section, setSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            entry.target.id,
            entry.isIntersecting,
            entry.intersectionRatio,
          );
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      },
    );

    const elements = [
      document.getElementById("about"),
      document.getElementById("projects"),
      document.getElementById("skills"),
      document.getElementById("experience"),
    ];

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Stepper targetSection={section}>
          <section id="about">
            <Hero />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Education />
          </section>
        </Stepper>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
