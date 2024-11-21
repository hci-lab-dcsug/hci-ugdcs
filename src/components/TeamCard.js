import React from "react";

function TeamCard({ image, name, title, expertise }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-card-image" />
      <h3 className="team-card-name">{name}</h3>
      <p className="team-card-title">{title}</p>
      <p className="team-card-expertise">{expertise}</p>
    </div>
  );
}

export default TeamCard;
