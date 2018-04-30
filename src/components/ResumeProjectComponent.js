import React from "react";
import {Link} from 'react-router-dom'
export default function ResumeProjectComponent() {
  return (
    <div className="ResumeTechnologiesComponent animated fadeInDown">
      <div className="card ">
        <div className="card-action">
        <li className="eduDiv divider" tabindex="-1" />
        <Link to={"/projects"} className="black-text">
          <h4 className="tooltipped activator waves-effect waves-block waves-light teal-text" data-position="bottom" data-tooltip="Click Here">
            Projects
          </h4>
          </Link>
          <li className="eduDiv divider" tabindex="-1" />
        </div>
 
      </div>
    </div>
  );
}

