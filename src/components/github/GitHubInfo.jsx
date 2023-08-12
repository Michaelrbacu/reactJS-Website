import React, { useState, useEffect } from 'react';
import "./github.css";

const GitHubInfo = () => {
  const [repoData, setRepoData] = useState({});
  const [commitData, setCommitData] = useState({});
  const [timeSinceLastCommit, setTimeSinceLastCommit] = useState('');

  useEffect(() => {
    // Fetch repository information
    fetch('https://api.github.com/repos/Michaelrbacu/reactJS-Website')
      .then(response => response.json())
      .then(data => setRepoData(data))
      .catch(error => console.error('Error fetching repository data:', error));

    // Fetch most recent commit
    fetch('https://api.github.com/repos/Michaelrbacu/reactJS-Website/commits', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setCommitData(data[0]);
      const lastCommitDate = new Date(data[0].commit.author.date);
      const now = new Date();
      const timeDiff = now - lastCommitDate;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeSinceLastCommit(`${days} days ${hours} hours ${minutes} minutes`);
    })
    .catch(error => console.error('Error fetching commit data:', error));
}, []);

return (
  <div className="github-info-container">
    <h1 className="github-info-title">GitHub Repository Information</h1>
    <p className="black"><strong>Repository Name:</strong> {repoData.name}</p>
    <p className="black"><strong>Description:</strong> {repoData.description}</p>
    <p className="black"><strong>Owner:</strong> {repoData.owner && repoData.owner.login}</p>
    <p className="black"><strong>URL:</strong> <a href={repoData.html_url}>{repoData.html_url}</a></p>

    {commitData.commit && (
      <div>
        <h2>Most Recent Commit</h2>
        <p className="black"><strong>Author:</strong> {commitData.commit.author.name}</p>
        <p className="black"><strong>Date:</strong> {commitData.commit.author.date}</p>
        <p className="black"><strong>Commit URL:</strong> <a href={commitData.html_url}>{commitData.html_url}</a></p>
        <p className="black"><strong>Time Since Last Commit:</strong> {timeSinceLastCommit}</p>
      </div>
    )}
  </div>
);

};

export default GitHubInfo;
