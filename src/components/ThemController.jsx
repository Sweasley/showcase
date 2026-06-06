import React from "react";

export default function ThemeController() {
  return (
    <div className="p-4 flex justify-center">
      <label className="swap swap-rotate btn btn-ghost btn-circle">
        <input type="checkbox" value="garden" className="theme-controller" />

        <i className="bi bi-sun-fill swap-off text-xl"></i>

        <i className="bi bi-moon-fill swap-on text-xl"></i>
      </label>
    </div>
  );
}
