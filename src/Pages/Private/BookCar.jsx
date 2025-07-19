import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/BookCar.css";

import teslaimage from "../../assets/images/Tesla.png";
import bmw from "../../assets/images/Bmw.png";
import toyota from "../../assets/images/Toyota.png";
import mercedes from "../../assets/images/Mercedes.png";
import honda from "../../assets/images/Honda.png";
import porche from "../../assets/images/Porche.png";
import audi from "../../assets/images/Audi.png";
import mustang from "../../assets/images/mustang.png";
import jeep from "../../assets/images/Jeep.png";
import chevrolet from "../../assets/images/Chevrolet.png";
import nissan from "../../assets/images/Nissan.png";
import volkswagon from "../../assets/images/Volkswagon.png";

const carImages = {
  1: teslaimage,
  2: bmw,
  3: toyota,
  4: mercedes,
  5: honda,
  6: porche,
  7: audi,
  8: mustang,
  9: jeep,
  10: chevrolet,
  11: nissan,
  12: volkswagon,
};

const BookCar = () => {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    fullName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [carImage, setCarImage] = useState(null);

  useEffect(() => {
    if (carId && carImages[carId]) {
      setCarImage(carImages[carId]);
    }
  }, [carId]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const next = () => {
    if (step < 4) setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const submit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="bookcar-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {carImage && (
        <div className="car-image-container">
          <img src={carImage} alt="Selected Car" />
        </div>
      )}
      <h1>Book Your Dream Car</h1>
      <div className="steps">
        <div className={step >= 1 ? "active" : ""}>Rental Details</div>
        <div className={step >= 2 ? "active" : ""}>Personal Info</div>
        <div className={step >= 3 ? "active" : ""}>Payment</div>
        <div className={step === 4 ? "active" : ""}>Confirmation</div>
      </div>
      <form onSubmit={submit}>
        {step === 1 && (
          <>
            <div className="input-row">
              <div className="input-group">
                <label>Pickup Location</label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  value={data.pickupLocation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Dropoff Location</label>
                <input
                  type="text"
                  name="dropoffLocation"
                  placeholder="Dropoff Location"
                  value={data.dropoffLocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={data.pickupDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Dropoff Date</label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={data.dropoffDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={data.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </>
        )}
        {step === 3 && (
          <>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={data.cardNumber}
              onChange={handleChange}
              maxLength={16}
              required
            />
            <div className="input-row">
              <input
                type="month"
                name="expiryDate"
                value={data.expiryDate}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={data.cvv}
                onChange={handleChange}
                maxLength={3}
                required
              />
            </div>
          </>
        )}
        {step === 4 && (
          <div className="confirmation">
            <h3>Booking Confirmed!</h3>
            <p>Thank you, {data.fullName}. Your booking is successful.</p>
            <p>Confirmation sent to {data.email}</p>
          </div>
        )}
        {step < 4 && (
          <div className="buttons">
            {step > 1 && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            {step < 3 && (
              <button type="button" onClick={next}>
                Next
              </button>
            )}
            {step === 3 && <button type="submit">Confirm Booking</button>}
          </div>
        )}
      </form>
    </div>
  );
};

export default BookCar;
