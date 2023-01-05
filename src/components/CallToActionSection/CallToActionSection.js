import React from "react";
import "./CallToActionSection.css";

const CallToActionSection = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meat-cuts are waiting for you.
                Start eating well today. You can cancel or pause anytime. And
                the first kilo is on us!
              </p>

              <form className="cta-form" name="sign-up" netlify>
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>

                <button onClick={submitFormHandler} className="btn btn--form">
                  Sign up now
                </button>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToActionSection;
