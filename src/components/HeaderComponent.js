import React, { Component } from "react";

export default function HeaderComponent() {
  return (
      <nav className="navigation white container z-depth-0">
      <div className="nav-wrapper white">
        <a href="#" className="black-text white left nameLink">
         JASON  <span className="turq">H</span>   <img
              
              src={require("./resources/hsu.png")}
              alt="hsu"
              height="30"
              width="30"
            />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="badges.html" className="black-text">
              RESUME
            </a>
          </li>
          <li>
            <a href="collapsible.html" className="black-text">
              ABOUT ME
            </a>
          </li>
             <li>
            <a href="badges.html" className="black-text">
              PROJECTS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
