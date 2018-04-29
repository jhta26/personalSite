import React from "react";
import HeaderComponent from "./HeaderComponent";
import ResumePageLayout from "./ResumePageLayout";
import ResumeProjectComponent from "./ResumeProjectComponent";
import ResumeEducationComponent from "./ResumeEducationComponent";
import ResumeTechnologiesComponent from "./ResumeTechnologiesComponent";
import ResumeMainComponent from "./ResumeMainComponent";
import ResumeContactComponent from "./ResumeContactComponent";
import ResumeWorkComponent from './ResumeWorkComponent'

export default function ResumePage() {
  return (
    <div className="ResumePage">
      <ResumePageLayout>
        <HeaderComponent />
        <ResumeContactComponent />
        <ResumeMainComponent />
        <ResumeTechnologiesComponent />
        <ResumeEducationComponent />
        <ResumeWorkComponent />
        <ResumeEducationComponent />
      </ResumePageLayout>
    </div>
  );
}
