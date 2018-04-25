import React from "react";
import AccordionComponent from "./AccordionComponent";
import Image from "./resources/basketballPhoto.jpg";

export default function ProjectComponent(props) {
  return (
    <div className="ProjectComponent row">
      <div className="col">
        <img
          className="col animated fadeInLeft"
          src={Image}
          alt="basketball"
          height="400"
          width="400"
        />
      </div>
      <div className="col projectNameDes">
        <h3>GLANCE</h3>
        <AccordionComponent data={props.data} />
      </div>
    </div>
  );
}
