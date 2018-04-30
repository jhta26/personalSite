import React from "react";

export default function ProjectComponent({ projectInfo, selectedProject }) {
  return (
    <div>
      {selectedProject === projectInfo.name ? (
        <div className="row container s12">
          <div className="ProjectCards row s12">
            <div className="card teal lighten-2 col s12 ProjectCard animated fadeInLeft">
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

            <div className="card col s12  ProjectCard animate fadeInDown">
              <div className="resumeMain row 12">
                <h4 className="row s12 teal-text">{projectInfo.name}</h4>
              </div>
            </div>
            {projectInfo.data[2] ? (
              <div className="card teal col s12 lighten-2 ProjectCard animated fadeInRight">
                <div className="card-action">
                  <li className="projDiv divider" tabindex="-1" />
                  <h4
                    className="tooltipped row s4 activator waves-effect waves-block waves-light white-text"
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
            ) : null}
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
