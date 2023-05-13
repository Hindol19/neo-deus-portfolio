import React from "react";
import "./Projects.scss";
import ProjectItem from "./ProjectItem/ProjectItem";
function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-layout">
        <div className="projects-card">
          <h1 className="projects-head">My Projects</h1>
          <div className="projects-text">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
