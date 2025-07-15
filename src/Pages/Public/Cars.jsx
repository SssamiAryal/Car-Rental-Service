import React, { useState } from "react";
import "../../Styles/cars.css";
import { useNavigate, Link } from "react-router-dom";
import { FaUserFriends, FaGasPump, FaCog, FaHome } from "react-icons/fa";

import teslaimage from "../../assets/images/Tesla.png";
import bmw from "../../assets/images/Bmw.png";
import toyota from "../../assets/images/Toyota.png";
import mercedes from "../../assets/images/Mercedes.png";
import honda from "../../assets/images/Honda.png";
import porche from "../../assets/images/Porche.png";
import audi from "../../assets/images/Audi.png";
import mustang from "../../assets/images/mustang.png";
import jeep from "../../assets/images/Jeep.png";
import chevrolet from "../../assets/images/Chevrolet.png";
import nissan from "../../assets/images/Nissan.png";
import volkswagon from "../../assets/images/Volkswagon.png";

const Cars = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const [cars] = useState([
    {
      _id: "1",
      name: "Tesla Model 3",
      brand: "Tesla",
      price: 100,
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      rating: 4.9,
      image: teslaimage,
    },
    {
      _id: "2",
      name: "BMW 5 Series",
      brand: "BMW",
      price: 120,
      seats: 5,
      fuel: "Petrol",
      transmission: "Automatic",
      rating: 4.8,
      image: bmw,
    },
    {
      _id: "3",
      name: "Toyota Corolla",
      brand: "Toyota",
      price: 70,
      seats: 5,
      fuel: "Petrol",
      transmission: "Manual",
      rating: 4.5,
      image: toyota,
    },
    {
      _id: "4",
      name: "Mercedes-Benz C-Class",
      brand: "Mercedes",
      price: 150,
      seats: 5,
      fuel: "Diesel",
      transmission: "Automatic",
      rating: 4.9,
      image: mercedes,
    },
    {
      _id: "5",
      name: "Honda Civic",
      brand: "Honda",
      price: 85,
      seats: 5,
      fuel: "Petrol",
      transmission: "Manual",
      rating: 4.6,
      image: honda,
    },
    {
      _id: "6",
      name: "Porsche 911",
      brand: "Porsche",
      price: 300,
      seats: 2,
      fuel: "Petrol",
      transmission: "Automatic",
      rating: 5.0,
      image: porche,
    },
    {
      _id: "7",
      name: "Audi A6",
      brand: "Audi",
      price: 130,
      seats: 5,
      fuel: "Petrol",
      transmission: "Automatic",
      rating: 4.7,
      image: audi,
    },
    {
      _id: "8",
      name: "Ford Mustang",
      brand: "Ford",
      price: 160,
      seats: 4,
      fuel: "Petrol",
      transmission: "Manual",
      rating: 4.8,
      image: mustang,
    },
    {
      _id: "9",
      name: "Jeep Wrangler",
      brand: "Jeep",
      price: 140,
      seats: 5,
      fuel: "Petrol",
      transmission: "Manual",
      rating: 4.6,
      image: jeep,
    },
    {
      _id: "10",
      name: "Chevrolet Camaro",
      brand: "Chevrolet",
      price: 155,
      seats: 4,
      fuel: "Petrol",
      transmission: "Automatic",
      rating: 4.7,
      image: chevrolet,
    },
    {
      _id: "11",
      name: "Nissan Altima",
      brand: "Nissan",
      price: 75,
      seats: 5,
      fuel: "Petrol",
      transmission: "Automatic",
      rating: 4.4,
      image: nissan,
    },
    {
      _id: "12",
      name: "Volkswagen Golf",
      brand: "Volkswagen",
      price: 80,
      seats: 5,
      fuel: "Diesel",
      transmission: "Manual",
      rating: 4.5,
      image: volkswagon,
    },
  ]);

  const handleBook = (id) => {
    if (isLoggedIn) {
      navigate(`/book/${id}`);
    } else {
      alert("Please login to book a car.");
    }
  };

  return (
    <div className="cars-page">
      <Link to="/" className="floating-home-btn" title="Back to Home">
        <FaHome size={24} />
      </Link>

      <aside className="filters-section">
        <h3>Filters</h3>
        <div className="filter-group">
          <p>Category</p>
          {["Economy", "Luxury", "SUV", "Sports", "Family"].map((cat) => (
            <label key={cat}>
              <input type="checkbox" /> {cat}
            </label>
          ))}
        </div>
        <div className="filter-group">
          <p>Brand</p>
          {["Tesla", "BMW", "Mercedes", "Toyota", "Honda", "Porsche"].map(
            (brand) => (
              <label key={brand}>
                <input type="checkbox" /> {brand}
              </label>
            )
          )}
        </div>
        <div className="filter-group">
          <p>Transmission</p>
          {["Automatic", "Manual"].map((t) => (
            <label key={t}>
              <input type="checkbox" /> {t}
            </label>
          ))}
        </div>
      </aside>

      <section className="cars-section">
        <div className="cars-header">
          <div>
            <h2>Browse Our Cars</h2>
            <p>Find the perfect vehicle for your journey.</p>
          </div>
          <select className="sort-select">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="car-grid">
          {cars.map((car) => (
            <div className="car-card" key={car._id}>
              <img src={car.image} alt={car.name} />
              <div className="car-price">${car.price}/day</div>
              <h3 className="car-name">{car.name}</h3>
              <p className="car-brand">{car.brand}</p>
              <div className="car-info">
                <span>
                  <FaUserFriends /> {car.seats}
                </span>
                <span>
                  <FaGasPump /> {car.fuel}
                </span>
                <span>
                  <FaCog /> {car.transmission}
                </span>
              </div>
              <div className="car-rating">⭐ {car.rating}</div>
              <div className="car-actions">
                <button className="view-btn">View Details</button>
                <button
                  className="book-btn"
                  onClick={() => handleBook(car._id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cars;
