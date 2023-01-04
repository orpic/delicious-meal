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
        "Never again waste time thinking about what to eat! Easy-Meat AI will create a 100% personalized weekly meat plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
      imageSrc: images.appScreen1,
      altText: "app preferences selection screen",
    },
    {
      numText: "02",
      headingText: "Approve your weekly meat plan",
      descriptionText:
        "Once per week, approve the meat plan generated for you by Easy-Meat AI. You can change timings, swap entire selects, or even add your own custom cuts.",
      imageSrc: images.appScreen2,
      altText: "app preferences selection screen",
    },
    {
      numText: "03",
      headingText: "Receive meat cuts at convenient time",
      descriptionText:
        "Best butchers in Kanpur will cut your selected meat every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule, timing and address daily!",
      imageSrc: images.appScreen3,
      altText: "app meal approving plan screen",
    },
  ];
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of meat in 3 simple steps
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
