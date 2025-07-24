import React, { useState } from "react";
import "../../Styles/AddVehicle.css";

const AddVehicle = ({ isOpen, onClose }) => {
  const [vehicleData, setVehicleData] = useState({
    name: "",
    brand: "",
    price: "",
    seats: "",
    fuel: "",
    transmission: "",
    rating: "",
    image_url: "",
    description: "",
  });

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setVehicleData({ ...vehicleData, image_url: imageUrl });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/vehicle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vehicleData),
      });
      if (res.ok) {
        alert("Vehicle added successfully");
        setVehicleData({
          name: "",
          brand: "",
          price: "",
          seats: "",
          fuel: "",
          transmission: "",
          rating: "",
          image_url: "",
          description: "",
        });
        onClose();
      }
    } catch (err) {
      alert("Failed to add vehicle");
    }
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
            name="price"
            type="number"
            value={vehicleData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            name="seats"
            type="number"
            value={vehicleData.seats}
            onChange={handleChange}
            placeholder="Seats"
          />
          <input
            name="fuel"
            value={vehicleData.fuel}
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
            name="rating"
            type="number"
            step="0.1"
            value={vehicleData.rating}
            onChange={handleChange}
            placeholder="Rating"
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
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
