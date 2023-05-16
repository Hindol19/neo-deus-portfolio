import React from "react";
import "./Experience.scss";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
function Experience() {
  return (
    <div className="exp-container">
      <div className="exp-layout">
        <div className="exp-card">
          <h1 className="exp-head">My Experience</h1>
          <div className="exp-text">
            <div className="left"></div>
            <div className="right">
              <ExperienceItem
                id={1}
                title={"Google Cloud Ready Facilitator Program"}
                desc={"hi hi hi hi hi hi hi "}
              />
              <ExperienceItem
                id={2}
                title={"Hacktoberfest 2022"}
                desc={"hi hi hi hi hi hi hi "}
              />
              <ExperienceItem
                id={3}
                title={"More to come"}
                desc={"hi hi hi hi hi hi hi "}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
