import React from "react";

export default function ProjectComponent({ projectInfo, selectedProject }) {
  return (
    <div>
      {selectedProject === projectInfo.name ? (
        <div className="col container">
          <div className="row">
            <div className="col l4 m4 s12 ">
              <div className="card teal lighten-2  animated fadeInLeft">
                <div className="card-action col s12">
                  <li className="projDiv divider" tabindex="-1" />
                  <h4
                    className="tooltipped row s12 activator waves-effect waves-block waves-light white-text"
                    data-position="bottom"
                    data-tooltip="Click Here"
                  >
                    {projectInfo.data[0].title}
                  </h4>
                  <li className="projDiv divider" tabindex="-1" />
                </div>
                <div className="card-reveal teal lighten-2">
                  <div className="row">
                    <span className="card-title white-text ">
                      <i className="material-icons right closeIcon">close</i>
                    </span>
                  </div>
                  <p className="schoolName white-text">
                    {projectInfo.data[0].content}
                  </p>
                  {projectInfo.data[1].content
                    .split("\n")
                    .map(bullet => <p className="white-text">{bullet}</p>)}
                </div>
              </div>
            </div>
            <div className="col l4 m4 s12 ">
              <div className="card  animate fadeInDown">
                
                  <h4 className="row  s12 teal-text">{projectInfo.name}</h4>
                
              </div>
            </div>
            <div className="col l4 m4 s12 ">
              <div className="card teal  lighten-2  animated fadeInRight">
                <div className="card-action m4">
                  <li className="projDiv divider" tabindex="-1" />
                  <h4
                    className="tooltipped row m4 s12 activator waves-effect waves-block waves-light white-text"
                    data-position="bottom"
                    data-tooltip="Click Here"
                  >
                    {projectInfo.data[2].title}
                  </h4>
                  <li className="projDiv divider" tabindex="-1" />
                </div>
                <div className="card-reveal teal lighten-2">
                  <div className="row">
                    <span className="card-title white-text ">
                      <i className="material-icons right">close</i>
                    </span>
                  </div>
                  {projectInfo.data[2].content
                    .split("\n")
                    .map(bullet => <p className="white-text">{bullet}</p>)}
                </div>
              </div>
            </div>
          </div>
          <div className="row projectNameDes">
            <img
              className="projectImage col animated fadeInLeft"
              src={projectInfo.image || "./resources/hsu.png"}
              alt="project photo"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
