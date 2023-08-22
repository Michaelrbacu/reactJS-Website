import React from 'react';
import "./Projects.css";
import projectImage1 from "./project-image-url-1.png";
import projectImage2 from "./project-image-url-2.png";
import projectImage3 from "./project-image-url-3.png";
import projectImage4 from "./project-image-url-4.png";
import projectImage5 from "./project-image-url-5.png";
import projectImage6 from "./project-image-url-6.png";

const projectsData = [
  {
    title: "This website",
    description: "https://github.com/Michaelrbacu/reactJS-Website",
    image: projectImage1 , // Update with correct path
  },
  {
    title: "My Senior Project",
    description: "https://github.com/Michaelrbacu/SeniorProject",
    image: projectImage2,
  },
  {
    title: "Sorry the Board game built in JavaFX + Java Assignments",
    description: "https://github.com/Michaelrbacu/CPT-237",
    image: projectImage3,
  },
  {
    title: "SQL assignments and projects.",
    description: "https://github.com/Michaelrbacu/IST-278",
    image: projectImage4,
  },
  {
    title: "JS web programming",
    description: "https://github.com/Michaelrbacu/IST-239",
    image: projectImage5,
  },
  {
    title: "Basic web programming",
    description: "https://github.com/Michaelrbacu/IST-226",
    image: projectImage6,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2 className="heading">Projects I've Built:</h2>
      <h3>These include projects I built in classes and for practice.</h3>
      <br />

      <div className="contents">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`product`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={project.image} alt={`Project: ${project.title}`} />
            <div className="text">
              <h3>{project.title}</h3>
              <a href={project.description}>GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Projects;
