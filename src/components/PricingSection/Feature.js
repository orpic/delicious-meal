import React from "react";
import "./Feature.css";

const Feature = ({ imageSrc, featureTitle, featureText }) => {
  return (
    <>
      <div className="feature">
        <img src={imageSrc} className="feature-icon" alt="" />
        <p className="feature-title">{featureTitle}</p>
        <p className="feature-text">{featureText}</p>
      </div>
    </>
  );
};

export default Feature;
