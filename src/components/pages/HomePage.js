import React from "react";
import researchFocus from "../../data/researchFocus";
import ResearchCard from "../ResearchCard";
import '../styles/HomePage.css'

function HomePage() {
  return (
    <div className="page">
      <h2>Welcome to the HCI Lab</h2>
      <p>
        Our lab is dedicated to fostering innovation and creativity through
        technology and collaboration. We host regular events, workshops, and
        hackathons to bring together talented individuals and help them solve
        real-world problems using cutting-edge technologies.
      </p>

      <img src="/lab_image.png" alt="HCI Lab" className="lab-image" />
      <h2 className="research-focus">Our Research Interests</h2>
      <div className="research-grid">
        {researchFocus.map((focus, index) => (
          <ResearchCard
            key={index}
            image={focus.image}
            title={focus.title}
            description={focus.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
