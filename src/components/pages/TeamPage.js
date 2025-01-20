import React from "react";
import TeamCard from "../TeamCard";
import "../styles/TeamPage.css";
import teamData from "../../data/teamData";
import { Link } from "react-router-dom"; // For navigation if using routes

function TeamPage() {
  const { team, director } = teamData;

  return (
    <div className="team-page">
      {/* Director Section */}
      <section className="director-section">
      <h2 className="team-section-title">Lab Director</h2>
        <div className="directors-grid">
          {/* Director Card */}
          <div className="director-card">
            <img
              src={director.image}
              alt={director.name}
              className="director-image"
            />
            <h3>{director.name}</h3>
            <h4>{director.title}</h4>
            <ul>
              {director.description.slice(0, 3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link to="https://scholar.google.com/citations?user=rTdeBg0AAAAJ&hl=en&oi=ao" target="_blank" className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Research Team Section */}
      <section className="team-section">
        <h2 className="team-section-title">Research Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
              expertise={member.expertise}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
