import React from "react";
import { images } from "../../constants";
import "./MealsSection.css";
import SingleCuts from "./SingleCuts";

const MealsSection = () => {
  const meatCutsData = [
    {
      imgMeal: images.meat1,
      altImgText: "rumette cut",
      tags: ["Most Popular"],
      title: "Chicken Drumette",
      calorie: "75",
      nutriscore: "86",
      rating: "4.7",
      ratingNumbers: "567",
    },
    {
      imgMeal: images.meat2,
      altImgText: "whole wing cut",
      tags: ["Delicious"],
      title: "Whole Wings",
      calorie: "60",
      nutriscore: "75",
      rating: "4.9",
      ratingNumbers: "665",
    },
    {
      imgMeal: images.meat3,
      altImgText: "wog fullchicken",
      tags: ["Feast"],
      title: "WOG Chicken",
      calorie: "99",
      nutriscore: "91",
      rating: "4.3",
      ratingNumbers: "536",
    },
  ];

  return (
    <>
      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Meat Cuts</span>
          <h2 className="heading-secondary">
            Easy-Meat AI chooses from 500+ cuts
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          {meatCutsData.map((eachCut) => (
            <SingleCuts
              imgMeal={eachCut.imgMeal}
              altImgText={eachCut.altImgText}
              tags={eachCut.tags}
              title={eachCut.title}
              calorie={eachCut.calorie}
              nutriscore={eachCut.nutriscore}
              rating={eachCut.rating}
              ratingNumbers={eachCut.ratingNumbers}
            />
          ))}
        </div>

        <div className="container all-recipes">
          <a href="#" className="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>
    </>
  );
};

export default MealsSection;
