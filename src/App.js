import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import Footer from "./components/Footer";
import TeamPage from "./components/pages/TeamPage";
import SoftwarePage from "./components/pages/SoftwarePage";
import ContactPage from "./components/pages/ContactPage";
import PublicationsPage from "./components/pages/PublicationsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import Navbar from "./components/pages/Navbar";
import "./App.css";



function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/events-info" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
