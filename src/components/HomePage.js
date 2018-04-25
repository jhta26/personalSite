import React from "react";
import HeaderComponent from "./HeaderComponent";
import HomePageBodyComponent from "./HomePageBodyComponent";
import HomePageLayout from "./HomePageLayout";

export default function HomePage() {
  return (
    <div className="HomePage">
      <HomePageLayout>
        <HeaderComponent />
        <HomePageBodyComponent />
      </HomePageLayout>
    </div>
  );
}
