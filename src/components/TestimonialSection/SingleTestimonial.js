import React from "react";
import "./SingleTestimonial.css";

const SingleTestimonial = ({
  customerImage,
  altTextImg,
  testimonialText,
  customerName,
}) => {
  return (
    <>
      <figure className="testimonial">
        <img className="testimonial-img" alt={altTextImg} src={customerImage} />
        <blockquote className="testimonial-text">{testimonialText}</blockquote>
        <p className="testimonial-name">&mdash; {customerName}</p>
      </figure>
    </>
  );
};

export default SingleTestimonial;
