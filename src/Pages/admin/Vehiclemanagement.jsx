import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/VehicleManagement.css";
import AddVehicle from "./AddVehicle";

function VehicleManagement() {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);

  const [isAddVehicleOpen, setIsAddVehicleOpen] = useState(false);

  const handleAddVehicle = (newVehicle) => {
    setVehicles((prev) => [...prev, newVehicle]);
  };

  return (
    <div className="vehicle-wrapper">
      <button
        className="back-button"
        onClick={() => navigate("/admindashboard")}
      >
        <FaArrowLeft /> Back to Dashboard
      </button>

      <div className="vehicle-header">
        <h2>Vehicle Fleet Management</h2>
        <button
          className="add-button"
          onClick={() => setIsAddVehicleOpen(true)}
        >
          <FaPlus /> Add Vehicle
        </button>
      </div>

      <div className="vehicle-controls">
        <input type="text" placeholder="Search vehicles..." />
        <select>
          <option>All Brands</option>
          {/* Add filter options if needed */}
        </select>
      </div>

      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Fuel</th>
            <th>Transmission</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ textAlign: "center", padding: "20px" }}>
                No vehicles added yet.
              </td>
            </tr>
          ) : (
            vehicles.map((v) => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.brand}</td>
                <td>{v.price}</td>
                <td>{v.seats}</td>
                <td>{v.fuel}</td>
                <td>{v.transmission}</td>
                <td>{v.rating}</td>
                <td>{v.description}</td>
                <td className="actions">
                  <FaEye />
                  <FaEdit />
                  <FaTrash />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isAddVehicleOpen && (
        <AddVehicle
          isOpen={isAddVehicleOpen}
          onClose={() => setIsAddVehicleOpen(false)}
          onAdd={(vehicle) => {
            handleAddVehicle(vehicle);
            setIsAddVehicleOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default VehicleManagement;
