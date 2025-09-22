import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    "/images/journey.jpeg",
    "/images/kwambata.jpeg",
    "/images/scout.jpeg",
    "/images/assess.jpeg",
    "/images/k1.jpeg",
    "/images/k2.jpeg",
    "/images/k3.jpeg",
    "/images/k4.jpeg",
    "/images/k5.jpeg",
    "/images/k6.jpeg",
    "/images/k7.jpeg",
    "/images/k8.jpeg",
    "/images/k9.jpeg",
    "/images/k10.jpeg",
    "/images/k11.jpeg",
    "/images/k12.jpeg",
    "/images/k13.jpeg",
    "/images/k14.jpeg",
    "/images/k15.jpeg",
    "/images/k16.jpeg",
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <p className="gallery-intro">
        A glimpse into our journey, training, and events
      </p>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
