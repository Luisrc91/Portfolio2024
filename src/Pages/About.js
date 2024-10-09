import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
        <div className="mb-6">
          <p className="text-xl">
            Hi, I’m <span className="font-bold">Luis Ramirez</span>, a dedicated software developer from North Carolina. 
            With a professional certification from North Carolina State University, I specialize in full-stack development, 
            working with technologies like JavaScript, Python, React, TypeScript, Node.js, Express, SQL, and MongoDB.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-xl">
            My passion for technology began early, spanning everything from TVs and cell phones to video games. I take pride in crafting 
            seamless and efficient web applications from the front-end to the back-end, always striving for innovative solutions.
          </p>
        </div>
        <div>
          <p className="text-xl">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
