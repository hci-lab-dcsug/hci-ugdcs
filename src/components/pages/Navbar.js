import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <nav
      className={
        isHomepage ? "navbar homepage-navbar" : "navbar non-home-navbar"
      }
    >
      {!isHomepage && (
        <div className="navbar-branding">
          <Link to="/" className="logo-link">
            <img src="/hci.png" alt="Lab Logo" className="navbar-logo" />
            <p className="lab-name">HCI & Persuasive Technologies Laboratory</p>
          </Link>
          <div className="ug">
            <h2 className="university">University of Ghana</h2>
          </div>
        </div>
      )}
      {isHomepage && (
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/hci.png" alt="HCI Lab Logo" className="navbar-logo" />
            <p className="lab-name">HCI & Persuasive Technologies Lab</p>
          </Link>
        </div>
      )}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/events-info"> Events</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/join-us">Join Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
