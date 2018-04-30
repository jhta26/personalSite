import React from "react";
import HeaderComponent from "./HeaderComponent";
import HomePageBodyComponent from "./HomePageBodyComponent";
import HomePageLayout from "./HomePageLayout";

export default function HomePage() {
  return (
    <div className="HomePage s12">
      <HomePageLayout>
        <HeaderComponent className="s12"/>
        <HomePageBodyComponent className="s12" />
      </HomePageLayout>
    </div>
  );
}
