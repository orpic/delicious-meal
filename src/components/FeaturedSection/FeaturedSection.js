import React from "react";
import { images } from "../../constants";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  const featureImages = [
    {
      imageSource: images.logoZeeNews,
      altText: "zee news logo",
    },
    {
      imageSource: images.logoDainik,
      altText: "Dainik jagaran logo",
    },
    {
      imageSource: images.logoNdtv,
      altText: "ndtv logo",
    },
    {
      imageSource: images.logoTimesOfIndia,
      altText: "Times of india logo",
    },
    {
      imageSource: images.logoIndiaTv,
      altText: "India tv logo",
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
