import React from "react";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import ContactMe from "./ContactMe";
import ProjectsPic from "./ProjectsPic";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className="scroll-smooth min-h-screen flex items-center justify-center h-[70vh]">
        <div className="text-center px-5">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 inline-block">
              Welcome,
              <span className="text-white"> I am</span>
              <br />
              <h1> Luis Ramirez</h1>
              {/* <TypeAnimation
                className="text-white"
                sequence={["Luis Ramirez", 1500]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              /> */}
            </span>
          </h1>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            I'm a
            <span className="inline-block w-full text-white">
              <TypeAnimation
                sequence={[
                  "<Full-Stack Software Developer/>",
                  1500,
                  "",
                  1500,
                 
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-white sm:text-lg my-6 lg:text-xl">
            Turning ideas into reality through code and creativity.
          </p>
          <a
            href="/ContactMe"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact me
          </a>
        </div>
      </div>
      <About />
      <ProjectsPic />
      <Skills />
      <ContactMe />
    </>
  );
};

export default Home;
