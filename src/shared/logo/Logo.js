import React from "react";

import "./Logo.css";

export default function Onboarding() {
  return(
    <div className="logo">
      <img alt="Logo" src={require("../../images/knight.png")}/>
      <h1>Masterchess</h1>
    </div>
  );
}