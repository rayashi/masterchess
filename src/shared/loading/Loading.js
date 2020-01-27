import React from "react";

import "./Loading.css";

export default function Onboarding() {
  return(
    <div className="loading">
      <img alt="loading" src={require("../../images/load.png")}/>
      <p>loading...</p>
    </div>
  );
}