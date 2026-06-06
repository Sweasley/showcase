import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stepper from "./components/Stepper.";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stepper>
        {/* Page sections */}
        <Projects />
        <Skills />
        <Education />
      </Stepper>
      <Footer />
    </>
  );
}

export default App;
