import { useNavigate } from "react-router-dom";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectItem.scss";
import Arpan from "../../../Assets/Arpan3.jpg";
function ProjectItem({ project }) {
  const navigate = useNavigate();
  const navigateToExternalWebsite = () => {
    window.location.href = project.git;
  };
  return (
    <div className="projectItem-container">
      <div className="project-image">
        <img src={Arpan} alt="" />
        {/* <div className="img">dfd</div> */}
        <div className="rack">
          <h1 className="project-title">{project.title}</h1>
          <GitHubIcon onClick={navigateToExternalWebsite} />
        </div>
      </div>
      <div className="project-desc">{project.desc1}</div>
      <div className="project-desc">{project.desc2}</div>
    </div>
  );
}

export default ProjectItem;
