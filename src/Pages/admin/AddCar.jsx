import React, { useState } from "react";
import "./AddCar.css";

const AddCar = ({ isOpen, onClose }) => {
  const [carData, setCarData] = useState({
    name: "",
    brand: "",
    year: "",
    fuel_type: "",
    transmission: "",
    price_per_day: "",
    image_url: "",
    description: "",
  });

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your backend API with carData
    alert("Car added successfully");
    setCarData({
      name: "",
      brand: "",
      year: "",
      fuel_type: "",
      transmission: "",
      price_per_day: "",
      image_url: "",
      description: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={carData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="brand"
            value={carData.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />
          <input
            name="year"
            type="number"
            value={carData.year}
            onChange={handleChange}
            placeholder="Year"
          />
          <input
            name="fuel_type"
            value={carData.fuel_type}
            onChange={handleChange}
            placeholder="Fuel Type"
          />
          <input
            name="transmission"
            value={carData.transmission}
            onChange={handleChange}
            placeholder="Transmission"
          />
          <input
            name="price_per_day"
            type="number"
            value={carData.price_per_day}
            onChange={handleChange}
            placeholder="Price per Day"
            required
          />
          <input
            name="image_url"
            value={carData.image_url}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <textarea
            name="description"
            value={carData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button type="submit" className="submit-btn">
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
