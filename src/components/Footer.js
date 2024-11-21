import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer-content">
          <p>
            © 2024 Human Computer Interactions & Pervasive Technologies
            Laboratory
          </p>
          <p className="footer-logo">HCI Lab</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
