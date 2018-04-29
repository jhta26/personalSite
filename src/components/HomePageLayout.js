import React from "react";

export default function HomePageLayout(props) {
  return (
    <div className="PageLayout white">
      {props.children[0]}
      <li className="divider container" tabindex="-1" />
      <div className="body center-align">{props.children[1]}</div>
    </div>
  );
}
