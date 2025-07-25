import React, { useState, useEffect } from "react";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/CustomerManagement.css";

function CustomerManagement() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch(() => setCustomers([]));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/admin/customers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => setCustomers(customers.filter((c) => c.id !== id)));
  };

  return (
    <div className="customer-management">
      <button
        className="back-button"
        onClick={() => navigate("/admindashboard")}
      >
        <FaArrowLeft /> Back to Dashboard
      </button>
      <h2>Customer Management</h2>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No customers available
              </td>
            </tr>
          ) : (
            customers.map((cust, index) => (
              <tr key={cust.id}>
                <td>{index + 1}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td className="actions">
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(cust.id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerManagement;
