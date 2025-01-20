import React from "react";
import "../styles/ProjectsPage.css";
import projectsData from "../../data/projectsData";

const ProjectsPage = () => {
  const currentProjects = projectsData.filter((project) => project.status === "current");
  const pastProjects = projectsData.filter((project) => project.status === "past");

  return (
    <div className="projects-page">
      <h1 className="page-title">Research Projects</h1>

      <section>
        <h2 className="section-title">Current Projects</h2>
        <div className="projects-container">
          {currentProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-text">
                <h2 className=" cur-project-title project-title" style={{ textDecoration: "underline" }}>
                  {project.title}
                </h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Past Projects</h2>
        <div className="projects-container">
          {pastProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-text">
                <h2 className="past-project-title project-title" style={{ textDecoration: "underline" }}>
                  {project.title}
                </h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
