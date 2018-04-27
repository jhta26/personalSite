import React from "react";
import AccordionComponent from "./AccordionComponent";

export default function ProjectComponent({ projectInfo, selectedProject }) {

  

  return (
    <div>
  {selectedProject===projectInfo.name?
    <div className="ProjectComponent col container">
      <div className="row projectNameDes">
        <h3 className="col projectNameAndFeatures ">
          {projectInfo.name || "N/A"}
        </h3>
        <AccordionComponent
          className="col projectNameAndFeatures"
          data={projectInfo.data || "N/A"}
        />
      </div>
      <div className="row projectNameDes">
        <img
          className="projectImage col animated fadeInLeft"
          src={projectInfo.image || "./resources/hsu.png"}
          alt="project photo"
        />
      </div>
    </div>:null
  }
  </div>
  );
}
