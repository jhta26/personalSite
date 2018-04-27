import React from "react";
import AccordionComponent from "./AccordionComponent";


export default function ProjectComponent({projectInfo,selectedProject}) {
  var allInfo = projectInfo.slice()
  var selected = allInfo.filter(project=>project.name!==selectedProject)
  
  console.log(selected,'>>>>>>>>',projectInfo[0])
  return (
    <div className="ProjectComponent row">
      <div className="col">
        <img
          className="col animated fadeInLeft"
          src={selected[0].image||'./resources/hsu.png'}
          alt="project photo"
          height="400"
          width="400"
        />
      </div>
      <div className="col projectNameDes">
        <h3>{selected[0].name||'N/A'}</h3>
        <AccordionComponent data={selected[0].data||'N/A'} />
      </div>
    </div>
  );
}
