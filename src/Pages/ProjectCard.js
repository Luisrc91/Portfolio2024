import React from "react";

const ProjectCard = ({ projectName, imageUrl, projectUrl }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden w-full max-w-sm mx-auto shadow-lg my-4">
      <img
        src={imageUrl}
        alt={`${projectName} Preview`}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{projectName}</h2>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
