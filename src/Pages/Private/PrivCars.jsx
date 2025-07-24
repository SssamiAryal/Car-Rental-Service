import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/PrivCars.css";
import { useNavigate, Link } from "react-router-dom";
import { FaUserFriends, FaGasPump, FaCog, FaHome } from "react-icons/fa";
import CarDetailsPopup from "./CarDetailsPopup";

const PrivCars = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [popupCar, setPopupCar] = useState(null);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicle")
      .then((res) => setCars(res.data))
      .catch(() => {});
  }, []);

  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };

  const handleViewDetails = (car) => {
    setPopupCar(car);
  };

  const closePopup = () => {
    setPopupCar(null);
  };

  const brands = [...new Set(cars.map((car) => car.brand))].sort();

  const filteredCars = cars
    .filter((car) => (selectedBrand ? car.brand === selectedBrand : true))
    .filter((car) =>
      selectedTransmission ? car.transmission === selectedTransmission : true
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="priv-cars-page">
      <Link
        to="/dashboard"
        className="priv-floating-home-btn"
        title="Dashboard Home"
      >
        <FaHome size={20} />
      </Link>

      <aside className="priv-filters-section">
        <h3>Filters</h3>
        <div className="priv-filter-group">
          <p>Brand</p>
          {brands.map((brand) => (
            <label key={brand}>
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
              />
              {brand}
            </label>
          ))}
          <label>
            <input
              type="radio"
              name="brand"
              value=""
              checked={selectedBrand === ""}
              onChange={() => setSelectedBrand("")}
            />
            All
          </label>
        </div>

        <div className="priv-filter-group">
          <p>Transmission</p>
          {["Automatic", "Manual"].map((trans) => (
            <label key={trans}>
              <input
                type="radio"
                name="transmission"
                value={trans}
                checked={selectedTransmission === trans}
                onChange={() => setSelectedTransmission(trans)}
              />
              {trans}
            </label>
          ))}
          <label>
            <input
              type="radio"
              name="transmission"
              value=""
              checked={selectedTransmission === ""}
              onChange={() => setSelectedTransmission("")}
            />
            All
          </label>
        </div>
      </aside>

      <section className="priv-cars-container">
        <div className="priv-cars-header">
          <div>
            <h2>Browse Our Cars</h2>
            <p>Find the perfect vehicle for your journey.</p>
          </div>
          <select
            className="priv-sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {filteredCars.length === 0 && (
          <p style={{ padding: "20px", fontStyle: "italic" }}>
            No cars found matching your filters.
          </p>
        )}

        <div className="priv-car-cards">
          {filteredCars.map((car) => (
            <div className="priv-car-card" key={car._id}>
              <img src={car.image} alt={car.name} />
              <div className="priv-car-price">${car.price}/day</div>
              <h3 className="priv-car-name">{car.name}</h3>
              <p className="priv-car-brand">{car.brand}</p>
              <div className="priv-car-info">
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
              <div className="priv-car-rating">⭐ {car.rating}</div>
              <div className="priv-car-actions">
                <button
                  className="priv-view-btn"
                  onClick={() => handleViewDetails(car)}
                >
                  View Details
                </button>
                <button
                  className="priv-book-btn"
                  onClick={() => handleBook(car._id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {popupCar && <CarDetailsPopup car={popupCar} onClose={closePopup} />}
    </div>
  );
};

export default PrivCars;
