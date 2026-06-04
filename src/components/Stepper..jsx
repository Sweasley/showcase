import React from "react";

export default function Stepper({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <ul className="steps steps-vertical">
          <li className="step step-primary">About</li>
          <li className="step step-primary">Experience</li>
          <li className="step">Project</li>
          <li className="step">Contact</li>
        </ul>
      </div>

      {children}
    </div>
  );
}
