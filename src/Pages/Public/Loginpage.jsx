import React from "react";
import "../../Styles/Loginpage.css";
import carImage from "../../assets/Images/Loginpagecar.png";

const Loginpage = ({ onBack, onRegisterClick, onForgetClick }) => {
  return (
    <div className="loginpage-container">
      <div className="login-image-wrapper">
        <img src={carImage} alt="Car" className="car-image" />
        <div className="quote-overlay">
          <h1 className="drive-title">
            Drive Your <span className="dreams-highlight">Dreams</span>
          </h1>
          <p>Reliable Cars. Exceptional Service.</p>
        </div>
      </div>
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="login-title">Welcome to GadiSawari</h2>
          <p className="login-subtitle">
            Please log in to continue your journey
          </p>

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Username" required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            required
          />

          <button type="submit" className="login-btn">
            Log In
          </button>

          <p className="signup-text">
            Don’t have an account?{" "}
            <span
              className="register-link"
              onClick={onRegisterClick}
              style={{ color: "#007bff", cursor: "pointer" }}
            >
              Register
            </span>
          </p>

          <p className="forgot-password-wrapper">
            <span
              className="forgot-password-link"
              onClick={onForgetClick}
              style={{ color: "#007bff", cursor: "pointer" }}
            >
              Forgot Password?
            </span>
          </p>

          <button type="button" onClick={onBack} className="back-btn">
            ← Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
