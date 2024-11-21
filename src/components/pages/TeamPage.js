import React from "react";
import TeamCard from "../TeamCard";
import "../styles/TeamPage.css";
import teamData from "../../data/teamData";

function TeamPage() {
  const { team, director, codirector } = teamData;

  return (
    <div className="team-page">
      {/* Director and Co-Director Section */}
      <section className="director-section">
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
              {director.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Co-Director Card */}
          <div className="director-card">
            <img
              src={codirector.image}
              alt={codirector.name}
              className="director-image"
            />
            <h3>{codirector.name}</h3>
            <h4>{codirector.title}</h4>
            <ul>
              {codirector.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research Team Section */}
      <section className="team-section">
        <h2 className="team-section-title">RESEARCH TEAM</h2>
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
