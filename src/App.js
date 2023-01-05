import React from "react";
import "./App.css";
import {
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
    </div>
  );
}

export default App;
