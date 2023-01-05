import React from "react";
import "./PricingSection.css";
import { images } from "../../constants";

import Feature from "./Feature";
import PricingPlan from "./PricingPlan";

const PricingSection = () => {
  const pricingPlansData = [
    {
      planClassName: "pricing-plan pricing-plan--starter",
      planName: "Starter",
      planAmount: 5000,
      planPoints: [
        "1 meal per day",
        "Order from 11am to 9pm",
        "Delivery is free",
      ],
    },
    {
      planClassName: "pricing-plan pricing-plan--complete",
      planName: "Heavy Duty",
      planAmount: 15000,
      planPoints: [
        "1 meal per day",
        "Order from 11am to 9pm",
        "Delivery is free",
        "Get access to latest recipes",
      ],
    },
  ];

  const featureData = [
    {
      imageSrc: images.iconHealthy,
      featureTitle: "Always eat healthy",
      featureText:
        "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      imageSrc: images.iconFresh,
      featureTitle: "Local and organic",
      featureText:
        "Our cuts come from local farms producing fresh, and organic meat for you.",
    },
    {
      imageSrc: images.iconRecycle,
      featureTitle: "No waste",
      featureText:
        "All our partners only use reusable containers to package all your meat.",
    },
    {
      imageSrc: images.iconPause,
      featureTitle: "Pause anytime",
      featureText:
        "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];
  return (
    <>
      <section className="section-pricing" id="pricing">
        <div className="container">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container grid grid--2-cols margin-bottom-md">
          {pricingPlansData.map((eachPlan) => (
            <PricingPlan
              planClassName={eachPlan.planClassName}
              planName={eachPlan.planName}
              planAmount={eachPlan.planAmount}
              planPoints={eachPlan.planPoints}
            />
          ))}
        </div>

        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div className="container grid grid--4-cols">
          {featureData.map((eachFeature) => (
            <Feature
              imageSrc={eachFeature.imageSrc}
              featureTitle={eachFeature.featureTitle}
              featureText={eachFeature.featureText}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingSection;
