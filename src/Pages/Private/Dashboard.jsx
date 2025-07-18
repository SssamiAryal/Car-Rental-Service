import React, { useState, useEffect } from "react";
import "../../Styles/Dashboard.css";
import heroImage from "../../assets/images/car.png";
import { useNavigate, Link } from "react-router-dom";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <header className="navbar">
        <h1 className="logo">GadiSawari</h1>
        <nav>
          <div className="nav-links">
            <Link to="/dashboard">Home</Link>
            <Link to="/dashboard/cars">Cars</Link>
            <Link to="/dashboard/about">About</Link>
            <Link to="/dashboard/contact">Contact</Link>
          </div>
          <div className="profile-section">
            <div
              className="profile-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="profile-circle">
                {user.name && user.name.trim() !== "" ? (
                  user.name.trim().charAt(0).toUpperCase()
                ) : (
                  <FaUser style={{ fontSize: "18px" }} />
                )}
              </div>
              <span>{user.name ? user.name.split(" ")[0] : ""}</span> ⌄
            </div>
            {showDropdown && (
              <div className="profile-dropdown">
                <p>{user.email}</p>
                <button className="logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt style={{ marginRight: "8px" }} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay">
          <h2>Find the Perfect Ride for Every Journey</h2>
          <p>
            Choose from a range of premium cars tailored to your travel needs,
            now available at competitive prices.
          </p>
          <div className="search-form">
            <select>
              <option>Select location</option>
              <option>Kathmandu</option>
              <option>Pokhara</option>
              <option>Butwal</option>
            </select>
            <input type="date" />
            <input type="date" />
            <button>Search Available Cars</button>
          </div>
        </div>
      </section>

      <section className="service">
        <h2>Choose your service</h2>
        <div className="card">
          <h3>🚗 Rent a Car</h3>
          <p>Find and book a car for your trip.</p>
          <button onClick={() => navigate("/dashboard/cars")}>
            Explore Cars
          </button>
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
    </div>
  );
}

export default Dashboard;
