import React from "react";
import "./ExperienceItem.scss";
function ExperienceItem({ id, title, desc }) {
  return (
    <div className="exp-item">
      <div className="exp-num">{id}</div>
      <div className="exp-box">{title}</div>
    </div>
  );
}

export default ExperienceItem;
