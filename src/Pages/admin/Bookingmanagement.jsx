import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/BookingManagement.css";

function BookingManagement() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "John Smith",
      address: "123 Main St",
      vehicle: "BMW 320i",
      date: "2025-07-15",
      status: "active",
      total: "$450",
    },
    {
      id: 2,
      customer: "Sarah Johnson",
      address: "456 Oak Ave",
      vehicle: "Toyota Camry",
      date: "2025-07-12",
      status: "completed",
      total: "$300",
    },
    {
      id: 3,
      customer: "Mike Brown",
      address: "789 Pine Rd",
      vehicle: "Mercedes C-Class",
      date: "2025-07-18",
      status: "pending",
      total: "$600",
    },
    {
      id: 4,
      customer: "Lisa Davis",
      address: "321 Elm St",
      vehicle: "Audi A4",
      date: "2025-07-20",
      status: "active",
      total: "$500",
    },
  ]);

  const getStatusClass = (status) => {
    if (status === "active") return "status active";
    if (status === "completed") return "status completed";
    if (status === "pending") return "status pending";
    return "status";
  };

  return (
    <div className="booking-wrapper">
      <button
        className="back-button"
        onClick={() => navigate("/admindashboard")}
      >
        <FaArrowLeft /> Back to Dashboard
      </button>
      <div className="booking-header">
        <h2>Booking Management</h2>
        <button className="add-button">
          <FaPlus /> Add Booking
        </button>
      </div>

      <div className="booking-controls">
        <input type="text" placeholder="Search bookings..." />
        <select>
          <option>All Status</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      <table className="booking-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Address</th>
            <th>Vehicle</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.customer}</td>
              <td>{b.address}</td>
              <td>{b.vehicle}</td>
              <td>{b.date}</td>
              <td>
                <span className={getStatusClass(b.status)}>{b.status}</span>
              </td>
              <td>{b.total}</td>
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

export default BookingManagement;
