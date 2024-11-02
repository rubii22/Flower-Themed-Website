import React from 'react';
import './Gallery.css';

function Gallery() {
  const flowers = [
    { src: "/rose-flower.jpg", alt: "Rose" },
    { src: "/lily-flower.webp", alt: "Lily" },
    { src: "/peony-flower.jpg", alt: "Peony" },
    { src: "/magnolia-flower.jpg", alt: "Magnolia" },
    { src: "/zinnia-flower.webp", alt: "Zinnia" },
    { src: "/lotus-flower.jpg", alt: "Lotus" }
  ];

  return (
    <div className="gallery">
      <h2>Flower Gallery</h2>
      <div className="gallery-images">
        {flowers.map((flower, index) => (
          <div key={index} className="gallery-item">
            <img src={flower.src} alt={flower.alt} className="galleryimg" />
            <div className="caption">{flower.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
