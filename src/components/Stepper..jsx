import React from "react";
import Fab from "./Fab";

export default function Stepper({ children }) {
  return (
    <div className="relative min-h-screen">
      <Fab />

      {children}
    </div>
  );
}
