// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'
import Recipe from '../assets/ABCL-recipe-book2023.png'
import Trivia from '../assets/triviagameJs.png'
import Event from '../assets/eventplanner-9d21c.web.app_login.png'
import RestRant from '../assets/localhost_3000_.png'
const projects = [
  { id: 1, name: 'Event Planner', imageUrl: Event, url: 'https://github.com/Luisrc91/eventPlanner_frontend' },
  { id: 2, name: 'RestRant', imageUrl: RestRant, url: 'https://github.com/Luisrc91/rest-rant-monorepo' },
  { id: 3, name: 'ABCL-Recipe Book', imageUrl:Recipe, url: 'https://github.com/BLDubroff/ABCL-Recipe-Book?tab=readme-ov-file' },
  { id: 4, name: 'Trivia Game', imageUrl: Trivia, url: 'https://github.com/Luisrc91/TriviaGameP1BG' },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-content">
        <div className="project-cards-container">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              projectName={project.name}
              imageUrl={project.imageUrl}
              projectUrl={project.url}
            />
          ))}
        </div>
      </div>
      <div>
        <a className="gitHubLink" href="/Projects">
          My GitHub Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;

