import React from "react";
import { Card, CardTitle } from "react-materialize";
import { aboutMeText } from "./assets/aboutMe";
export default function AboutMeBodyComponent() {
  return (
    <div className="AboutMeComponent container col">
      <div className="aboutMeComponent">
        <div className="col m4">
          <img
            className="resume col circle animated fadeIn"
            src={require("./resources/profilePic.png")}
            alt="resume"
            height="200"
          />
        </div>
        <div className="col m8">
          <h5>WHO AM I?</h5>
          <p>{aboutMeText.whoAmI}</p>
        </div>
      </div>

      <li className="divider container" tabindex="-1" />
      <div className="aboutMeComponent">
        <div className="col">
          <h5>WHERE AM I FROM?</h5>
          <p>{aboutMeText.whereAmIFrom}</p>
        </div>
        <div className="col">
          <img
            className="resume col circle animated fadeIn"
            src={require("./resources/novi.jpg")}
            alt="resume"
            height="100"
            width="200"
          />
          <img
            className="resume col circle animated fadeIn"
            src={require("./resources/westernMI.jpg")}
            alt="resume"
            height="100"
            width="200"
          />
        </div>
      </div>
      <li className="divider container" tabindex="-1" />
    </div>
  );
}
