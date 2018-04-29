import React from "react";
import HeaderComponent from "./HeaderComponent";
import HomePageLayout from "./HomePageLayout";
import ResumeProjectComponent from './ResumeProjectComponent'

export default function ResumePage() {
  return (
    <div className="ResumePage">
      <HomePageLayout>
        <HeaderComponent />
        <img
          className="resume col animated fadeIn"
          src={require("./resources/resumeScreenShot.png")}
          alt="resume"
        />
      </HomePageLayout>
    </div>
  );
}
