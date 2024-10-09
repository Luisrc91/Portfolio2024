import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center h-[70vh] bg-black">
      <div className="text-center px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 inline-block">
             Welcome, I'm a
          </span>
        </h1>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="inline-block w-full"> {/* Added this line */}
            <TypeAnimation
              sequence={[
                "< Software Developer />",
                950,
                "< Frontend Developer />",
                950,
                "< Backend Developer />",
                950,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
        Hello my name is Luis Ramirez, I am a Full Stack Developer.
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
