import React from "react";

export default function ResumePageLayout(props) {
  return (
    <div className="PageLayout white">
      {props.children[0]}
      <li className="divider container" tabindex="-1" />
      <div className="resumeContainer">
        <div className="col container">
          <div className="row">
            <div className="col l4 m12 s12 ">{props.children[1]}</div>
            <div className="col l4 m12 s12 ">{props.children[2]}</div>
            <div className="col l4 m12 s12 ">{props.children[3]}</div>
          </div>
          <div className="row ">
            <div className="col l4 m12 s12 ">{props.children[4]}</div>
            <div className="col l4 m12 s12 ">{props.children[5]}</div>
            <div className="col l4 m12 s12 ">{props.children[6]}</div>
          </div>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        </div>
      </div>
    </div>
  );
}
