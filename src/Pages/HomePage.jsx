import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Experience from "../Components/Experience/Experience";
import Contact from "../Components/Contact/Contact";
const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
