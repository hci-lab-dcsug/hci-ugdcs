import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

function NotFoundPage() {
  return (
    <section className="notfound wrap">
      <img className="notfound__o" src={`${process.env.PUBLIC_URL}/hci-lab-crest.png`} alt="" width="128" height="143" />
      <h1>This page isn’t here</h1>
      <p className="lead">The link may be old, or the page may have moved.</p>
      <div className="notfound__links">
        <Link to="/" className="btn">
          Go to the home page
        </Link>
        <Link to="/projects" className="text-link">
          See our projects
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
