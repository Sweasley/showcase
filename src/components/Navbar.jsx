import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      {/* Left / Brand */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-primary hover:text-secondary">
          W.G
        </a>
      </div>

      {/* Mobile dropdown */}
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <i className="bi bi-list text-2xl"></i>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Experiences</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a className="hover:text-primary text-lg" href="#hero">About</a>
          </li>
                <li>
            <a className="hover:text-primary text-lg" href="#projects">Project</a>
          </li>
          <li>
            <a className="hover:text-primary text-lg" href="#skills">Skills</a>
          </li>
    
          <li>
            <a className="hover:text-primary text-lg" href="#education">Experiences</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
