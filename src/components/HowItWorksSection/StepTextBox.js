import React from "react";
import "./StepImgBox.css";

const StepTextBox = ({ numText, headingText, descriptionText }) => {
  return (
    <div className="step-text-box">
      <p className="step-number">01{numText}</p>
      <h3 className="heading-tertiary">
        Tell us what you like (and what not){headingText}
      </h3>
      <p className="step-description">
        Never again waste time thinking about what to eat! Omnifood AI will
        create a 100% personalized weekly meal plan just for you. It makes sure
        you get all the nutrients and vitamins you need, no matter what diet you
        follow!
        {descriptionText}
      </p>
    </div>
  );
};

export default StepTextBox;
