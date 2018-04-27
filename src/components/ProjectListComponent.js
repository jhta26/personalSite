import React from "react";

export default function ProjectListComponent({onShowProject}) {

	var _handleShowProject=event=>{
		var target = event.target
		event.preventDefault()
		onShowProject(target.getAttribute("value"))
	}

  return (
    <div className="ProjectListComponent col">
      <div className="listLinks row">
        <i className="col fa fa-map fa-4x" value="GLANCE" style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">Glance</p>
        <i className="col fa fa-inbox fa-4x" value="JMAIL" style={{ color: "black" }} onClick={_handleShowProject} />
        <p className="col">JMail</p>
        <i className="col fa fa-leanpub fa-4x" value="JASONS RESTAURANT" style={{ color: "black" }} onClick={_handleShowProject} />
        <p className="col">Jason's Restaurant</p>
      </div>
      <div className="listLinks row">
        <i className="col fa fa-map fa-4x" value="NBA PLAYER COMPARISON"style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">NBA player comparison</p>
        <i className="col fa fa-map fa-4x" value="FOOD LOC" style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">FoodLoc</p>
        <i className="col fa fa-google fa-4x" value="TOP GOOGLE SEARCH" style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">Top Google Search</p>
      </div>
    </div>
  );
}

//Glance, topgooglesearch, jmail, jasonsrestaurant,foodloc,nba player comparison
