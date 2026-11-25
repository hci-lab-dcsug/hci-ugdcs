import React from "react";
import Motif from "../Motif";
import "../styles/Pages.css";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Department+of+Computer+Science+University+of+Ghana+Legon";

function ContactPage() {
  return (
    <>
      <header className="page-head">
        <h1 data-reveal>Join the lab</h1>
        <Motif />
        <p className="lead" data-reveal style={{ "--i": 1 }}>
          We take on students and researchers admitted to the University of Ghana. Here is how to get in touch.
        </p>
      </header>

      <section className="join wrap" aria-label="How to join">
        <div className="join__step" data-reveal>
          <Motif className="join__o" />
          <h2>Get into the University of Ghana</h2>
          <p>
            Lab members are students or staff of the University of Ghana, so admission comes first: to an MSc, MPhil
            or PhD programme in Computer Science, or a related department.
          </p>
        </div>
        <div className="join__step" data-reveal style={{ "--i": 1 }}>
          <Motif className="join__o" />
          <h2>Pick the work you want to do</h2>
          <p>
            Our projects cover human–computer interaction, persuasive technology, large language models, speech
            recognition and AI for health, mostly in Ghanaian languages.
          </p>
        </div>
        <div className="join__step" data-reveal style={{ "--i": 2 }}>
          <Motif className="join__o" />
          <h2>Write to Prof. Wiafe</h2>
          <p>
            Say who you are, your programme, and which project interests you. The lab also wants to use technology to
            widen access for communities that software has left out.
          </p>
          <a className="btn" href="mailto:iwiafe@ug.edu.gh?subject=Joining%20the%20HCI%20Lab">
            Email Prof. Wiafe <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="partner wrap" id="partner" aria-labelledby="partner-h">
        <h2 id="partner-h" data-reveal>
          Partner with the lab
        </h2>
        <p className="lead" data-reveal style={{ "--i": 1 }}>
          Funders, companies and organisations work with us on speech data, Ghanaian-language tools, hackathons and
          research. Write to Prof. Wiafe with what you have in mind.
        </p>
        <a
          className="btn btn--navy"
          href="mailto:iwiafe@ug.edu.gh?subject=Partnership%20with%20the%20HCI%20Lab"
          data-reveal
          style={{ "--i": 2 }}
        >
          Email about a partnership <span className="arrow" aria-hidden="true">→</span>
        </a>
      </section>

      <section className="visit" aria-labelledby="visit-h">
        <figure className="visit__photo" data-reveal="scale">
          <img
            src={`${process.env.PUBLIC_URL}/Dept.jpg`}
            alt="Entrance of the Department of Computer Science building, University of Ghana"
            width="1360"
            height="765"
            loading="lazy"
          />
        </figure>
        <div className="visit__text">
          <h2 id="visit-h" data-reveal>
            Find us at Legon
          </h2>
          <address data-reveal style={{ "--i": 1 }}>
            Human-Computer Interaction Lab
            <br />
            Department of Computer Science Building
            <br />
            University of Ghana, Legon, Accra
          </address>
          <ul className="visit__links" data-reveal style={{ "--i": 2 }}>
            <li>
              <a className="text-link" href={MAP_URL} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </li>
            <li>
              Lab email: <a className="text-link" href="mailto:hcidcsug@gmail.com">hcidcsug@gmail.com</a>
            </li>
            <li>
              Director: <a className="text-link" href="mailto:iwiafe@ug.edu.gh">iwiafe@ug.edu.gh</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
