import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

const carData = [
  { id: "1", name: "Tesla Model 3", price: 100, image: teslaimage },
  { id: "2", name: "BMW 5 Series", price: 120, image: bmw },
  { id: "3", name: "Toyota Corolla", price: 70, image: toyota },
  { id: "4", name: "Mercedes-Benz C-Class", price: 150, image: mercedes },
  { id: "5", name: "Honda Civic", price: 85, image: honda },
  { id: "6", name: "Porsche 911", price: 300, image: porche },
  { id: "7", name: "Audi A6", price: 130, image: audi },
  { id: "8", name: "Ford Mustang", price: 160, image: mustang },
  { id: "9", name: "Jeep Wrangler", price: 140, image: jeep },
  { id: "10", name: "Chevrolet Camaro", price: 155, image: chevrolet },
  { id: "11", name: "Nissan Altima", price: 75, image: nissan },
  { id: "12", name: "Volkswagen Golf", price: 80, image: volkswagon },
];

const steps = ["Rent Details", "Personal Info", "Payment", "Confirmation"];

const BookCar = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [step, setStep] = useState(1);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const selectedCar = carData.find((c) => c.id === carId);
    setCar(selectedCar);
  }, [carId]);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      carId,
      carName: car.name,
      pickupLocation,
      pickupDate,
      returnDate,
      fullName,
      email,
      phone,
      cardNumber,
      expiry,
      cvv,
    };
    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(bookingData),
      });
      if (res.ok) {
        setConfirmed(true);
        setStep(4);
      } else {
        alert("Booking failed");
      }
    } catch {
      alert("Error occurred");
    }
  };

  if (!car) return <p>Loading...</p>;

  return (
    <div className="bookcar-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="bookcar-card">
        <img src={car.image} alt={car.name} className="car-image" />

        <div className="progress-bar">
          {steps.map((label, i) => {
            const stepIndex = i + 1;
            return (
              <div
                key={label}
                className={`progress-step ${
                  stepIndex === step
                    ? "current"
                    : stepIndex < step
                    ? "completed"
                    : ""
                }`}
              >
                <div className="step-number">{stepIndex}</div>
                <div className="step-label">{label}</div>
                {stepIndex !== steps.length && (
                  <div className="step-line"></div>
                )}
              </div>
            );
          })}
        </div>

        {!confirmed && (
          <form onSubmit={handleSubmit} className="booking-form">
            {step === 1 && (
              <>
                <label>Pickup Location</label>
                <input
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  required
                />
                <div className="input-row">
                  <div>
                    <label>Pickup Date</label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Return Date</label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <label>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </>
            )}

            {step === 3 && (
              <>
                <label>Card Number</label>
                <input
                  type="text"
                  maxLength="16"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                  inputMode="numeric"
                />
                <div className="input-row">
                  <div>
                    <label>Expiry Date</label>
                    <input
                      type="month"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>CVV</label>
                    <input
                      type="password"
                      maxLength="3"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      inputMode="numeric"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="button-row">
              {step > 1 && (
                <button type="button" className="back-step" onClick={prevStep}>
                  Back
                </button>
              )}
              {step < 3 && (
                <button type="button" className="next-step" onClick={nextStep}>
                  Next
                </button>
              )}
              {step === 3 && (
                <button type="submit" className="confirm-btn">
                  Confirm Booking
                </button>
              )}
            </div>
          </form>
        )}

        {confirmed && (
          <div className="confirmation-msg">
            <h2>Booking Confirmed!</h2>
            <p>
              Thank you, {fullName}. Your booking for {car.name} is confirmed.
            </p>
            <button onClick={() => navigate("/")}>Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCar;
