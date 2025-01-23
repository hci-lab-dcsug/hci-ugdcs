import React from "react";
import TeamCard from "../TeamCard";
import "../styles/TeamPage.css";
import teamData from "../../data/teamData";
import { Link } from "react-router-dom"; // For navigation if using routes

function TeamPage() {
  const { team, staffs } = teamData;
  const currentMembers = team.filter((member) => member.status === "current");
  const pastMembers = team.filter((member) => member.status === "past");

  return (
    <div className="team-page">
      {/* staffs Section */}
      <section className="staffs-section">
        <h2 className="team-section-title">Lab Staff</h2>
        <div className="team-grid staffs-grid">
          {/* staffs Card */}
          {staffs.map((staff, index) => (
            <div key={index} className="staffs-card">
              <img
                src={staff.image}
                alt={staff.name}
                className="staffs-image"
              />
              <h3>{staff.name}</h3>
              <h4>{staff.title}</h4>
              <ul>
                {staff.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Link
                to="https://scholar.google.com/citations?user=rTdeBg0AAAAJ&hl=en&oi=ao"
                target="_blank"
                className="read-more-link"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Research Team Section */}

      {/* Current Members */}
      <section className="team-section">
        <h2 className="team-section-title">Research Team</h2>
        <h4 className="member-status"> Current Members</h4>
        <div className="team-grid">
          {currentMembers.map((member, index) => (
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

      {/* Past Members */}
      <section className="team-section">
        <h2 className="team-section-title">Research Team</h2>
        <h4 className="member-status"> Past Members</h4>
        <div className="team-grid">
          {pastMembers.map((member, index) => (
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
