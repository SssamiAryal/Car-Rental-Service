import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import "../../Styles/VehicleManagement.css";

function VehicleManagement() {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "2023 BMW 320i",
      plate: "ABC123",
      status: "available",
      mileage: "15,420 mi",
      rate: "$89/day",
      location: "Downtown Branch",
    },
    {
      id: 2,
      name: "2022 Toyota Camry",
      plate: "XYZ789",
      status: "rented",
      mileage: "28,350 mi",
      rate: "$65/day",
      location: "Airport Branch",
    },
    {
      id: 3,
      name: "2023 Mercedes C-Class",
      plate: "DEF456",
      status: "maintenance",
      mileage: "8,920 mi",
      rate: "$125/day",
      location: "Mall Branch",
    },
    {
      id: 4,
      name: "2022 Audi A4",
      plate: "GHI789",
      status: "available",
      mileage: "21,580 mi",
      rate: "$95/day",
      location: "Downtown Branch",
    },
  ]);

  const getStatusClass = (status) => {
    if (status === "available") return "status available";
    if (status === "rented") return "status rented";
    if (status === "maintenance") return "status maintenance";
    return "status";
  };

  return (
    <div className="vehicle-wrapper">
      <div className="vehicle-header">
        <h2>Vehicle Fleet Management</h2>
        <button className="add-button">
          <FaPlus /> Add Vehicle
        </button>
      </div>

      <div className="vehicle-controls">
        <input type="text" placeholder="Search vehicles..." />
        <select>
          <option>All Status</option>
          <option>Available</option>
          <option>Rented</option>
          <option>Maintenance</option>
        </select>
      </div>

      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>License Plate</th>
            <th>Status</th>
            <th>Mileage</th>
            <th>Daily Rate</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.plate}</td>
              <td>
                <span className={getStatusClass(v.status)}>{v.status}</span>
              </td>
              <td>{v.mileage}</td>
              <td>{v.rate}</td>
              <td>{v.location}</td>
              <td className="actions">
                <FaEye />
                <FaEdit />
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleManagement;
