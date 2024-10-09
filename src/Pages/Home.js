import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-black">
      <div className="text-center px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
            Welcome, I'm a
          </span>
        </h1>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="inline-block w-full"> {/* Added this line */}
            <TypeAnimation
              sequence={[
                "Software Developer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Luis Ramirez and I am a Full Stack Developer.
        </p>
        <a
          href="/ContactMe"
          className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Home;
