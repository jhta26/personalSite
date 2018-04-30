import React from "react";

export default function HomePageLayout(props) {
  return (
    <div className="PageLayout white s12">
      {props.children[0]}
      <li className="divider container" tabindex="-1" />
      <div className="body center-align">{props.children[1]}</div>
    </div>
  );
}
