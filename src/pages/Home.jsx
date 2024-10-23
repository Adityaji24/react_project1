import React from 'react';
import './Home.css';
import bookImage from '../images/books.jpg'; // Correct way to import images

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Book Haven!</h1>
      <p>Explore our vast collection of books</p>
      <div className="home-image">
        <img src={bookImage} alt="Book Store" /> {/* Use imported image */}
      </div>
      <div className="home-features">
        <h2>Features</h2>
        <ul>
          <li>Wide selection of books</li>
          <li>Competitive prices</li>
          <li>Easy checkout process</li>
          <li>Secure payment options</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
