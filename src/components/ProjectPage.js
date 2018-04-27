import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProjectPageLayout from "./ProjectPageLayout";
import ProjectListComponent from "./ProjectListComponent";
import ProjectComponent from "./ProjectComponent";

export default function ProjectPage({
  projectInfo,
  onShowProject,
  selectedProject,
  showProject
}) {
  return (
    <div className="ProjectPage">
      <ProjectPageLayout>
        <HeaderComponent />
        <ProjectListComponent onShowProject={onShowProject} />
        {showProject ? (
          <ProjectComponent
            projectInfo={projectInfo}
            selectedProject={selectedProject}
          />
        ) : null}
      </ProjectPageLayout>
    </div>
  );
}
