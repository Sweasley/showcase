import React from "react";
import { TypeAnimation } from "react-type-animation";
import { images } from "../utils/ImportImages";
import Starfield from "./Starfield";

export default function Hero() {
  return (
    <section className="hero min-h-screen relative overflow-hidden bg-base-200">
      {/* Outer Space Background with interactive stars */}
      <Starfield />
      
      {/* Optional faint overlay if needed to ensure text readability */}
      <div className="hero-overlay bg-gradient-to-b from-transparent to-base-300/50 z-0"></div>
      
      <div className="hero-content text-center text-neutral-content z-10 w-full max-w-5xl px-4 pointer-events-none">
        <div className="max-w-3xl mx-auto pointer-events-auto" data-aos="zoom-in" data-aos-duration="1200">
          <div className="flex justify-center mb-6">
            <div className="avatar shrink-0">
              <figure className="w-48 h-48 md:w-56 md:h-56 aspect-square overflow-hidden hover-gallery rounded-full ring ring-primary ring-offset-base-300 ring-offset-4 shadow-2xl transition-all duration-300">
                <img
                  src={images[1]}
                  alt="Profile state 1"
                  className="w-full h-full object-cover rounded-full"
                />
                <img
                  src={images[2]}
                  alt="Profile state 2"
                  className="w-full h-full object-cover rounded-full"
                />
              </figure>
            </div>
          </div>

          <div className="badge badge-primary badge-lg mb-2 shadow-lg shadow-primary/20 py-4 px-6 font-bold tracking-wider">
            IT AUTOMATION ENGINEER
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white drop-shadow-md min-h-[100px] mt-4">
            Hi, I'm <br className="md:hidden" />
            <span className="text-primary block md:inline">
              <TypeAnimation
                sequence={[
                  "Wesley Gimutao",
                  1500,
                  "A PHP Developer",
                  1500,
                  "A Laravel Developer",
                  1500,
                  "A Full Stack Engineer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="py-6 text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
            My name is Wesley Dyron Gimutao. I'm an IT Automation Engineer with
            a Bachelor's Degree in Information Systems. I specialize in
            automation, web development, and building scalable business
            solutions. Utilizing AI assisted coding for quality and faster
            development.
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="badge badge-primary badge-outline bg-base-100/20 backdrop-blur-md border-primary/50 text-white py-3 px-4 font-semibold">
              Full Stack Engineer
            </div>
            <div className="badge badge-secondary badge-outline bg-base-100/20 backdrop-blur-md border-secondary/50 text-white py-3 px-4 font-semibold">
              PHP Developer
            </div>
            <div className="badge badge-accent badge-outline bg-base-100/20 backdrop-blur-md border-accent/50 text-white py-3 px-4 font-semibold">
              Laravel Developer
            </div>
            <div className="badge badge-info badge-outline bg-base-100/20 backdrop-blur-md border-info/50 text-white py-3 px-4 font-semibold">
              Automation Engineer
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <a
              className="btn btn-primary hover:btn-secondary shadow-lg shadow-primary/30 border-none px-10 rounded-full text-base"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="btn btn-outline text-white hover:bg-white hover:text-black border-white/50 px-10 rounded-full text-base"
              href="mailto:weasleydyron.gimutao@gmail.com"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
