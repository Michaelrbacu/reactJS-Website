import React, { useState } from 'react';
import "./Projects.css";

const projectsData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed rhoncus nisi. Vestibulum eget mi nec elit euismod tincidunt.",
  },
  {
    title: "Project 2",
    description: "Nulla facilisi. Suspendisse sagittis, nulla in suscipit facilisis, metus massa ultrices lorem, ac interdum lorem quam a libero.",
  },
  {
    title: "Project 3",
    description: "Fusce ullamcorper, justo ac varius pulvinar, ex nisi varius lectus, quis bibendum odio ligula nec nunc.",
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
