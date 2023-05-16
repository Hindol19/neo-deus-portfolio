import React from "react";
import "./Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-layout">
        <div className="left footer-content">
          <span>Home</span>
          <span>About</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Experience</span>
          <span>Contact</span>
        </div>
        <div className="right footer-content">
          <h1>My Socials</h1>
          <span>
            <LinkedInIcon />
          </span>
          <span>
            <GitHubIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          {/* <span>Insta</span> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
