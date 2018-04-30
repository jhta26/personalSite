import React from "react";

export default function ResumeProjectComponent() {
  return (
    <div className="ResumeTechnologiesComponent animated fadeInDown">
      <div className="card ">
        <div className="card-action">
        <li className="eduDiv divider" tabindex="-1" />
          <h4 className="tooltipped activator waves-effect waves-block waves-light teal-text" data-position="bottom" data-tooltip="Click Here">
            Projects
          </h4>
          <li className="eduDiv divider" tabindex="-1" />
        </div>
        <div className="card-reveal">
          <span className="card-title teal-text ">
            <i className="material-icons right">close</i>
          </span>

          <img
            className="resume col  animated fadeIn"
            src={require("./resources/westernMI.jpg")}
            alt="resume"
            height="120"
            width="230"
          />
          <p className="teal-text center-align">Western Michigan University</p>
          <p className="teal-text center-align">B.S. Business Management</p>
          <p className="teal-text center-align">2013</p>
        </div>
      </div>
    </div>
  );
}
