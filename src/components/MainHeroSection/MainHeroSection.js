import React from "react";
import "./MainHeroSection.css";
import { images } from "../../constants";

const MainHeroSection = () => {
  const deliveredImages = [
    { imageSource: images.customer1 },
    { imageSource: images.customer2 },
    { imageSource: images.customer3 },
    { imageSource: images.customer4 },
    { imageSource: images.customer5 },
    { imageSource: images.customer6 },
  ];
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Start eating well
          </a>

          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              {deliveredImages.map((eachImage) => (
                <img src={eachImage.imageSource} alt="Customer photo" />
              ))}
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src={images.hero}
            className="hero-img"
            alt="Woman enjoying food, meals in a storage box, and food on table"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
