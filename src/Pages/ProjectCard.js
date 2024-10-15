import React from "react";

const ProjectCard = ({ projectName, imageUrl, projectUrl }) => {
  return (
    <div className="border-transparent bg-gradient-to-l to-gray-900 to-black rounded-sm overflow-hidden w-full max-w-sm mx-auto shadow-lg my-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={imageUrl}
        alt={`${projectName} Preview`}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-300">{projectName}</h2>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-600 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
