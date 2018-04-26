import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProjectPageLayout from "./ProjectPageLayout";
import ProjectListComponent from "./ProjectListComponent";
import ProjectComponent from "./ProjectComponent";

export default function ProjectPage({data}) {
  return (
    <div className="ProjectPage">
      <ProjectPageLayout>
        <HeaderComponent />
        <ProjectListComponent />
        <ProjectComponent data={data} />
      </ProjectPageLayout>
    </div>
  );
}
