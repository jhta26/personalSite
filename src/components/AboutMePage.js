import React from "react";
import HeaderComponent from "./HeaderComponent";
import HomePageLayout from "./HomePageLayout";
import AboutMeBodyComponent from "./AboutMeBodyComponent";

export default function AboutMePage() {
  return (
    <div className="AboutMePage">
      <HomePageLayout>
        <HeaderComponent />
        <AboutMeBodyComponent />
      </HomePageLayout>
    </div>
  );
}
