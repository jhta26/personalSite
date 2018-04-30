import React from "react";

export default function ProjectListComponent({ onShowProject }) {
  var _handleShowProject = event => {
    var target = event.target;
    event.preventDefault();
    onShowProject(target.getAttribute("value"));
  };

  return (
    <div className="ProjectComponent container col m6 s12">
      <div className="listLinks row m1 s12">
        <i
          className="col  m1 s1 fa fa-map fa-4x animated fadeInUp s1"
          value="GLANCE"
          style={{ color: "#00CED1" }}
          onClick={_handleShowProject}
        />

        <i
          className="col m1 s1 fa fa-inbox fa-4x animated fadeInDown s1"
          value="JMAIL"
          style={{ color: "red" }}
          onClick={_handleShowProject}
        />

        <i
          className="col  m1 s1 fa fa-leanpub fa-4x animated fadeInUp s1"
          value="JASONS RESTAURANT"
          style={{ color: "blue" }}
          onClick={_handleShowProject}
        />

        <i
          className="col m1 s1 fa fa-dribbble fa-4x animated fadeInDown s1"
          value="NBA PLAYER COMPARISON"
          style={{ color: "teal" }}
          onClick={_handleShowProject}
        />

        <i
          className="col  m1 s1 fa fa-lock fa-4x animated fadeInUp s1"
          value="FOOD LOC"
          style={{ color: "orange" }}
          onClick={_handleShowProject}
        />

        <i
          className="col m1 s1 fa fa-google fa-4x animated fadeInDown s1"
          value="TOP GOOGLE SEARCH"
          style={{ color: "gold" }}
          onClick={_handleShowProject}
        />
      </div>
    </div>
  );
}

//Glance, topgooglesearch, jmail, jasonsrestaurant,foodloc,nba player comparison
