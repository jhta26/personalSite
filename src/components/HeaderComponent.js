import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent({ onCloseProject }) {
  var _handleCloseProject = () => {
    onCloseProject();
  };

  return (
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
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile " className="right s12 hide-on-small-only">
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
    <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </nav>


  );
}
