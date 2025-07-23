import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/CustomerManagement.css";

function CustomerManagement() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 555-1234",
      license: "D12345678",
      bookings: 4,
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 555-5678",
      license: "A98765432",
      bookings: 2,
      status: "active",
    },
    {
      id: 3,
      name: "Mike Brown",
      email: "mike.b@example.com",
      phone: "+1 555-9012",
      license: "C23456789",
      bookings: 0,
      status: "inactive",
    },
  ]);

  const getStatusClass = (status) => {
    return status === "active" ? "status active" : "status inactive";
  };

  return (
    <div className="customer-wrapper">
      <button
        className="back-button"
        onClick={() => navigate("/admindashboard")}
      >
        <FaArrowLeft /> Back to Dashboard
      </button>

      <div className="customer-header">
        <h2>Customer Management</h2>
        <button className="add-button">
          <FaPlus /> Add Customer
        </button>
      </div>

      <div className="customer-controls">
        <input type="text" placeholder="Search customers..." />
        <select>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>License #</th>
            <th>Bookings</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.license}</td>
              <td>{c.bookings}</td>
              <td>
                <span className={getStatusClass(c.status)}>{c.status}</span>
              </td>
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

export default CustomerManagement;
