import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-100 shadow-sm text-neutral-content items-center p-4 ">
      <nav className="grid-flow-col gap-4  md:justify-self-start">
        <a className="text-primary hover:text-secondary" href="#">
          <IconContext.Provider value={{ size: "30px" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a className="text-primary hover:text-secondary" href="#">
          <IconContext.Provider value={{ size: "30px" }}>
            <FaGithub />
          </IconContext.Provider>
        </a>
        <a className="text-primary hover:text-secondary" href="#">
          <IconContext.Provider value={{ size: "30px" }}>
            <FaFacebook />
          </IconContext.Provider>
        </a>
      </nav>
      <aside className="grid-flow-col items-center md:justify-self-end">
        <p className="text-2xl font-bold text-primary hover:text-secondary hover:text-secondary">
          John Doe
        </p>
      </aside>
    </footer>
  );
}
