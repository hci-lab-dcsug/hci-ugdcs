import React from "react";
import "../styles/JoinUsPage.css";

function JoinUsPage() {
  return (
    <div className="join-us-page">
      <h1>Join Us at the HCI & Persuasive Technologies Lab</h1>

      <section className="admission-info">
        <h2>Admission Requirement</h2>
        <p>
          To become a member of the HCI & Persuasive Technologies Laboratory,
          you must first gain admission to the{" "}
          <strong>University of Ghana</strong>. We collaborate with motivated
          students and researchers who share our passion for innovation and
          inclusivity.
        </p>
      </section>

      <section className="research-interests">
        <h2>Our Research Interests</h2>
        <p>
          Our lab focuses on cutting-edge research in Human-Computer
          Interaction, Pervasive Technologies, Large Language Models, Speech
          Recognition, and Artificial Intelligence for Health. We aim to drive
          technological advancements that address real-world challenges.
        </p>
      </section>

      <section className="future-goals">
        <h2>Our Future Goals</h2>
        <p>
          We are committed to leveraging AI and emerging technologies to empower
          marginalized communities, promoting accessibility, inclusivity, and
          sustainable development across the globe.
        </p>
      </section>

      <section className="contact-director left-align">
        <h2>Want to Know More?</h2>
        <p>
          If you are interested in joining us or learning more, feel free to{" "}
          <a href="mailto:iwiafe@ug.edu.gh" className="contact-link">
            {" "}
            contact Prof. Wiafe
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default JoinUsPage;
