import React from "react";

export default function ResumeContactComponent() {
  return (
    <div className="ResumeContactComponent animated fadeInUp">
      <div className="card teal lighten-2">
        <div className="card-content">
          <h4>CONTACT</h4>
          <div className="contactInfo">
          <p className="row">
            <i
              className="col fa fa-inbox animated fadeInDown"
              value="JMAIL"
              style={{ color: "white" }}
            />
            <span>
            hsujasonf@gmail.com
            </span>
          </p>
          <p className="row">
            <i
              className="col fa fa-phone animated fadeInDown"
              value="JMAIL"
              style={{ color: "white" }}
            />
            <span>
            248.719.1725
            </span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
