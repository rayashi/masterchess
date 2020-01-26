import React from "react";

import "./Onboarding.css";

export default function Onboarding(props) {

  return(
    <div className="cardContent">
      <h3>{props.content.title}</h3>
      <img alt="chessboard" src={props.content.image} />
      <p>{props.content.text}</p>
    </div>
  
  );
}