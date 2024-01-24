import React from 'react';

const GitHubLink = ({ username }) => {
  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="../assets/github-mark.png"  // Update with the correct path
        alt="GitHub Logo"
        width="30"
        height="30"
      />
    </a>
  );
};

export default GitHubLink;
