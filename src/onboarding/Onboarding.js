import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import BoxContent from "./BoxContent";
import "./Onboarding.css";
import steps from './Steps';

export default function Onboarding() {
  const history = useHistory();  
  const [currentStep, setCurrentStep] = useState(0);

  function onNextPress(){
    if(currentStep+1>=steps.length){
      history.push("/game");
    }else{
      setCurrentStep(currentStep+1);
    }
  }

  return(
    <div className="onboarding">

      <div className="logo">
        <img alt="Logo" src={require("../images/knight.png")}/>
        <h1>Masterchess</h1>
      </div>

      <div className="box">
        <BoxContent content={steps[currentStep]} />

        <button type="button" onClick={onNextPress}>
          NEXT
        </button>
      </div>

    </div>

  );
}