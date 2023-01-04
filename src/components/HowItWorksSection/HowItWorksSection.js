import React from "react";
import "./HowItWorksSection.css";
import { images } from "../../constants";

import StepTextBox from "./StepTextBox";
import StepImgBox from "./StepImgBox";

const HowItWorksSection = () => {
  const howItWorksData = [
    {
      numText: "01",
      headingText: "Tell us what you like (and what not)",
      descriptionText:
        "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
      imageSrc: images.appScreen1,
      altText: "app preferences selection screen",
    },
    {
      numText: "02",
      headingText: "Approve your weekly meal plan",
      descriptionText:
        "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
      imageSrc: images.appScreen2,
      altText: "app preferences selection screen",
    },
    {
      numText: "03",
      headingText: "Tell us what you like (and what not)",
      descriptionText:
        "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
      imageSrc: images.appScreen3,
      altText: "app meal approving plan screen",
    },
  ];
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <StepTextBox
          numText={howItWorksData[0].numText}
          headingText={howItWorksData[0].headingText}
          descriptionText={howItWorksData[0].descriptionText}
        />
        <StepImgBox
          imageSrc={howItWorksData[0].imageSrc}
          altText={howItWorksData[0].altText}
        />
        <StepImgBox
          imageSrc={howItWorksData[1].imageSrc}
          altText={howItWorksData[1].altText}
        />
        <StepTextBox
          numText={howItWorksData[1].numText}
          headingText={howItWorksData[1].headingText}
          descriptionText={howItWorksData[1].descriptionText}
        />
        <StepTextBox
          numText={howItWorksData[2].numText}
          headingText={howItWorksData[2].headingText}
          descriptionText={howItWorksData[2].descriptionText}
        />
        <StepImgBox
          imageSrc={howItWorksData[2].imageSrc}
          altText={howItWorksData[2].altText}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
