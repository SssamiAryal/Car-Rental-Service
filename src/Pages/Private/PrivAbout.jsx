import React from "react";
import "../../Styles/PrivAbout.css";
import { useNavigate } from "react-router-dom";
import { FaCarAlt, FaSmile, FaPhoneAlt, FaHome } from "react-icons/fa";

const PrivAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="priv-about-page">
      <button
        className="floating-home-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FaHome size={20} />
      </button>

      <section className="about-hero">
        <h1>About GadiSawari</h1>
        <p>Drive your dreams with confidence and style.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Welcome to our Car Rental Service! We provide a wide range of cars to
          suit your needs, whether you're looking for a luxurious ride, a
          fuel-efficient option, or a family vehicle. Our mission is to make
          renting cars simple, affordable, and enjoyable.
        </p>
      </section>

      <section className="about-services">
        <h2>Why Choose Us?</h2>
        <div className="service-boxes">
          <div className="service-box">
            <FaCarAlt size={30} />
            <h3>Wide Fleet</h3>
            <p>
              From luxury to economy, we’ve got the right car for every need.
            </p>
          </div>
          <div className="service-box">
            <FaSmile size={30} />
            <h3>Happy Customers</h3>
            <p>Over 10,000 satisfied users and growing every day.</p>
          </div>
          <div className="service-box">
            <FaPhoneAlt size={30} />
            <h3>24/7 Support</h3>
            <p>We’re always here to help, anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <section className="about-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              “Great experience! The car was clean and well-maintained. Pickup
              and drop were smooth. Highly recommend!”
            </p>
            <h4>- Aayush Shrestha</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Affordable and convenient. Their support team is very helpful.
              Will definitely use GadiSawari again.”
            </p>
            <h4>- Anuska Shrestha</h4>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Ride?</h2>
        <p>Find your perfect car and start your journey today.</p>
        <button
          className="explore-btn"
          onClick={() => navigate("/dashboard/cars")}
        >
          Explore Cars
        </button>
      </section>
    </div>
  );
};

export default PrivAbout;
