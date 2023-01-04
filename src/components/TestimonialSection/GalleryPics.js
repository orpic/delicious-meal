import React from "react";

const GalleryPics = ({ imageSrc, altText }) => {
  return (
    <>
      <figure className="gallery-item">
        <img src={imageSrc} alt={altText} />
      </figure>
    </>
  );
};

export default GalleryPics;
