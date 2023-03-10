import React from "react";
import { images } from "../../constants";
import "./FooterSection.css";

const FooterSection = () => {
  const socialLinksData = [
    {
      imageSrc: images.socialFacebook,
    },
    {
      imageSrc: images.socialInstagram,
    },
    {
      imageSrc: images.socialTwitter,
    },
  ];

  const navColData = [
    {
      navFooterHeading: "Account",
      links: ["Create account", "Sign in", "iOS app", "Android app"],
    },
    {
      navFooterHeading: "Company",
      links: ["About Easy Meat", "For Business", "Food partners", "Careers"],
    },
    {
      navFooterHeading: "Account",
      links: ["Recipe directory", "Help center", "Privacy & terms"],
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#no-link" className="footer-logo">
              <img
                className="logo"
                alt="Omnifood logo"
                src={images.easyMeatLogo}
              />
            </a>

            <ul className="social-links">
              {socialLinksData.map((eachLink) => (
                <li>
                  <a className="footer-link" href="#no-link">
                    <img src={eachLink.imageSrc} alt="social" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2023</span> by Easy Meat
              Pvt. Ltd. All rights reserved.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                Charan Singh Colony, Kanpur, Uttar Pradesh 208012
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  7080 562 211
                </a>
                <br />
                <a className="footer-link" href="mailto:care@easymeat.com">
                  care@easymeat.com
                </a>
              </p>
            </address>
          </div>
          {navColData.map((eachColData) => (
            <nav className="nav-col">
              <p className="footer-heading">{eachColData.navFooterHeading}</p>
              <ul className="footer-nav">
                {eachColData.links.map((eachLink) => (
                  <li>
                    <a className="footer-link" href="#no-link">
                      {eachLink}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
