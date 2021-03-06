import React from "react";

const data = {
  name: "Education",
  info: [
    { image: "./resources/westernMI.jpg" },
    {
      data:
        "Western Michigan University \n B.S. Business Management \n 2008-2013",
    },
  ],
};

export default function ResumeEducationComponent() {
  return (
    <div className="ResumeTechnologiesComponent animated fadeInDown">
      <div className="card ">
        <div className="card-action">
          <li className="eduDiv divider" tabindex="-1" />
          <h4
            className="tooltipped activator waves-effect waves-block waves-light teal-text"
            data-position="bottom"
            data-tooltip=""
          >
            Education
          </h4>
          <li className="eduDiv divider" tabindex="-1" />
        </div>
        <div className="card-reveal">
          <span className="card-title teal-text ">
            <i className="material-icons right">close</i>
          </span>

          <img
            className="schoolPic circle resume col  animated fadeIn"
            src={require("../resources/westernMI.jpg")}
            alt="resume"
            height="120"
            width="230"
          />
          <p className="schoolName teal-text center-align">
            Western Michigan University
          </p>
          <li className="schoolDiv divider" tabindex="-1" />
          <p className="schoolDate teal-text">2013</p>
          <p className="schoolCert teal-text center-align">
            B.S. Business Management
          </p>

          <img
            className="schoolPic circle resume col  animated fadeIn"
            src={require("../resources/udacity.png")}
            alt="resume"
            height="120"
            width="230"
          />
          <p className="schoolName teal-text center-align">Udacity</p>
          <li className="schoolDiv divider" tabindex="-1" />
          <p className="schoolDate teal-text">2017</p>
          <p className="schoolCert teal-text center-align">
            iOS development, Digital Marketing
          </p>
        </div>
      </div>
    </div>
  );
}
