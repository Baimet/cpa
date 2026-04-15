import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UpcomingEvents from "./pages/Events/UpcomingEvents";
import PastEvents from "./pages/Events/PastEvents";
import EventDetails from "./pages/EventDetails";
import Blog from "./pages/Blog";
import SocialSidebar from "./components/SocialSidebar";
import { HelmetProvider } from "react-helmet-async";
import BlogDetails from "./pages/BlogDetails";
import Donate from "./pages/Donate";
import DonateSuccess from "./pages/DonateSuccess";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<UpcomingEvents />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate-success" element={<DonateSuccess />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
