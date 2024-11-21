import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Our facilities are located at the Department of Computer Science Building, in the main campus of University of ghana.
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
      <div className="contact-image">
        <div className="contact-image-card">
          <img
            src="/Dept.jpg"
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
