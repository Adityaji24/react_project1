// src/components/Home.js

import React from "react";
import Navbar from "./navbar.jsx";
import BannerSlider from "./BannerSlider";
import EventCard from "./EventCard";
import "./Home.css";
import concertImg from "./images/concert.jpg";
import artImg from "./images/art.jpg";
import foodImg from "./images/food2.jpeg";
import techImg from "./images/tech.jpg";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Home = () => {
  const events = [
    { title: "Music Concert", date: "Oct 30, 2024 ",image: concertImg, location: "Central Park,Delhi", description: "Join us for an evening of great music featuring local artists." },
    { title: "Art Exhibition", date: "Nov 10, 2024", image: artImg, location: "Art Gallery,Indore", description: "Explore stunning artworks by emerging artists in our annual exhibition." },
    { title: "Food Festival", date: "Nov 15, 2024", image: foodImg, location: "City Square,Noida", description: "Taste dishes from around the world at our exciting food festival." },
    { title: "Tech Summit", date: "Dec 5, 2024", image: techImg, location: "Tech Hub,Bhopal", description: "A gathering of innovators and tech enthusiasts discussing the future of technology." },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <BannerSlider />
      <div className="intro-section">
        <h1>Welcome to Our Event Hub!</h1>
      </div>
      <h2>Featured Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>

      {/* Testimonials Section */}
      
      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Stay Updated!</h2>
        <p>Subscribe to our newsletter for the latest event news and updates.</p>
        <button>Subscribe Now</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Event Hub. All rights reserved.</p>
        <p>Follow us on social media for updates!</p>
        <div className="social-media-icons">
          {/* Add icons for social media (you can use Font Awesome or similar libraries) */}
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </footer>
    </div>
  );
};

export default Home;
