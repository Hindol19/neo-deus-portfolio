import React from "react";
import "./Navbar.scss";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //The useEffect Hook does a specific task for the first time after loading.
    window.addEventListener("scroll", handleScroll);
    //This will detect when the user scrolls and call the "handelScroll" function
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
