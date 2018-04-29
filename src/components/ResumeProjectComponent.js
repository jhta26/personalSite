import React from "react";

export default function ResumeProjectComponent({ resumeInfo }) {
  return (
    <div className="ResumeProjectComponent">
      <div className="titleDate">
        <a href="https://github.com/jhta26" className="">
          <p className="title">{resumeInfo.title}</p>
        </a>
        <p className="resumeDate">{resumeInfo.date}</p>
      </div>
      <p className="description">{resumeInfo.description}</p>
      <div className="bullets row">
        {resumeInfo.bullets.split("\n").map(bullet => (
          <div className="bulletPoint">
              <i className="material-icons bulletIcon" style={{ color: "black" }}>brightness_1</i>
              <p className="bullet">{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
