import React from "react";
import "./PricingPlan.css";

const PricingPlan = ({ planClassName, planName, planAmount, planPoints }) => {
  return (
    <>
      <div className={planClassName}>
        <header className="plan-header">
          <p className="plan-name">{planName}</p>
          <p className="plan-price">
            <span>₹</span>
            {planAmount}
          </p>
          <p className="plan-text">
            per month. That's just ₹{planAmount / 30} per meal!
          </p>
        </header>
        <ul className="list">
          {planPoints.map((eachPoint) => (
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 list-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{eachPoint}</span>
            </li>
          ))}
        </ul>
        <div className="plan-sign-up">
          <a href="#no-link" className="btn btn--full">
            Start eating well
          </a>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
