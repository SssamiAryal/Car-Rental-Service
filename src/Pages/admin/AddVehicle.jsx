import React, { useState } from "react";
import "../../Styles/AddVehicle.css";

const AddVehicle = ({ isOpen, onClose }) => {
  const [vehicleData, setVehicleData] = useState({
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
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect your backend API here to add the vehicle
    alert("Vehicle added successfully");
    setVehicleData({
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
        <h2>Add New Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={vehicleData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="brand"
            value={vehicleData.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />
          <input
            name="year"
            type="number"
            value={vehicleData.year}
            onChange={handleChange}
            placeholder="Year"
          />
          <input
            name="fuel_type"
            value={vehicleData.fuel_type}
            onChange={handleChange}
            placeholder="Fuel Type"
          />
          <input
            name="transmission"
            value={vehicleData.transmission}
            onChange={handleChange}
            placeholder="Transmission"
          />
          <input
            name="price_per_day"
            type="number"
            value={vehicleData.price_per_day}
            onChange={handleChange}
            placeholder="Price per Day"
            required
          />
          <input
            name="image_url"
            value={vehicleData.image_url}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <textarea
            name="description"
            value={vehicleData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button type="submit" className="submit-btn">
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
