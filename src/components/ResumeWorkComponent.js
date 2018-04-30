import React from "react";

export default function ResumeWorkComponent() {
  return (
    <div className="ResumeWorkComponent animated fadeInDown">
      <div className="card teal lighten-2">
        <div className="card-action">
          <span className="workExpHeadLine activator waves-effect waves-block waves-light white-text">
            <h4 className="tooltipped activator waves-effect waves-block waves-light white-text" data-position="bottom" data-tooltip="Click Here">
              Work Experience
            </h4>
            <li className="workDiv divider" tabindex="-1" />
          </span>
        </div>
        <div className="card-reveal teal lighten-2">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>

          <img
            className="schoolPic circle resume col  animated fadeIn"
            src={require("./resources/s2e.png")}
            alt="resume"
            height="120"
            width="230"
          />
          <p className="schoolName white-text center-align">S2E Consulting</p>
          <li className="schoolDiv divider" tabindex="-1" />
          <p className="schoolDate white-text">San Francisco, CA | 2017-2018</p>
          <p className="schoolCert white-text center-align">
            - Developed responsive mobile money management platform, Ella, using
            JavaScript, React.Js, React Native, GraphQL, and Apollo, building 15
            views, and optimizing case worker check in process by over 85%.
          </p>
          <p className="schoolCert white-text center-align">
            - Collaborated with CEO on backend to design entity relationship
            diagram (ERD) for structuring PostgreSQL database to user, spending,
            and casework information, resulting in 12 tables.
          </p>
          <p className="schoolCert white-text center-align">
            - Integrated Google’s photo recognition API to scan and retrieve
            information from receipts in less than 0.5 seconds.
          </p>
          <p className="schoolCert white-text center-align">
            - Created pages with React Native and Native Base to log spending;
            built administrator pages for case workers to monitor their cases,
            resulting in hybrid app compatible with 100% of major devices.
          </p>
          <p className="schoolCert white-text center-align">
            - Deployed Node.js and Express backend on AWS using EC2 and Elastic
            Beanstalk, saving 200 MB of storage.
          </p>

          <img
            className="schoolPic circle resume col  animated fadeIn"
            src={require("./resources/somerset.jpg")}
            alt="resume"
            height="120"
            width="230"
          />
          <p className="schoolName white-text center-align">
            Somerset Collection
          </p>
          <li className="schoolDiv divider" tabindex="-1" />
          <p className="schoolDate white-text">Troy,MI | 2013-2017</p>
          <p className="schoolCert white-text center-align">
            - Promoted to co-manager role at highest grossing Guess location in
            Michigan (over $1.4M in sales annually), after working at assistant
            store manager for Abercrombie and Fitch and Pacsun.
          </p>
          <p className="schoolCert white-text center-align">
            - Recognized for key role in improving Somerset Guess Store to
            achieve #1 sales in Michigan region in 2016.
          </p>
          <p className="schoolCert white-text center-align">
            - Given “District Trainer” role at Pacsun, responsible for training
            all incoming managers, saving company $5,000 per manager in training
            fees.
          </p>
        </div>
      </div>
    </div>
  );
}
