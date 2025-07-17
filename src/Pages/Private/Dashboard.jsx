import React, { useState } from "react";
import "../../Styles/Dashboard.css";
import heroImage from "../../assets/images/car.png";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const user = {
    name: "Samiraryal",
    email: "samir@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <h1>GadiSawari</h1>
        <nav>
          <div className="nav-links">
            <a href="#" onClick={() => navigate("/")}>
              Home
            </a>
            <a href="#" onClick={() => navigate("/cars")}>
              Cars
            </a>
            <a href="#" onClick={() => navigate("/about")}>
              About
            </a>
            <a href="#" onClick={() => navigate("/contact")}>
              Contact
            </a>
          </div>

          <div className="profile-section">
            <div
              className="profile-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{user.name.split(" ")[0]}</span> ⌄
            </div>
            {showDropdown && (
              <div className="profile-dropdown">
                <p>{user.email}</p>
                <button onClick={handleLogout}>Logout</button>
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

      {/* Copy the rest of the Landingpage sections here as needed */}
    </div>
  );
}

export default Dashboard;
