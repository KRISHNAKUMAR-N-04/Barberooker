import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className={`about-us ${isVisible ? 'animate' : ''}`}>
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        We are dedicated to providing exceptional hair styling services with experienced
        stylists. Our mission is to bring out the best in you with style and elegance.
      </p>
      
      {/* Cards Section */}
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">Experienced Stylists</h3>
          <p className="card-text">
            Our team has years of experience in creating stylish and modern looks.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Quality Products</h3>
          <p className="card-text">
            We use only the best products to ensure quality and satisfaction.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Personalized Service</h3>
          <p className="card-text">
            Every style is customized to bring out the best in you.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Relaxing Environment</h3>
          <p className="card-text">
            Enjoy a luxurious and relaxing experience at our salon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
