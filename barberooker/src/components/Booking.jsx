import React, { useState, useEffect } from "react";
import api from "../api"; // Import your Axios instance
import "./Booking.css";
import { NavbarLater } from "./Navbar";
import Footer from "./Footer";

const BookingPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/");
        console.log(response.data);
        setProfiles(response.data); // Ensure response.data contains the profiles
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    })();
  }, []);

  return (
    <div className="Booking">
      <NavbarLater />
      <div className="booking-page">
        <h1>Book Your Stylist</h1>
        <div className="profile-grid">
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <div key={profile._id} className="profile-card">
                <h2>{profile.name}</h2>
                <button className="book-button">Book Now</button>
              </div>
            ))
          ) : (
            <p>Loading profiles...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
