import React from "react";
import "./SingleCuts.css";

const SingleCuts = ({
  imgMeal,
  altImgText,
  tags,
  title,
  calorie,
  nutriscore,
  rating,
  ratingNumbers,
}) => {
  return (
    <>
      <div className="meal">
        <img src={imgMeal} className="meal-img" alt={altImgText} />
        <div className="meal-content">
          <div className="meal-tags">
            {tags.map((tag, index) => (
              <span className="tag tag--cuts">{tag}</span>
            ))}
          </div>
          <p className="meal-title">{title}</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 meal-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                />
              </svg>

              <span>
                <strong>{calorie}</strong> calories
              </span>
            </li>
            <li className="meal-attribute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 meal-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>

              <span>
                NutriScore &reg; <strong>{nutriscore}</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 meal-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <span>
                <strong>{rating}</strong> rating ({ratingNumbers})
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleCuts;
