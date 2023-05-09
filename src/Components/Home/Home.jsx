import React from "react";
import Pic from "../../Assets/Arpan3.jpg";
import "./Home.scss";
function Home() {
  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="left">
          <div className="top">I am Arpan De</div>
          <div className="bottom">
            I am an android developer who specializes in creating mobile
            applications for the Android operating system.
          </div>
        </div>
        <div className="right">
          <img src={Pic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
