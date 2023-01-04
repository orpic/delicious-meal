import React from "react";
import { images } from "../../constants";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  const featureImages = [
    {
      imageSource: images.logoTechCrunch,
      altText: "Techcrunch logo",
    },
    {
      imageSource: images.logoBusinessInsider,
      altText: "Business insider logo",
    },
    {
      imageSource: images.logoNewYorkTimes,
      altText: "New york times logo",
    },
    {
      imageSource: images.logoForbes,
      altText: "Forbes logo",
    },
    {
      imageSource: images.logoUsaToday,
      altText: "Usa today logo",
    },
  ];
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          {featureImages.map((eachImage) => (
            <img src={eachImage.imageSource} alt={eachImage.altText} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
