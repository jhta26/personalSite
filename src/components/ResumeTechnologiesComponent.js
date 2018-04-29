import React from "react";

export default function ResumeTechnologiesComponent() {
  return (
    <div className="ResumeTechnologiesComponent">
      <div className="techRow">
        <img
          className="techRow animated fadeIn"
          src={require("./resources/HTMLCSSJS.png")}
          alt="resume"
          height="70"
        />
        <img
          className="techRow animated fadeIn"
          src={require("./resources/react.jpg")}
          alt="resume"
          height="70"
        />
        <img
          className="techRow animated fadeIn"
          src={require("./resources/reactNative.jpeg")}
          alt="resume"
          height="70"
        />
        <img
          className="techRow animated fadeIn"
          src={require("./resources/node.png")}
          alt="resume"
          height="70"
        />
        <img
          className="techRow animated fadeIn"
          src={require("./resources/postgresql.png")}
          alt="resume"
          height="70"
        />
        <img
          className="techRow animated fadeIn"
          src={require("./resources/mochaChai.png")}
          alt="resume"
          height="70"
        />
        <img
          className="techRow animated fadeIn"
          src={require("./resources/redux.png")}
          alt="resume"
          height="70"
        />
      </div>
    </div>
  );
}
