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
            Healthy meat delivered to your door, every single day
          </h1>
          <p className="hero-description">
            Easy Meat is the first technology driven, fresh meat retail outlet
            chain in Kanpur. We facilitate smart 365-days subscription with
            hygienic meat with our 8 outlets.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Eat fresh meat
          </a>

          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              {deliveredImages.map((eachImage) => (
                <img src={eachImage.imageSource} alt="Customer" />
              ))}
            </div>
            <p className="delivered-text">
              <span>500kg +</span> meat delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src={images.chickenBowl}
            className="hero-img"
            alt="Woman enjoying food, meals in a storage box, and food on table"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
