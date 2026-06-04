import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stepper from "./components/Stepper.";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stepper>
        {/* Page sections */}
        <Projects />
        <Hero />
      </Stepper>
    </>
  );
}

export default App;
