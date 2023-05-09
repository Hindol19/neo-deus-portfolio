import React from "react";
import "./SkillItem.scss";
function SkillItem({ title, image }) {
  return (
    <div className="skillItem">
      <h1>{title}</h1>
      <img src={image} alt="" />
    </div>
  );
}

export default SkillItem;
