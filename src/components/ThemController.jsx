import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeController() {
  // Use state to track theme and persist in localStorage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "business"
  );

  // Update HTML data-theme attribute whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "business" ? "winter" : "business");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={toggleTheme}
        className="btn btn-circle btn-primary shadow-xl shadow-primary/30 transition-transform hover:scale-110"
        title="Toggle Theme"
      >
        {theme === "business" ? <FaSun className="text-xl text-primary-content" /> : <FaMoon className="text-xl text-primary-content" />}
      </button>
    </div>
  );
}
