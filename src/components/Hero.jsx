import React from "react";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen me-72">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="hover-gallery max-w-60 me-10 ">
            <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
            <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
          </figure>

          <div>
            <span className="text-primary font-mono font-extrabold text-3xl">
              IT AUTOMATION ENGINEER
            </span>
            <h1 className="text-5xl font-bold mt-5 ">
              <TypeAnimation
                sequence={["John Doe", 15, "PHP Developer", 10]}
                cursor={true}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <p className="py-6 text-wrap ">
              My name is John Doe, I am an It Automation Engineer with
              Bachelor's Degree in Information Systems
            </p>
            <button className="btn btn-primary hover:btn-secondary">
              Who am I?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
