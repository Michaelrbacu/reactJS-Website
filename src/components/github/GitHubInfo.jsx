import React, { useState, useEffect } from 'react';
import './github.css';

const GitHubInfo = () => {
  const [repoData, setRepoData] = useState({});
  const [lastCommitDate, setLastCommitDate] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [languages, setLanguages] = useState({});
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Michaelrbacu/reactJS-Website')
      .then(response => response.json())
      .then(data => setRepoData(data))
      .catch(error => console.error('Error fetching repository data:', error));

    fetch('https://api.github.com/repos/Michaelrbacu/reactJS-Website/commits')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const lastCommitDate = new Date(data[0].commit.author.date);
          setLastCommitDate(lastCommitDate);
        }
      })
      .catch(error => console.error('Error fetching commit data:', error));

    fetch(repoData.languages_url)
      .then(response => response.json())
      .then(data => setLanguages(data))
      .catch(error => console.error('Error fetching languages:', error));

    fetch(repoData.contributors_url)
      .then(response => response.json())
      .then(data => setContributors(data))
      .catch(error => console.error('Error fetching contributors:', error));
  }, [repoData.languages_url, repoData.contributors_url]);

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

      <div>
        <h2>Additional Repository Information</h2>
        <p className="black"><strong>Repository Size:</strong> {repoData.size} KB</p>
        <p className="black"><strong>Stars:</strong> {repoData.stargazers_count}</p>
        <p className="black"><strong>Forks:</strong> {repoData.forks_count}</p>
        <p className="black"><strong>Watchers:</strong> {repoData.watchers_count}</p>
        <p className="black"><strong>Language Breakdown:</strong> {Object.keys(languages).map(lang => `${lang}: ${languages[lang]}`).join(', ')}</p>
        <p className="black"><strong>Contributors:</strong> {contributors.map(contributor => contributor.login).join(', ')}</p>
        <p className="black"><strong>Number of Open Issues:</strong> {repoData.open_issues_count}</p>
        <p className="black"><strong>Number of Pull Requests:</strong> {repoData.open_issues_count}</p>
        <p className="black"><strong>Default Branch:</strong> {repoData.default_branch}</p>
        <p className="black"><strong>License:</strong> {repoData.license ? repoData.license.name : 'None'}</p>
        <p className="black"><strong>Topics:</strong> {repoData.topics ? repoData.topics.join(', ') : 'None'}</p>
        <p className="black"><strong>Readme Content:</strong> {repoData.description}</p>
      </div>
    </div>
  );
};

export default GitHubInfo;
