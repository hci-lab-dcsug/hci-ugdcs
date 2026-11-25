import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import Footer from "./components/Footer";
import TeamPage from "./components/pages/TeamPage";
import ContactPage from "./components/pages/ContactPage";
import PublicationsPage from "./components/pages/PublicationsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import Navbar from "./components/pages/Navbar";
import useReveal from "./lib/useReveal";

function PageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useReveal();
  return null;
}

function App() {
  return (
    <Router basename="/hci-ugdcs">
      <PageEffects />
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <filter id="ink-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </svg>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/events-info" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/software" element={<Navigate to="/projects" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
