import React from "react";
import "../styles/ProjectsPage.css";
import projectsData from "../../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1 className="page-title">Research Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
