import React from "react";
import "./App.css";
import {
  CallToActionSection,
  FeaturedSection,
  HeaderSection,
  HowItWorksSection,
  MainHeroSection,
  MealsSection,
  PricingSection,
  TestimonialSection,
} from "./components";

function App() {
  return (
    <div className="">
      <HeaderSection />
      <MainHeroSection />
      <FeaturedSection />
      <HowItWorksSection />
      <MealsSection />
      <TestimonialSection />
      <PricingSection />
      <CallToActionSection />
    </div>
  );
}

export default App;
