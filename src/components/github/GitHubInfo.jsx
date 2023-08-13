import React, { useState, useEffect } from 'react';
import './github.css';

const GitHubInfo = () => {
  const [repoData, setRepoData] = useState({});
  const [lastCommitDate, setLastCommitDate] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState(0); // Initialize timeElapsed state

  useEffect(() => {
    // Fetch repository information
    fetch('https://api.github.com/repos/Michaelrbacu/reactJS-Website')
      .then(response => response.json())
      .then(data => setRepoData(data))
      .catch(error => console.error('Error fetching repository data:', error));

    // Fetch most recent commit
    fetch('https://api.github.com/repos/Michaelrbacu/reactJS-Website/commits')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const lastCommitDate = new Date(data[0].commit.author.date);
          setLastCommitDate(lastCommitDate);
        }
      })
      .catch(error => console.error('Error fetching commit data:', error));
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = time % 1000;

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} ms`;
  };

  const updateElapsedTime = () => {
    const now = new Date();
    const timeDiff = now - lastCommitDate;
    setTimeElapsed(timeDiff);

    requestAnimationFrame(updateElapsedTime);
  };

  useEffect(() => {
    updateElapsedTime();
  }, [lastCommitDate]);

  return (
    <div className="github-info-container">
      <h1 className="github-info-title">GitHub Repository Information</h1>
      <p className="black"><strong>Repository Name:</strong> {repoData.name}</p>
      <p className="black"><strong>Description:</strong> {repoData.description}</p>
      <p className="black"><strong>Owner:</strong> {repoData.owner && repoData.owner.login}</p>
      <p className="black"><strong>URL:</strong> <a href={repoData.html_url}>{repoData.html_url}</a></p>

      <div>
        <h2>Time Since Last Commit</h2>
        <p className="black"><strong>Last Commit:</strong> {formatTime(timeElapsed)}</p>
      </div>
    </div>
  );
};

export default GitHubInfo;
