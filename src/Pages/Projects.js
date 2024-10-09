// Projects.js
import React, { useEffect, useState } from 'react';
import { getStarredRepositories, getRepositoryDetails } from './githubService';
import ProjectsPic from './ProjectsPic';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoData = await getStarredRepositories();

        // Fetch additional details for each repository
        const repoDetailsPromises = repoData.map(repo =>
          getRepositoryDetails(repo.owner.login, repo.name)
        );
        const detailedRepos = await Promise.all(repoDetailsPromises);

        // Combine original data with additional details
        const reposWithDetails = repoData.map((repo, index) => ({
          ...repo,
          details: detailedRepos[index],
        }));

        setRepositories(reposWithDetails);
      } catch (error) {
        console.error('Error fetching starred repositories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-content">
        <h2>Projects On GitHub</h2> 

        {repositories.length === 0 ? (
          <p>No starred repositories found.</p>
        ) : (
          <div>
            {repositories.map(repo => (
              <div key={repo.id} className="project-card">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <img
                  src={`./images/${repo.name}.jpg`} // Adjust the path and file format as needed
                  alt={`${repo.name} project`}
                  className="project-image"
                />
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repository
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
