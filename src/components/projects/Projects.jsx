import React, { useState, useEffect } from 'react';
import "./Projects.css";

const projectsData = [ 
  {
    title: "This website",
    description: <a href='https://github.com/Michaelrbacu/reactJS-Website'>https://github.com/Michaelrbacu/reactJS-Website</a>,
  },
  {
    title: "My Senior Project",
    description: <a href='https://github.com/Michaelrbacu/SeniorProject'>https://github.com/Michaelrbacu/SeniorProject</a>,
  },
  {
    title: "Sorry the Board game built in JavaFX",
    description: <a href='https://github.com/Michaelrbacu/CPT-237'>https://github.com/Michaelrbacu/CPT-237</a>,
  },
  {
    title: "SQL assignments and projects.",
    description: <a href='https://github.com/Michaelrbacu/IST-278'>https://github.com/Michaelrbacu/IST-278</a>,
  },
  {
    title: "JS web programming",
    description: <a href='https://github.com/Michaelrbacu/IST-239'>https://github.com/Michaelrbacu/IST-239</a>,
  },
  {
    title: "Basic web programming",
    description: <a href='https://github.com/Michaelrbacu/IST-226'>https://github.com/Michaelrbacu/IST-226</a>,
  },
 
];



const Projects = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const projectsPerSet = 3;
  const totalSets = Math.ceil(projectsData.length / projectsPerSet);

  const nextSet = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === totalSets - 1 ? 0 : prevIndex + 1
    );
  };

  const getCurrentProjects = () => {
    const startIndex = currentSetIndex * projectsPerSet;
    return projectsData.slice(startIndex, startIndex + projectsPerSet);
  };

  return (
    <div className="container">
      <h1 className="heading">Projects I've Built:</h1>
      <h3>These include projects I built in classes and for practice.</h3>
      <br />

      <div className="projects-grid">
        {getCurrentProjects().map((project, index) => (
          <div
            key={index}
            className={`project visible`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <button onClick={nextSet}>Next Projects</button>
    </div>
  );
};

export default Projects;