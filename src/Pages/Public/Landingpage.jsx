import React from "react";
import "../../Styles/Landingpage.css";
import heroImage from "../../assets/images/car.png";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>GadiSawari</h1>
        <nav>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#" onClick={() => navigate("/cars")}>
              Cars
            </a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <button className="nav-login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </nav>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
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
          <button onClick={() => navigate("/cars")}>Explore Cars</button>
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

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Renting a car with GadiSawari is simple. Just follow these steps and
          hit the road.
        </p>
        <div className="steps-container">
          <div className="step-box">
            <div className="step-circle">1</div>
            <h3>Choose Your Car</h3>
            <p>
              Browse our wide selection of vehicles and pick the best fit for
              your journey.
            </p>
          </div>
          <div className="step-box">
            <div className="step-circle">2</div>
            <h3>Book & Pay</h3>
            <p>
              Select your dates, confirm your booking, and pay securely online.
            </p>
          </div>
          <div className="step-box">
            <div className="step-circle">3</div>
            <h3>Enjoy the Ride</h3>
            <p>
              Pick up your car and enjoy a premium, hassle-free driving
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers
          who have experienced our premium car rental service.
        </p>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="customer-avatar">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Jennifer Lawrence"
                />
              </div>
              <div className="customer-info">
                <h4>Jennifer Lawrence</h4>
                <p>Los Angeles, CA</p>
              </div>
              <div className="quote-icon">❝</div>
            </div>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="testimonial-text">
              The Tesla Model 3 I rented was immaculate and made my business
              trip so much more enjoyable. The booking process was smooth, and
              pickup was a breeze. Will definitely use GadiSawari again!
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="customer-avatar">
                <img src="https://via.placeholder.com/50" alt="Michael Chen" />
              </div>
              <div className="customer-info">
                <h4>Michael Chen</h4>
                <p>San Francisco, CA</p>
              </div>
              <div className="quote-icon">❝</div>
            </div>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="testimonial-text">
              Rented a BMW for a weekend getaway, and it exceeded my
              expectations. The staff was professional, and the car was in
              perfect condition. The whole experience was worth every penny.
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="customer-avatar">
                <img src="https://via.placeholder.com/50" alt="Emma Wilson" />
              </div>
              <div className="customer-info">
                <h4>Emma Wilson</h4>
                <p>Chicago, IL</p>
              </div>
              <div className="quote-icon">❝</div>
            </div>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="testimonial-text">
              As someone who travels frequently for work, I appreciate the
              consistency and quality of GadiSawari's service. Their fleet is
              always up-to-date and well-maintained.
            </p>
          </div>
        </div>
        <div className="testimonials-cta">
          <button className="view-all-btn">View All Reviews</button>
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
