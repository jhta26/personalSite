
import React from "react";

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
          <p>
            My name is Jason Hsu and I'm a software engineer. I love building
            web and mobile apps and I'm excited to learn new technologies and
            frameworks. I got into tech because I was attracted to an industry
            where I could really flex my creative muscles. I'm attracted to the
            idea of going to work, learning as much as I can and then coming
            home and using what I learned on my own side projects. I most
            recently completed an internship for s2e consulting where I helped
            create a money management app using React Native, React.Js,Redux,
            Apollo GraphQL. Prior to that I created a mobile app called Glance
            that lets people coordinate there meetups by showing the location of
            all participants. I'm currently looking for my next step. I would
            love to join an innovative company where I could really make an
            impact with my creativity.
          </p>
        </div>
      </div>
      <li className="divider container" tabindex="-1" />
      <div className="aboutMeComponent">
        <div className="col">
          <h5>WHAT DO I LIKE TO DO?</h5>
          <p>
            I follow almost every major sport esp basketball, UFC. I love to
            play basketball, tennis, and box. I try to stay active and go to the
            gym as much as I can but I also love to eat. I like going out at
            night with friends. I'm a pretty big movie buff. I like doing
            codewars/codefights/leetcode problems a strange amount.
          </p>
        </div>
        <div className="col">
          <img
            className="resume col circle animated fadeIn"
            src={require("./resources/cocktails.jpeg")}
            alt="resume"
            height="100"
            width="200"
          />
          <img
            className="resume col circle animated fadeIn"
            src={require("./resources/ufc.jpeg")}
            alt="resume"
            height="100"
            width="200"
          />
        </div>
      </div>
      <li className="divider container" tabindex="-1" />
      <div className="aboutMeComponent">
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
        <div className="col">
          <h5>WHERE AM I FROM?</h5>
          <p>
            I was born in NY, raised in Novi, MI, and I went to college at
            Western Michigan University. I had to get out of the cold Michigan
            weather so I moved to San Francisco in July of 2017 to pursue a
            career in tech.
          </p>
        </div>
      </div>
      <li className="divider container" tabindex="-1" />
 
    </div>
  );
}
