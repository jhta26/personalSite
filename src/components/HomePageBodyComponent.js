import React from "react";
import "font-awesome/css/font-awesome.css";

export default function HomePageBodyComponent() {
  return (
    <div className="HomePageBodyComponent container col s12">
      <div className="row s12">
        <div className="imageContainer center-align col m6 l6">
          <div className="imageSquare row">
            <img
              className="col animated fadeInLeft"
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
              className="col animated fadeInRight"
              src={require("./resources/tennisPhoto.jpeg")}
              alt="tennis"
              height="200"
              width="207"
            />
          </div>
          <div className="imageSquare row">
            <img
              className="col animated fadeInLeft"
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
              <span className="turq">"</span>Everybody is a genius, but if you
              judge a fish by its ability to climb a tree, it will live its
              whole life believing that it is stupid.<span className="turq">
                "
              </span>
            </h5>
          </div>
          <div className="row">
            <a href="https://github.com/jhta26">
              <i
                className="col fa fa-github fa-4x"
                style={{ color: "black" }}
              />
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
    </div>
  );
}
