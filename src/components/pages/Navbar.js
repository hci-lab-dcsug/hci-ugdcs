import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const LINKS = [
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/publications", label: "Publications" },
  { to: "/events-info", label: "Events" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${open ? " nav--open" : ""}`}>
      <Link to="/" className="nav__mark" aria-label="Human-Computer Interaction Lab, University of Ghana: home">
        <img className="nav__crest" src={`${process.env.PUBLIC_URL}/hci-lab-crest.png`} alt="" width="34" height="38" />
        <span className="nav__name">
          <span className="nav__lab">Human-Computer Interaction Lab</span>
          <span className="nav__uni">University of Ghana · Dept. of Computer Science</span>
        </span>
      </Link>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav id="site-menu" className="nav__menu" aria-label="Main">
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className="nav__link">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn nav__action">
          Join the lab
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
