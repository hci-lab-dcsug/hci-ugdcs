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
import JoinUs from "./components/pages/JoinUs";
import ContactPage from "./components/pages/ContactPage";
import Publication from "./components/pages/Publication";
import EventDetailPage from "./components/pages/EventDetailPage";
import eventsData from "./data/eventsData";
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
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/events-info" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/events/:eventId"
              element={<EventDetailPage eventsData={eventsData} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
