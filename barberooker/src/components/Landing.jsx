import React, { useState } from 'react';
import './LandingPage.css';
import Navbar, { NavbarLater } from './Navbar';
import AboutUs from './AboutUs';
import HowToUse from './HowToUse';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
          onClick={() => navigate('/barberooker/booking')}
        >
          Book Now
        </button>
      </div>
    </div>
    <AboutUs/>
    <HowToUse/>
    <Footer/>
    </div>
    
  );
};

export {LandingPage} ;
export default LandingOut;
