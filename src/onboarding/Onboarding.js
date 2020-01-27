import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../shared/logo/Logo";
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

      <Logo />

      <div className="box">
        <BoxContent content={steps[currentStep]} />

        <button type="button" onClick={onNextPress}>
          {steps[currentStep].buttonText}
        </button>
      </div>

    </div>

  );
}