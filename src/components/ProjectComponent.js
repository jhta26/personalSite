import React from "react";
import AccordionComponent from "./AccordionComponent";

export default function ProjectComponent() {


  return (
    <div className="ProjectComponent">
      <AccordionComponent>
        <div className="accor">
          <div className="accorHead">Head 1</div>
          <div className="accorBody">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="accor">
          <div className="accorHead">Head 2</div>
          <div className="accorBody">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </AccordionComponent>
    </div>
  );
}
