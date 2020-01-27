import React from "react";

import "./BoxContent.css";

export default function Card(props) {

  return(
    <div className="cardContent">
      <h3>{props.content.title}</h3>
      <p>{props.content.text}</p>
    </div>
  
  );
}