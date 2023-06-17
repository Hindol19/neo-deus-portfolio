import React from "react";
import "./About.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Ill from "../../Assets/ill.jpg";
function About() {
  return (
    <div className="about-container">
      <div className="about-layout">
        <div className="left">
          <img src={Ill} alt="" />
        </div>
        <div className="right">
          <h1 className="about-head">About Me</h1>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum pariatur deleniti cumque assumenda adipisci nobis
              dolorum eaque obcaecati. Qui quia eum sapiente dolor impedit?
              Temporibus, officiis animi! Porro, sed suscipit.
            </p>
            <p className="para2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              esse quae consequatur beatae odio, obcaecati eius exercitationem
              laborum?
            </p>
          </div>
          <div className="icons">
            <LinkedInIcon />
            <TwitterIcon />
            <EmailIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
