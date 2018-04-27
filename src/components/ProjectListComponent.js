import React from "react";

export default function ProjectListComponent({onShowProject}) {
	var _handleShowProject=event=>{
		event.preventDefault()
		onShowProject(event.target.value)
	}
  return (
    <div className="ProjectListComponent col">
      <div className="listLinks row">
        <i className="col fa fa-map fa-4x" value="Glance" style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">Glance</p>
        <i className="col fa fa-inbox fa-4x" value="JMail" style={{ color: "black" }} onClick={_handleShowProject} />
        <p className="col">JMail</p>
        <i className="col fa fa-leanpub fa-4x" value="JasonsRestaurant" style={{ color: "black" }} onClick={_handleShowProject} />
        <p className="col">Jason's Restaurant</p>
      </div>
      <div className="listLinks row">
        <i className="col fa fa-map fa-4x" value="NBA"style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">NBA player comparison</p>
        <i className="col fa fa-map fa-4x" value="FoodLoc" style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">FoodLoc</p>
        <i className="col fa fa-google fa-4x" value="TGS" style={{ color: "black" }} onClick={_handleShowProject}/>
        <p className="col">Top Google Search</p>
      </div>
    </div>
  );
}

//Glance, topgooglesearch, jmail, jasonsrestaurant,foodloc,nba player comparison
