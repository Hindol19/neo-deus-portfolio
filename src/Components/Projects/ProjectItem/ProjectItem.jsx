import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectItem.scss";
import Arpan from "../../../Assets/Arpan3.jpg";
function ProjectItem() {
  return (
    <div className="projectItem-container">
      <div className="project-image">
        <img src={Arpan} alt="" />
        {/* <div className="img">dfd</div> */}
        <div className="rack">
          <h1 className="project-title">Project 1</h1>
          <GitHubIcon />
        </div>
      </div>
      <div className="project-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        unde, cumque amet nisi necessitatibus maxime, minima officia recusandae
        esse sit numquam quis nemo deleniti doloribus corporis cupiditate.
        Autem, impedit minus.
      </div>
    </div>
  );
}

export default ProjectItem;
