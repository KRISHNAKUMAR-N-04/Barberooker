import React, { useState } from 'react';
import './LandingPage.css';
import Navbar, { NavbarLater } from './Navbar';
import AboutUs from './AboutUs';

const LandingOut = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
        <Navbar/>
            <div className="landing-container">
      <div className="landing-overlay">
        <h1 className="landing-title">Experience Luxury Hair Styling</h1>
        <p className="landing-subtitle">
          Transform your look with top-rated stylists.
        </p>
        <button
          className={`landing-button ${isHovered ? 'hover' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => alert('Register yourself first!')}
        >
          Book Now
        </button>
      </div>
    </div>
    </div>
    
  );
};

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <NavbarLater/>
      <div className="landing-container">
      <div className="landing-overlay">
        <h1 className="landing-title">Experience Luxury Hair Styling</h1>
        <p className="landing-subtitle">
          Transform your look with top-rated stylists.
        </p>
        <button
          className={`landing-button ${isHovered ? 'hover' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => alert('Booking...')}
        >
          Book Now
        </button>
      </div>
    </div>
    <AboutUs/>
    </div>
    
  );
};

export {LandingPage} ;
export default LandingOut;
