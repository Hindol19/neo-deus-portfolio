import React from "react";
import "./Projects.scss";
import ProjectItem from "./ProjectItem/ProjectItem";
function Projects() {
  const projList = [
    {
      title: "SHOP APP (Flutter, Dart, Firebase)",
      desc1:
        "Developed a Shop app using Flutter and Dart that enables users to browse through a collection of products, add them to a shopping cart, and confirm their order with a checkout page.",
      desc2:
        "Implemented various features such as 'Add to Cart' with confirmation, 'Favorite' filter, 'Order Now' page, and 'Manage Products' page for admin to add, delete, and modify the product information. ",
      git: "https://github.com/neo-deus/Shop-App",
    },
    {
      title: "MEALS APP (Flutter, Dart)",
      desc1:
        "Developed a meals app using Flutter and Dart that allows users to browse through a collection of meals and implemented various filters in the settings to allow users to customize the app according to their dietary requirements or preferences. ",
      desc2:
        "Added a 'Favorite' tab to enable users to save their favorite meals and access them quickly.  ",
      git: "https://github.com/neo-deus/Meals-App",
    },
    {
      title: "DICTIONARY APP (Flutter, Dart, Owlbot Dictionary API)",
      desc1:
        "Developed a dictionary app using Flutter and Dart that integrates with the Owlbot API to provide word definitions, synonyms, and example sentences.  ",
      desc2:
        "Utilized Dart's asynchronous programming features to ensure smooth and responsive user experience when fetching data from the API. ",
      git: "https://github.com/neo-deus/Dictionary-App",
    },
    {
      title: "EXPENSE TRACKER (Flutter, Dart)",
      desc1:
        "Developed an Expense App to track your expenses. It separately tracks the expenses of the past week and analyses the spending patterns on bar chart.",
      desc2: "",
      git: "https://github.com/neo-deus/Expense-Tracker",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-layout">
        <div className="projects-card">
          <h1 className="projects-head">My Projects</h1>
          <div className="projects-text">
            {projList.map((item) => (
              <ProjectItem project={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
