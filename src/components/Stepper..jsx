import React from "react";
import Fab from "./Fab";

export default function Stepper({ children, targetSection }) {
  console.log(targetSection);

  return (
    <div className="relative min-h-screen">
      <Fab />
      <div className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50">
        <ul className="steps steps-vertical">
          <li
            className={`step ${
              targetSection === "about" ? "text-primary step-primary" : ""
            }`}
          >
            <a href="#about">About</a>
          </li>

          <li
            className={`step ${
              targetSection === "projects" ? "text-primary step-primary" : ""
            }`}
          >
            <a href="#projects">Project</a>
          </li>

          <li
            className={`step ${
              targetSection === "skills" ? "text-primary step-primary" : ""
            }`}
          >
            <a href="#skills"> Skills</a>
          </li>

          <li
            className={`step ${
              targetSection === "experience" ? "text-primary step-primary" : ""
            }`}
          >
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </div>

      {children}
    </div>
  );
}
