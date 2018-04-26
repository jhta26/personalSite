import React from "react";

export default function ProjectPageLayout(props) {
	return(  <div className="PageLayout white">
    {props.children[0]}
    <li className="divider container" tabindex="-1" />
    <div className="projects center-align">
      {props.children[1]}
      {props.children[2]}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
    </div>
  </div>
  )
}
