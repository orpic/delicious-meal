import React from "react";
import "./TestimonialSection.css";
import { images } from "../../constants";

import SingleTestimonial from "./SingleTestimonial";
import GalleryPics from "./GalleryPics";

const TestimonialSection = () => {
  const galleryData = [
    {
      imageSrc: images.gallery1,
      altText: "front view big meat slice raw meat with pepper greens",
    },
    { imageSrc: images.gallery2, altText: "raw lamb chops wooden board" },
    { imageSrc: images.gallery3, altText: "raw chicken breast" },
    {
      imageSrc: images.gallery4,
      altText: "hands offer piece great meat steak with bone",
    },
    { imageSrc: images.gallery5, altText: "butcher cutting meat in kitchen" },
    {
      imageSrc: images.gallery6,
      altText: "fresh raw chopped meats on wooden board",
    },
    { imageSrc: images.gallery7, altText: "fresh meat slices raw meat" },
    { imageSrc: images.gallery8, altText: "fresh mackerel steak" },
    { imageSrc: images.gallery9, altText: "raw chicken meat legs isolated" },
    { imageSrc: images.gallery10, altText: "fresh unprepared chicken legs" },
    {
      imageSrc: images.gallery11,
      altText: "raw fresh chicken legs with red hot chili peppers",
    },
    {
      imageSrc: images.gallery12,
      altText:
        "raw chicken meat fillet thigh wings legs with herbs spices lemon garlic",
    },
  ];
  const customerTestimonial = [
    {
      customerImage: images.customerDave,
      altTextImg: "customer dave",
      testimonialText:
        "Inexpensive, healthy and great-tasting meat, without even having to order manually! It feels truly magical.",
      customerName: "Dave Bryson",
    },
    {
      customerImage: images.customerBen,
      altTextImg: "customer ben",
      testimonialText:
        "The AI algorithm is crazy good, it chooses the right cuts for me every time. It's amazing not to worry about meat anymore!",
      customerName: "Ben Hadley",
    },
    {
      customerImage: images.customerSteve,
      altTextImg: "customer steve",
      testimonialText:
        "Easy-Meat is a life saver! I just started a company, so there's no time for shopping fresh meat. I couldn't live without my daily meat now!",
      customerName: "Steve Miller",
    },
    {
      customerImage: images.customerHannah,
      altTextImg: "customer hannah",
      testimonialText:
        "I got Easy-Meat for the whole family, and it frees up so much time! Plus, everything is organic and farm fresh, and without plastic.",
      customerName: "Hannah Smith",
    },
  ];
  return (
    <>
      <section className="section-testimonials" id="testimonials">
        <div className="testimonials-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>

          <div className="testimonials">
            {customerTestimonial.map((eachTestimonial) => (
              <SingleTestimonial
                customerImage={eachTestimonial.customerImage}
                altTextImg={eachTestimonial.altTextImg}
                testimonialText={eachTestimonial.testimonialText}
                customerName={eachTestimonial.customerName}
              />
            ))}
          </div>
        </div>

        <div className="gallery">
          {galleryData.map((eachPic) => (
            <GalleryPics
              imageSrc={eachPic.imageSrc}
              altText={eachPic.altText}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
