import React from "react";
import "./StepTextBox.css";

const StepTextBox = ({ numText, headingText, descriptionText }) => {
  return (
    <div className="step-text-box">
      <p className="step-number">{numText}</p>
      <h3 className="heading-tertiary">{headingText}</h3>
      <p className="step-description">{descriptionText}</p>
    </div>
  );
};

export default StepTextBox;
