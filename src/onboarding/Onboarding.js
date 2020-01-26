import React from "react";

import "./Onboarding.css";
import Card from "./Card";


export default function Onboarding() {

  const cards = [
    { 
      title: "Let's guess knight moves!", 
      text: "Using Masterchess you can discover all cells where the Knight can move in exactly two turns",
      image: require("./images/chess.png")
    }
  ];

  return(
    <div className="onboarding">
    
      <div className="card">

        <Card content={cards[0]} />
        

        <button type="button">
          Next
        </button>
      </div>

    </div>

  );
}