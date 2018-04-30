import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent({ onCloseProject }) {
  var _handleCloseProject = () => {
    onCloseProject();
  };

  return (
    <div>
      <nav className="navigation white container m12 s12 z-depth-0">
        <div className="nav-wrapper  white s12">
          <Link to={"/"} className="black-text" onClick={_handleCloseProject}>
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

          <i className="material-icons">menu</i>

          <ul id="nav-mobile " className="right s12">
            <li>
              <Link to={"/projects"} className="black-text">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to={"/aboutMe"}
                className="black-text"
                onClick={_handleCloseProject}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to={"/resume"}
                className="black-text"
                onClick={_handleCloseProject}
              >
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
