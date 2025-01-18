import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">

      {/* Join Us Section */}
      <div className="join-us-page">
        <h1>Join Us at the HCI & Persuasive Technologies Lab</h1>

        <section className="admission-info">
          <h2>Admission Requirement</h2>
          <p>
            To become a member of the HCI & Persuasive Technologies Laboratory,
            you must first gain admission to the <strong>University of Ghana</strong>. We collaborate with motivated
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
              contact Prof. Wiafe
            </a>
            .
          </p>
        </section>
      </div>
      
      {/* Contact Section */}
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Our facilities are located at the Department of Computer Science Building, in the main campus of University of Ghana.
        </p>
        <p>Our full address is:</p>
        <address>
          Dept of Computer Science Building
          <br />
          University of Ghana
          <br />
          Room CS6, Accra
        </address>
        <div className="contact-buttons">
          <a
            href="mailto:hcidcsug@gmail.com"
            className="contact-button email-button"
          >
            <i className="fas fa-envelope"></i> iwiafe@ug.edu.gh
          </a>
          <a
            href="https://goo.gl/maps/imperial"
            className="contact-button address-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i> Address
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="contact-image">
        <div className="contact-image-card">
          <img
            src={`${process.env.PUBLIC_URL}/Dept.jpg`}
            alt="University of Ghana, Main Campus"
            className="contact-image"
          />
          <p className="contact-image-caption">University of Ghana Campus</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;