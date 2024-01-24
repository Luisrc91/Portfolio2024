import React from 'react';
import './Projects.css'; // Import the CSS file

const ProjectsPic = () => {
    return (
        <section className="projects-section">
            <div className="projects-content">
                <h2>Projects</h2>
                <p>
                    Explore some of my featured projects below:
                </p>
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>Description of Project 1.</p>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>Description of Project 2.</p>
                </div>
             
            </div>
            <div>
            <a style={{fontSize:'20px', textDecoration:'none', color: 'black'}} href="/Projects"><h3>Click Github Projects here!</h3></a>
            </div>
        </section>
    );
}

export default ProjectsPic;
