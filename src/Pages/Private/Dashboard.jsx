// src/Pages/Private/Dashboard.jsx
import React, { useState, useEffect } from "react";
import "../../Styles/Dashboard.css";
import heroImage from "../../assets/images/car.png";
import { useNavigate } from "react-router-dom";
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
      <header>
        <h1>GadiSawari</h1>
        <nav>
          <div className="nav-links">
            <a href="#" onClick={() => navigate("/dashboard")}>
              Home
            </a>
            <a href="#" onClick={() => navigate("/priv-cars")}>
              Cars
            </a>
            <a href="#" onClick={() => navigate("/priv-about")}>
              About
            </a>
            <a href="#" onClick={() => navigate("/priv-contact")}>
              Contact
            </a>
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
          <h2>Drive Premium Cars at Affordable Rates</h2>
          <p>
            Experience the luxury of driving your dream car with our premium
            rental service. We offer a wide range of vehicles to suit every need
            and occasion.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
