import React, { useState } from 'react';
import "./Projects.css";

const projectsData = [
  {
    title: " Sorry the Board game built in JavaFX",
    description: "https://github.com/Michaelrbacu/CPT-237",
  },
  {
    title: "Project 2",
    description: "",
  },
  {
    title: "Project 3",
    description: "",
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <h1 className="heading">Projects I've built:</h1>

      {projectsData.map((project, index) => (
        <div
          key={index}
          className={`project ${
            index === currentProjectIndex ? "visible" : "invisible"
          }`}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}

      <button onClick={nextProject}>Next Project</button>
    </div>
  );
};

export default Projects;
