import React from "react";
import HeaderComponent from "./HeaderComponent";
import ResumePageLayout from "./ResumePageLayout";
import ResumeProjectComponent from "./ResumeProjectComponent";
import ResumeEducationComponent from './ResumeEducationComponent'
import ResumeTechnologiesComponent from './ResumeTechnologiesComponent'
import ResumeMainComponent from './ResumeMainComponent'
import ResumeContactComponent from './ResumeContactComponent'

export default function ResumePage() {
  return (
    <div className="ResumePage">
      <ResumePageLayout>
        <HeaderComponent />
        <ResumeEducationComponent/>
          <ResumeMainComponent/>
            <ResumeTechnologiesComponent/>
            <ResumeEducationComponent/>
          <ResumeEducationComponent/>
            <ResumeEducationComponent/>
      </ResumePageLayout>
    </div>
  );
}
