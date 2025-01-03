import React, { useState, useEffect } from "react";
import api from "../api"; // Import your Axios instance
import "./Booking.css";
import { NavbarLater } from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/");
        setProfiles(response.data);      ;
      } catch (err) {
        console.error("Error fetching profiles:", err);
        setError("Failed to fetch barber profiles.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleBook = (barberId) => {
    // Navigate to the booking page for a specific barber
    navigate(`/stylist/${barberId}`);
  };

  return (
    <div className="Booking">
      <NavbarLater />
      <div className="booking-page">
        <h1>Book Your Stylist</h1>
        {loading ? (
          <p>Loading profiles...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="profile-grid">
            {profiles.map((profile) => (
              <div key={profile._id} className="profile-card">
                <h2>{profile.name}</h2>
                <p>{profile.specialization || "General Barber"}</p>
                <p>Rating: {profile.rating || "N/A"}</p>
                <button
                  onClick={() => handleBook(profile._id)}
                  className="book-button"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
