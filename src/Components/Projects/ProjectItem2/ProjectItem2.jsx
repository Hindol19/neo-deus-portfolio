import { useNavigate } from "react-router-dom";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Arpan from "../../../Assets/Arpan3.jpg";
import "./ProjectItem2.scss";
const ProjectItem2 = ({ project }) => {
  const navigate = useNavigate();
  const navigateToExternalWebsite = () => {
    window.location.href = project.git;
  };
  return (
    <div className="projectItem2-container">
      <div className="left">
        <div className="project-image">
          <img src={Arpan} alt="" />
          {/* <div className="img">dfd</div> */}
          <div className="rack">
            <h1 className="project-title">{project.title}</h1>
            {/* <GitHubIcon onClick={navigateToExternalWebsite} /> */}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="up">
          <p>{project.desc1}</p>
          <p>{project.desc2}</p>
        </div>
        <div className="down">
          <div className="git-button">
            See Project
            <GitHubIcon onClick={navigateToExternalWebsite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem2;
