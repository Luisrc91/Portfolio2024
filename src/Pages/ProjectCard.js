// ProjectCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ projectName, imageUrl, projectUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={`${projectName} Preview`} />
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
