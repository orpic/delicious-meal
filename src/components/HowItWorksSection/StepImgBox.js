import React from "react";
import "./StepImgBox.css";

const StepImgBox = ({ imageSrc, altText }) => {
  return (
    <div className="step-img-box">
      <img src={imageSrc} className="step-img" alt={altText} />
    </div>
  );
};

export default StepImgBox;
