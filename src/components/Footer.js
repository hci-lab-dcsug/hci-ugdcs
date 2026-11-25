import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="strip footer__strip" aria-hidden="true">
        {Array.from({ length: 16 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="footer__top">
        <img
          className="footer__logo"
          src={`${process.env.PUBLIC_URL}/hci-lab-logo.png`}
          alt="UG Human-Computer Interaction Lab, Department of Computer Science"
          width="600"
          height="433"
          loading="lazy"
        />

        <div className="footer__grid">
          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__h">The lab</h2>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/events-info">Events</Link></li>
              <li><Link to="/contact">Join the lab</Link></li>
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__h">Elsewhere</h2>
            <ul>
              <li>
                <a href="https://www.tekyeremapahackathon.com/" target="_blank" rel="noopener noreferrer">
                  Tɛkyerɛma Pa Hackathon
                </a>
              </li>
              <li>
                <a href="https://github.com/hci-lab-dcsug" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://scholar.google.com/citations?user=rTdeBg0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>

          <address className="footer__col">
            <h2 className="footer__h">Find us</h2>
            <p>
              Room CS6, Department of Computer Science
              <br />
              University of Ghana, Legon, Accra
            </p>
            <p>
              <a href="mailto:iwiafe@ug.edu.gh">iwiafe@ug.edu.gh</a>
              <br />
              <a href="mailto:hcidcsug@gmail.com">hcidcsug@gmail.com</a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer__last">
        <p>© {new Date().getFullYear()} Human-Computer Interaction Lab, University of Ghana</p>
        <a href="#main" className="text-link">
          Back to top
        </a>
      </div>

      <p className="footer__credits">
        Context photographs:{" "}
        <a href="https://commons.wikimedia.org/w/index.php?curid=25569048">“Market Women in Ghana”</a> by SandisterTei,{" "}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>;{" "}
        <a href="https://commons.wikimedia.org/w/index.php?curid=14582326">“Classroom in Ghana”</a> by Mmante,{" "}
        <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>. All via Wikimedia Commons.
      </p>
    </footer>
  );
}

export default Footer;
