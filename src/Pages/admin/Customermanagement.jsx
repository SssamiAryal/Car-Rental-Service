import React from "react";
import "../../Styles/CustomerManagement.css";

const CustomerManagement = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+977-9876543210",
      address: "Kathmandu, Nepal",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+977-9841234567",
      address: "Pokhara, Nepal",
    },
  ];

  return (
    <div className="customer-management">
      <h2>Customer Management</h2>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={cust.id}>
              <td>{index + 1}</td>
              <td>{cust.name}</td>
              <td>{cust.email}</td>
              <td>{cust.phone}</td>
              <td>{cust.address}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;
