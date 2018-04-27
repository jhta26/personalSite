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
  console.log(selectedProject,projectInfo,'aweoifjwofijeowi',showProject,);
  return (
    <div className="ProjectPage">
      <ProjectPageLayout>
        <HeaderComponent />
        <ProjectListComponent onShowProject={onShowProject} />
        {showProject
          ? projectInfo.filter(proj=>proj.name===selectedProject).map(project => <ProjectComponent projectInfo={project} selectedProject={selectedProject}/>)
            
          : null}
      </ProjectPageLayout>
    </div>
  );
}
