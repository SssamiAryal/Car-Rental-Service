// BookCar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/BookCar.css";

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
    if (carId) {
      fetch(`http://localhost:5000/api/vehicle/${carId}`)
        .then((res) => res.json())
        .then((car) => {
          if (car && car.image_url) {
            setCarImage(`http://localhost:5000/uploads/${car.image_url}`);
          } else {
            setCarImage(null);
          }
        })
        .catch(() => setCarImage(null));
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

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      pickup_location: data.pickupLocation,
      dropoff_location: data.dropoffLocation,
      pickup_date: data.pickupDate,
      return_date: data.dropoffDate,
      car_id: parseInt(carId),
    };

    try {
      const response = await fetch("http://localhost:5000/api/booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStep(4);
      } else {
        alert("Booking failed: " + result.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="bookcar-container">
      <button className="top-left-back" onClick={() => navigate(-1)}>
        ←
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  min={new Date().toISOString().split("T")[0]}
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
                  min={
                    data.pickupDate || new Date().toISOString().split("T")[0]
                  }
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
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={data.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
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
              pattern="\d{16}"
              title="Enter 16 digit card number"
              autoComplete="cc-number"
            />
            <div className="input-row">
              <input
                type="month"
                name="expiryDate"
                value={data.expiryDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().slice(0, 7)}
                autoComplete="cc-exp"
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={data.cvv}
                onChange={handleChange}
                maxLength={3}
                required
                pattern="\d{3}"
                title="Enter 3 digit CVV"
                autoComplete="cc-csc"
              />
            </div>
          </>
        )}
        {step === 4 && (
          <div className="confirmation">
            <h3>Booking Confirmed!</h3>
            <div className="confirmation-details">
              <p>
                <strong>Name:</strong> {data.fullName}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Phone:</strong> {data.phone}
              </p>
              <p>
                <strong>Pickup Location:</strong> {data.pickupLocation}
              </p>
              <p>
                <strong>Dropoff Location:</strong> {data.dropoffLocation}
              </p>
              <p>
                <strong>Rental Dates:</strong> {data.pickupDate} to{" "}
                {data.dropoffDate}
              </p>
              <p>
                <strong>Car Selected:</strong> {carId && `Car ID: ${carId}`}
              </p>
            </div>
            <button
              className="done-button"
              onClick={() => navigate("/dashboard")}
              type="button"
            >
              Done
            </button>
          </div>
        )}
        {step < 4 && (
          <div className="buttons">
            {step > 1 && (
              <button type="button" className="back-btn-bottom" onClick={back}>
                Back
              </button>
            )}
            {step < 3 && (
              <button type="button" className="next-btn" onClick={next}>
                Next
              </button>
            )}
            {step === 3 && (
              <button type="submit" className="confirm-btn">
                Confirm Booking
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default BookCar;
