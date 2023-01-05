import React from "react";
import "./HeaderSection.css";
import { images } from "../../constants";

const HeaderSection = () => {
  const mainNavList = [
    {
      hrefLink: "#how",
      displayText: "How it works",
    },
    {
      hrefLink: "#meals",
      displayText: "Meals",
    },
    {
      hrefLink: "#testimonials",
      displayText: "Testimonials",
    },
    {
      hrefLink: "#pricing",
      displayText: "Pricing",
    },
  ];

  return (
    <header className="header">
      <a href="#no_link">
        <img className="logo" alt="Easy Meat logo" src={images.easyMeatLogo} />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          {mainNavList.map((eachItem) => (
            <li>
              <a className="main-nav-link" href={eachItem.hrefLink}>
                {eachItem.displayText}
              </a>
            </li>
          ))}
          <li>
            <a className="main-nav-link nav-cta" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
