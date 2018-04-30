import React from "react";

export default function ProjectListComponent({ onShowProject }) {
  var _handleShowProject = event => {
    var target = event.target;
    event.preventDefault();
    onShowProject(target.getAttribute("value"));
  };

  return (
    <div className="container row center-align">
      <div className="col  s2 center-align">
        <i
          className="fa fa-map fa-4x animated fadeInUp center-align "
          value="GLANCE"
          style={{ color: "#00CED1" }}
          onClick={_handleShowProject}
        />
      </div>
      <div className="col s2 center-align">
        <i
          className="fa fa-inbox fa-4x animated fadeInDown "
          value="JMAIL"
          style={{ color: "red" }}
          onClick={_handleShowProject}
        />
      </div>
      <div className="col  s2 center-align">
        <i
          className=" fa fa-leanpub fa-4x animated fadeInUp "
          value="JASONS RESTAURANT"
          style={{ color: "blue" }}
          onClick={_handleShowProject}
        />
      </div>
      <div className="col  s2 center-align">
        <i
          className="fa fa-dribbble fa-4x animated fadeInDown "
          value="NBA PLAYER COMPARISON"
          style={{ color: "teal" }}
          onClick={_handleShowProject}
        />
      </div>
      <div className="col  s2 center-align">
        <i
          className="fa fa-lock fa-4x animated fadeInUp "
          value="FOOD LOC"
          style={{ color: "orange" }}
          onClick={_handleShowProject}
        />
      </div>
      <div className="col  s2 center-align">
        <i
          className=" fa fa-google fa-4x animated fadeInDown "
          value="TOP GOOGLE SEARCH"
          style={{ color: "gold" }}
          onClick={_handleShowProject}
        />
      </div>
    </div>
  );
}

//Glance, topgooglesearch, jmail, jasonsrestaurant,foodloc,nba player comparison
