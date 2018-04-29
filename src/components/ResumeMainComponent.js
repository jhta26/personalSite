import React from "react";

export default function ResumeMainComponent() {
  return (
    <div className="ResumeMainComponent animated fadeInDown">
    
          <div className="card">
                 <img
              src={require("./resources/hsu.png")}
              alt="hsu"
              height="130"
              width="130"
            />
            <div className="resumeMain">
           <h4 className="teal-text darken-2">Jason Hsu</h4>
           <p className="teal-text darken-2">Software Engineer</p>
            </div>
          </div>
        </div>
   
  );
}
