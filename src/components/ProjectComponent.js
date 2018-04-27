import React from "react";
import AccordionComponent from "./AccordionComponent";

export default function ProjectComponent({ projectInfo, selectedProject }) {
  var allInfo = projectInfo.slice();
  var selected = allInfo.filter(project => project.name == selectedProject);
  

  return (
    <div className="ProjectComponent col container">
      <div className="row projectNameDes">
        <h3 className="col projectNameAndFeatures ">
          {selected[0].name || "N/A"}
        </h3>
        <AccordionComponent
          className="col projectNameAndFeatures"
          data={selected[0].data || "N/A"}
        />
      </div>
      <div className="row projectNameDes">
        <img
          className="projectImage col animated fadeInLeft"
          src={selected[0].image || "./resources/hsu.png"}
          alt="project photo"
        />
      </div>
    </div>
  );
}
