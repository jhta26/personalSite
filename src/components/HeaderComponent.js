import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <nav className="navigation white container z-depth-0">
      <div className="nav-wrapper white">
        <Link to={"/"} className="black-text">
          <a className="black-text white left nameLink">
            JASON <span className="turq">H</span>{" "}
            <img
              src={require("./resources/hsu.png")}
              alt="hsu"
              height="30"
              width="30"
            />
          </a>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={"/projects"} className="black-text">
              PROJECTS
            </Link>
          </li>
          <li>
           <Link to={"/aboutMe"} className="black-text">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to={"/resume"} className="black-text">
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
