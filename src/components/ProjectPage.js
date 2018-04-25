import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProjectPageLayout from "./ProjectPageLayout";
import ProjectListComponent from "./ProjectListComponent";
import ProjectComponent from "./ProjectComponent";

export default function HomePage() {
  return (
    <div className="HomePage">
      <ProjectPageLayout>
        <HeaderComponent />
        <ProjectListComponent />
        <ProjectComponent />
      </ProjectPageLayout>
    </div>
  );
}
