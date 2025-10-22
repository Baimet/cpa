import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const descriptions = [
    "Signing of the MOU",
    "Issuing sports equipment at Kwambata",
    "Photoshoot with students",
    "Strategic planning meeting",
    "Kwambata Grounds",
    "Grounds Inspection",
    "Grounds Inspection",
    "Meeting Snapshots ",
    "Meeting Snapshots ",
    "Meeting Snapshots ",
    "Documents Review Meeting",
    "Event K8 learning workshops",
    "Documents Review Meeting",
    "Grounds Inspection",
    "Grounds Inspection",
    "Grounds Inspection",
    "Assesing the grounds",
    "At Makueni Campus",
    "Meeting Snapshots ",
    "On the way to Kitise",
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Journey in Pictures</h1>
      <p className="gallery-intro">
        From the training fields to competition days — explore moments that
        define us.
      </p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
            <div className="overlay">
              <span className="view-text">View</span>
            </div>
            <p className="gallery-caption">{descriptions[index]}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content fade-in">
            <img src={selectedImage} alt="Enlarged view" />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
