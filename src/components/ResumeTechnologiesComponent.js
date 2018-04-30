import React from "react";

export default function ResumeTechnologiesComponent() {
  return (
    <div className="ResumeTechnologiesComponent animated fadeInUp">
      <div className="card teal lighten-2">
        <div className="card-action">

          <span className="activator waves-effect waves-block waves-light white-text">
            <h4 className="tooltipped activator waves-effect waves-block waves-light white-text" data-position="bottom" data-tooltip="Click Here">
              Technologies
            </h4>
          </span>
           <li className="workDiv divider" tabindex="-1" />
        </div>
        <div className="card-reveal teal lighten-2">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <img
            className="resume col animated fadeIn"
            src={require("./resources/HTMLCSSJS.png")}
            alt="resume"
            height="70"
            width="200"
          />
          <img
            className="resume circle col  animated fadeIn"
            src={require("./resources/react.jpg")}
            alt="resume"
            height="70"
            width="200"
          />
          <img
            className="resume circle col animated fadeIn"
            src={require("./resources/reactNative.jpeg")}
            alt="resume"
            height="70"
            width="200"
          />
          <img
            className="resume circle col animated fadeIn"
            src={require("./resources/redux.png")}
            alt="resume"
            height="70"
            width="200"
          />
          <img
            className="resume circle col animated fadeIn"
            src={require("./resources/postgresql.png")}
            alt="resume"
            height="70"
            width="200"
          />
          <img
            className="resume circle col animated fadeIn"
            src={require("./resources/heroku.png")}
            alt="resume"
            height="70"
            width="200"
          />
          <img
            className="resume col animated fadeIn"
            src={require("./resources/mochaChai.png")}
            alt="resume"
            height="70"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}
