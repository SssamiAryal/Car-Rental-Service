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
    </div>
  );
}

export default Dashboard;
