import React from 'react';

const ProjectCard = ({ projectName, imageUrl, projectUrl }) => {
  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={`${projectName} Preview`} style={imageStyle} />
      <div style={contentStyle}>
        <h2>{projectName}</h2>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  width: '600px', 
  margin: '16px',
 
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const contentStyle = {
  padding: '16px',
};

export default ProjectCard;

