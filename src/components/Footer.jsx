import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Info */}
        <aside className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-12 h-12 flex items-center justify-center">
                <span className="font-bold text-xl">WG</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-primary">Wesley Gimutao</p>
          </div>
          <p className="text-primary font-semibold text-lg">Aspiring Full Stack Software Developer</p>
          <div className="space-y-2 text-sm text-neutral-content/80 mt-2">
            <p className="flex items-center gap-2">🎓 Bachelor's Degree in Information Systems</p>
            <p className="flex items-center gap-2">🎓 Specializing in Automation & Web Development</p>
            <p className="flex items-center gap-2">📍 Philippines</p>
          </div>
        </aside>

        {/* Quick Links */}
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title text-primary opacity-100 text-lg mb-2">Quick Links</h6>
          <a href="#about" className="link link-hover text-neutral-content/80 hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="link link-hover text-neutral-content/80 hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="link link-hover text-neutral-content/80 hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="link link-hover text-neutral-content/80 hover:text-primary transition-colors">Experience</a>
        </nav>

        {/* Connect */}
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title text-primary opacity-100 text-lg mb-2">Connect</h6>
          <a href="mailto:weasleydyron.gimutao@gmail.com" className="link link-hover text-neutral-content/80 hover:text-primary transition-colors flex items-center gap-2">
            <FaEnvelope className="text-lg" /> weasleydyron.gimutao@gmail.com
          </a>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/Sweasley" className="btn btn-circle btn-sm btn-ghost bg-neutral-focus text-neutral-content hover:bg-primary hover:text-primary-content transition-colors">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/wesley-dyron-gimutao-26829225a/" className="btn btn-circle btn-sm btn-ghost bg-neutral-focus text-neutral-content hover:bg-primary hover:text-primary-content transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="https://www.facebook.com/SL3W3Y/" className="btn btn-circle btn-sm btn-ghost bg-neutral-focus text-neutral-content hover:bg-primary hover:text-primary-content transition-colors">
              <FaFacebook className="text-lg" />
            </a>
          </div>
        </nav>
      </div>
      
      {/* Copyright */}
      <div className="footer items-center p-4 bg-neutral-focus border-t border-neutral-content/10">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <aside className="items-center grid-flow-col">
            <p className="text-sm text-neutral-content/70">© {new Date().getFullYear()} Wesley Gimutao. All rights reserved.</p>
          </aside>

        </div>
      </div>
    </footer>
  );
}
