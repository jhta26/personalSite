import React from "react";

export default function ResumeProjectComponent() {
  return (
    <div className="ResumeTechnologiesComponent animated fadeInDown">
      <div className="card ">
        <div className="card-action">
          <h4 className="activator waves-effect waves-block waves-light teal-text">
            Projects
          </h4>
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
