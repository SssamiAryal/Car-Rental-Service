import React from "react";
import "../../Styles/Registerpage.css";
import carImage from "../../assets/Images/RRegister.png";

const Registerpage = ({ onBack }) => {
  return (
    <div className="registerpage-container">
      <div className="register-image-wrapper">
        <img src={carImage} alt="Car" className="car-image" />
        <div className="quote-overlay">
          <h1 className="drive-title">
            Drive Your <span className="dreams-highlight">Dreams</span>
          </h1>
          <p>Create your account and start your journey</p>
        </div>
      </div>
      <div className="register-form-wrapper">
        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="register-title">Create Account</h2>

          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Full Name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email" required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            required
          />

          <button type="submit" className="register-btn">
            Register
          </button>

          <button type="button" onClick={onBack} className="back-btn">
            ← Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
