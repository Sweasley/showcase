import React from "react";
import { TypeAnimation } from "react-type-animation";
import { images } from "../utils/ImportImages";

export default function Hero() {
  const age = new Date().getFullYear() - 2001;

  return (
    <section className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12">
        <div className="avatar shrink-0">
          <figure className="w-64 h-64 md:w-72 md:h-72 aspect-square overflow-hidden hover-gallery rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl transition-all duration-300">
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

        {/* Hero Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <div className="badge badge-primary badge-lg mb-4 hover:badge-secondary">
            IT AUTOMATION ENGINEER
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold min-h-12 md:min-h-15">
            Hi, I'm{" "}
            <span className="text-primary">
              <TypeAnimation
                sequence={[
                  "John doe",
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

          <p className="py-6 text-base-content/80 text-lg leading-relaxed">
            My name is John Doe. I'm an IT Automation Engineer with a Bachelor's
            Degree in Information Systems. I specialize in automation, web
            development, and building scalable business solutions. Utilizing AI
            assisted coding for quality and faster development.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            <div className="badge badge-primary badge-outline">
              Full Stack Engineer
            </div>
            <div className="badge badge-secondary badge-outline">
              PHP Developer
            </div>
            <div className="badge badge-accent badge-outline">
              Laravel Developer
            </div>
            <div className="badge badge-info badge-outline">
              Automation Engineer
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="btn btn-primary hover:btn-secondary shadow-md">
              View Projects
            </button>
            <button className="btn btn-outline">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
