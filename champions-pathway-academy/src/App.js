import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Scouting from "./pages/Scouting";
import OurTeam from "./pages/OurTeam";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import PastEvents from "./pages/PastEvents";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/scouting" element={<Scouting />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/past-events/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
