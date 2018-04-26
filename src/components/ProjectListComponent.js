import React from "react";

export default function ProjectListComponent() {
  return (
    <div className="ProjectListComponent col">
      <div className="listLinks row">
        <i className="col fa fa-map fa-4x" style={{ color: "black" }} />
        <p className="col">Glance</p>
        <i className="col fa fa-inbox fa-4x" style={{ color: "black" }} />
        <p className="col">JMail</p>
        <i className="col fa fa-leanpub fa-4x" style={{ color: "black" }} />
        <p className="col">Jason's Restaurant</p>
      </div>
      <div className="listLinks row">
        <i className="col fas fa-basketball fa-4x" style={{ color: "black" }} />
        <p className="col">NBA player comparison</p>
        <i className="col fas fa-utensils fa-4x" style={{ color: "black" }} />
        <p className="col">FoodLoc</p>
        <i className="col fa fa-google fa-4x" style={{ color: "black" }} />
        <p className="col">Top Google Search</p>
      </div>
    </div>
  );
}

//Glance, topgooglesearch, jmail, jasonsrestaurant,foodloc,nba player comparison
