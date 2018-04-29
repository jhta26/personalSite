import React from "react";

export default function ResumeEducationComponent() {
  return (
    <div className="ResumeEducationComponent">
      <div className="titleDate">
        <p className="title">
          B.S. Business Management, Western Michigan University
        </p>

        <p className="resumeDate">2008-2013</p>
      </div>
<div class='card'>
  <div class='card-content'>
    Content
  </div>

  <div class='card-action'>
    <a class='btn activator'>
      <span class='activator'>Register open reveal</span>
      <i>test i tag activator</i>
    </a>
  </div>

  <div class='card-reveal'>
    <a class='card-title btn'>
      Register close reveal
    </a>
  </div>
</div>
      <div className="card">
        <div className="card-image card-action waves-effect waves-block waves-light">
          <img className="activator" src={require("./resources/westernMI.jpg")}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Card Title<i className="material-icons right">more_vert</i>
          </span>
          <p>
            <a href="#">This is a link</a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Card Title<i className="material-icons right">close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>


    </div>
  );
}
