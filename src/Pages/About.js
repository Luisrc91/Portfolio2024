import React from 'react';

const About = () => {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col justify-center items-center text-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 inline-block">
            About Me
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-xl">
            Hi, I’m <span className="font-bold">Luis Ramirez</span>, a dedicated software developer from North Carolina.
            My journey is fueled by a passion for problem-solving, where I believe that with the right blend of creativity and technology, we can turn visions into reality. 
            I specialize in full-stack development, working with technologies like JavaScript, Python, React, TypeScript, Node.js, Express, SQL, and MongoDB.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-xl">
            I thrive in collaborative environments where multidisciplinary teams come together to create extraordinary solutions. 
            Embracing Agile methodologies, I adapt quickly to changing project requirements, ensuring the delivery of high-quality results. 
            My goal is to empower users through technology by crafting seamless and efficient web applications that inspire and facilitate growth.
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
