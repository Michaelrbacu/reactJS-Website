import React, { useState, useEffect } from "react";
import "./github.css";
import repoImg1 from "./ghimages/repoimg1.jpg";
import repoImg2 from "./ghimages/darrel-collins-SiCHD6EN3aU-unsplash.jpg";
import repoImg3 from "./ghimages/brigitta-schneiter-g4D9zsI519g-unsplash.jpg";
import repoImg4 from "./ghimages/josh-hild-XKNoL2GQg5o-unsplash.jpg";
import repoImg5 from "./ghimages/leonardo-martins-YNJsgAivf8A-unsplash.jpg";
import repoImg6 from "./ghimages/nick-fewings-hYaWr_9yiJ8-unsplash.jpg";
import repoImg7 from "./ghimages/nick-fewings-tfPofukAy3Y-unsplash.jpg";
import repoImg8 from "./ghimages/paul-pastourmatzis-OrRZp6-d8zU-unsplash.jpg";
import repoImg9 from "./ghimages/alberto-restifo-Ni4NgA64TFQ-unsplash.jpg";
import repoImg10 from "./ghimages/w-s-coda-vho6zT9D_c8-unsplash.jpg";
import repoImg11 from "./ghimages/premium_photo-1673240367277-e1d394465b56.jpg";
import { lazy } from "react";

const GitHubInfo = () => {
  const [repos, setRepos] = useState([]);
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState({});
  const repoImgArray = [
    repoImg1,
    repoImg2,
    repoImg3,
    repoImg4,
    repoImg5,
    repoImg6,
    repoImg7,
    repoImg8,
    repoImg9,
    repoImg10,
    repoImg11,
  ];

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Michaelrbacu/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) =>
        console.error("Error fetching repository data:", error)
      );
  }, []);

  useEffect(() => {
    const updateElapsedTime = () => {
      const now = new Date().getTime();

      for (const repo of repos) {
        if (expandedRepo === repo) {
          const lastCommitDate = new Date(repo.pushed_at).getTime();
          if (lastCommitDate) {
            const timeDiff = now - lastCommitDate;
            setTimeElapsed((prevTimeElapsed) => ({
              ...prevTimeElapsed,
              [repo.id]: timeDiff,
            }));
          }
        }
      }

      requestAnimationFrame(updateElapsedTime);
    };

    updateElapsedTime(); // Initial call
  }, [expandedRepo, repos]);

  const toggleRepoExpansion = (repo) => {
    if (expandedRepo === repo) {
      setExpandedRepo(null);
    } else {
      setExpandedRepo(repo);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = time % 1000;

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} ms`;
  };

  return (
    <div className="github-info-container">
      <h1 className="github-info-title">GitHub Repository Information</h1>
      <h4>This page will take a few extra seconds to load everything. Clicking all the different repositorys will help. </h4>
      <div className="github-repo-container">
        {repos.map((repo, index) => (
          <div
            key={repo.id}
            className={`github-repo-box ${
              expandedRepo === repo ? "expanded" : ""
            }`}
            onClick={() => toggleRepoExpansion(repo)}
            style={{
              backgroundImage:
                expandedRepo === repo
                  ? `url(${repoImgArray[index]})`
                  : `url(${repoImgArray[index]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              color: expandedRepo === repo ? "white" : "black",
            }}
            loading="lazy"
          >
            <p className="white">
              <strong>Repository Name:</strong> {repo.name}
            </p>
            {expandedRepo === repo && (
              <div className="github-repo-details">
                <h2>Additional Repository Information</h2>
                <div className="repo-details-grid">
                  <div>
                    <p className="white">
                      <strong>Last Commit:</strong>{" "}
                      {formatTime(timeElapsed[repo.id] || 0)}
                    </p>
                  </div>
                  <div>
                    <strong>Forks:</strong>
                    <p className="white">{repo.forks_count}</p>
                  </div>
                  <div>
                    <strong>Watchers:</strong>
                    <p className="white">{repo.watchers_count}</p>
                  </div>
                  <div>
                    <strong>Open Issues:</strong>
                    <p className="white">{repo.open_issues_count}</p>
                  </div>
                  <div>
                    <strong>Pull Requests:</strong>
                    <p className="white">{repo.open_issues_count}</p>
                  </div>
                  <div>
                    <strong>Default Branch:</strong>
                    <p className="white">{repo.default_branch}</p>
                  </div>
                  <div>
                    <strong>License:</strong>
                    <p className="white">
                      {repo.license ? repo.license.name : "None"}
                    </p>
                  </div>
                  <div>
                    <strong>Topics:</strong>
                    <p className="white">
                      {repo.topics ? repo.topics.join(", ") : "None"}
                    </p>
                  </div>
                  <div>
                    <strong>Readme Content:</strong>
                    <p className="white">{repo.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <footer className="github-footer">
        <p className="github-photo-credit" onClick={togglePopup}>
          Photo credit
        </p>
      </footer>

      {showPopup && (
        <div className="popup">
          <p className="black">
            <a
              href="https://unsplash.com/photos/Jztmx9yqjBw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 1
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/SiCHD6EN3aU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 2
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/g4D9zsI519g"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 3
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/XKNoL2GQg5o"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 4
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/YNJsgAivf8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 5
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/hYaWr_9yiJ8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 6
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/tfPofukAy3Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 7
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/OrRZp6-d8zU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 8
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/Ni4NgA64TFQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 9
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/vho6zT9D_c8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 10
            </a>
          </p>
          <p className="black">
            <a
              href="https://unsplash.com/photos/7VotVatHM7Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image 11
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GitHubInfo;
