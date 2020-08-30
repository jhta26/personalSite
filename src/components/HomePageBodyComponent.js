import React from "react";
import "font-awesome/css/font-awesome.css";

export default function HomePageBodyComponent() {
  return (
    <div className="row center-align  s12 container">
      <div className="center-align  col s12 m6">
        <div className=" row">
          <img
            className="col animated fadeInLeft s6 m6"
            src={require("./resources/basketballPhoto.jpg")}
            alt="basketball"
            height="200"
            width="207"
          />
          <div className="col s6 m6" />
        </div>
        <div className="row ">
          <div className="col s6 m6" />
          <img
            className="col animated fadeInRight s6 m6"
            src={require("./resources/tennisPhoto.jpeg")}
            alt="tennis"
            height="200"
            width="207"
          />
        </div>
        <div className="row ">
          <img
            className="col animated fadeInLeft s6 m6"
            src={require("./resources/boxingPhoto.jpg")}
            alt="basketball"
            height="200"
            width="207"
          />
          <div className="col s6 m6" />
        </div>
      </div>
      <div className="col linksContainer m6 l6 s12 offset-s3">
        <div className="row">
          <h5 className="quote">
            <span className="turq s12 m6"></span>Software engineer with 2 1/2
            years of React Native experience. I love building apps and learning
            new tech!<span className="turq"></span>
          </h5>
        </div>
        <div className="row">
          <a href="https://github.com/jhta26">
            <i className="col fa fa-github fa-4x" style={{ color: "black" }} />
          </a>
          <a href="https://linkedin.com/in/jasonhsu90">
            <i
              className=" col fa fa-linkedin fa-4x"
              style={{ color: "black" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
