import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "font-awesome/css/font-awesome.css";

export default function HomePageBodyComponent() {
  return (
    <div className="HomePageBodyComponent container">
      <div className="row">
        <div className="imageContainer center-align col m6 l6">
          <div className="imageSquare row">
            <img
              className="col"
              src={require("./resources/basketballPhoto.jpg")}
              alt="basketball"
              height="200"
              width="207"
            />
            <div className="filler1 col" />
          </div>
          <div className="imageSquare row ">
            <div className="filler2 col" />
            <img
              className="col"
              src={require("./resources/tennisPhoto.jpeg")}
              alt="tennis"
              height="200"
              width="207"
            />
          </div>
          <div className="imageSquare row">
            <img
              className="col"
              src={require("./resources/boxingPhoto.jpg")}
              alt="basketball"
              height="200"
              width="207"
            />
            <div className="filler2 col" />
          </div>
        </div>
        <div className="col linksContainer m6 l6">
          <div className="row">
            <h5 className="quote">
              "Everybody is a Genius. But If You Judge a Fish by Its Ability to
              Climb a Tree, It Will Live Its Whole Life Believing that It is
              Stupid." - <span className="turq">Einstein</span>
            </h5>
          </div>
          <div className="row">
          <a href="https://github.com/jhta26">
            <i className="col fa fa-github fa-4x" style={{color:"black"}} />
          </a>
          <a href="https://linkedin.com/in/jasonhsu90">
            <i className=" col fa fa-linkedin fa-4x"  style={{color:"black"}}/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
