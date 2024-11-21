// components/ResearchCard.js
import React from "react";
import "./styles/ResearchCard.css";

function ResearchCard({ image, title, description }) {
  return (
    <div className="research-card">
      <img src={image} alt={title} className="research-card-image" />
      <div className="research-card-container">
        <h3 className="research-card-title">{title}</h3>
        <p className="research-card-description">{description}</p>
      </div>
    </div>
  );
}

export default ResearchCard;
