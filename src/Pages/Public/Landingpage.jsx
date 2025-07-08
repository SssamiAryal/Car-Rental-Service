import React from "react";
import "../../Styles/Landingpage.css";
import heroImage from "../../assets/images/car.png";

function Landingpage({ onLoginClick }) {
  return (
    <div>
      <header>
        <h1>GadiSawari</h1>
        <nav>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Cars</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <button className="nav-login-btn" onClick={onLoginClick}>
            Login
          </button>
        </nav>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="overlay">
          <h2>Drive Premium Cars at Affordable Rates</h2>
          <p>
            Experience the luxury of driving your dream car with our premium
            rental service. We offer a wide range of vehicles to suit every need
            and occasion.
          </p>
        </div>
      </section>

      <section className="service">
        <h2>Choose your service</h2>
        <div className="card">
          <h3>🚗 Rent a Car</h3>
          <p>Find and book a car for your trip.</p>
          <button>Explore Cars</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose GadiSawari?</h2>
        <p>
          We provide exceptional car rental services with unmatched quality,
          convenience, and customer satisfaction.
        </p>
        <div className="feature-grid">
          <div className="feature-box">
            <div className="icon">🚘</div>
            <h4>Premium Fleet</h4>
            <p>
              Choose from our extensive collection of luxury and economy cars.
            </p>
          </div>
          <div className="feature-box">
            <div className="icon">🛡️</div>
            <h4>Full Insurance</h4>
            <p>
              Enjoy complete coverage and roadside assistance with every rental.
            </p>
          </div>
          <div className="feature-box">
            <div className="icon">⏰</div>
            <h4>24/7 Support</h4>
            <p>
              Always-on customer support and emergency help when you need it.
            </p>
          </div>
          <div className="feature-box">
            <div className="icon">📍</div>
            <h4>Multiple Locations</h4>
            <p>Convenient pickup and drop-off in major cities and airports.</p>
          </div>
        </div>
        <div className="stats-bar">
          <div>
            <h3>500+</h3>
            <p>Premium Cars</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Locations</p>
          </div>
          <div>
            <h3>10k+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>GadiSawari</h3>
            <p>Your trusted ride for comfort, quality, and convenience.</p>
            <p>📞 +977 9876543210</p>
            <p>✉️ info@gadisawari.com</p>
            <p>📍 Kathmandu, Nepal</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Our Fleet</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">FAQs</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 GadiSawari. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;
