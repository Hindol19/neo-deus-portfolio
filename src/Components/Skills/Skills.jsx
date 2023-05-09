import React from "react";
import SkillItem from "./SkillItem/SkillItem";
import "./Skills.scss";

import Python from "../../Assets/Logos/Python.png";
import Java from "../../Assets/Logos/Java.png";
import C from "../../Assets/Logos/C.png";
import Cpp from "../../Assets/Logos/C++.png";
import Dart from "../../Assets/Logos/Dart.png";
import Sql from "../../Assets/Logos/Sql.png";
import AndroidStudio from "../../Assets/Logos/AndroidStudio.png";
import VSCode from "../../Assets/Logos/VSCode.png";
import GitHub from "../../Assets/Logos/GitHub.png";
import Flutter from "../../Assets/Logos/Flutter.png";
import Firebase from "../../Assets/Logos/Firebase.png";
import GCP from "../../Assets/Logos/GCP.png";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-layout">
        <div className="skills-card">
          <h1 className="skills-head">My Skills</h1>
          <div className="skills-text">
            <p className="languages">
              <div className="title">LANGUAGES</div>
              <div className="skills">
                <SkillItem title={"Python"} image={Python} />
                <SkillItem title={"C"} image={C} />
                <SkillItem title={"C++"} image={Cpp} />
                <SkillItem title={"SQL"} image={Sql} />
                <SkillItem title={"DART"} image={Dart} />
                <SkillItem title={"JAVA"} image={Java} />
              </div>
            </p>
            <p className="tools">
              <div className="title">TOOLS / FRAMEWORKS</div>
              <div className="skills">
                <SkillItem title={"Android Studio"} image={AndroidStudio} />
                <SkillItem title={"VS Code"} image={VSCode} />
                <SkillItem title={"GitHub"} image={GitHub} />
                <SkillItem title={"GCP"} image={GCP} />
                <SkillItem title={"Flutter"} image={Flutter} />
                <SkillItem title={"Firebase"} image={Firebase} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
