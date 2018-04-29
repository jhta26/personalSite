import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProjectPageLayout from "./ProjectPageLayout";
import ProjectListComponent from "./ProjectListComponent";
import ProjectComponent from "./ProjectComponent";

export default function ProjectPage({
  projectInfo,
  onShowProject,
  selectedProject,
  showProject,
  onCloseProject
}) {
  return (
    <div className="ProjectPage">
      <ProjectPageLayout>
        <HeaderComponent onCloseProject={onCloseProject} />
        <ProjectListComponent onShowProject={onShowProject} />
        {showProject
          ? projectInfo.map(project => (
              <ProjectComponent
                projectInfo={project}
                selectedProject={selectedProject}
              />
            ))
          : null}
      </ProjectPageLayout>
    </div>
  );
}
