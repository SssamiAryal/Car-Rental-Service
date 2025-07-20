import React, { useState } from "react";
import "../../Styles/PrivCars.css";
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

import CarDetailsPopup from "./CarDetailsPopup";

const PrivCars = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [popupCar, setPopupCar] = useState(null);

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
      description:
        "Tesla Model 3 is a fully electric sedan with long range and fast acceleration. It features Autopilot, minimalist interior, fast charging, and advanced safety technologies, making it ideal for modern eco-conscious drivers.",
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
      description:
        "BMW 5 Series combines elegance, performance, and innovation. It includes luxurious leather interiors, intuitive infotainment system, ambient lighting, and dynamic driving performance suitable for both city and highway trips.",
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
      description:
        "Toyota Corolla is globally renowned for reliability and efficiency. It features a comfortable ride, touchscreen infotainment, fuel-saving engine, and spacious rear seats, making it great for families and daily commutes.",
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
      description:
        "Mercedes-Benz C-Class delivers luxury and precision engineering. Premium materials, advanced driver assistance, and a smooth ride offer a refined and safe driving experience with a strong visual presence.",
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
      description:
        "Honda Civic is known for reliability and sportiness. With sharp design, user-friendly tech, great fuel economy, and smooth handling, it’s perfect for daily drivers who want efficiency and style.",
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
      description:
        "Porsche 911 is an icon in sports car heritage. With blistering acceleration, rear-engine layout, superior balance, and luxury cabin, it’s a top choice for thrill-seekers and driving enthusiasts.",
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
      description:
        "Audi A6 provides a balance of luxury and performance. Its quiet cabin, virtual cockpit, adaptive cruise control, and quattro all-wheel-drive make it excellent for both comfort and capability.",
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
      description:
        "Ford Mustang is a legendary American muscle car. With aggressive styling, roaring V8, rear-wheel-drive thrills, and race-ready looks, it’s built for pure performance and road presence.",
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
      description:
        "Jeep Wrangler is built for adventure. Known for off-road strength, removable roof and doors, rugged tires, and 4x4 system, it’s ideal for wild terrains and open-air driving experiences.",
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
      description:
        "Chevrolet Camaro is bold and athletic. It features sporty suspension, strong engine options, modern tech, and aggressive styling suited for performance lovers and city cruisers alike.",
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
      description:
        "Nissan Altima offers value, comfort, and modern safety. With efficient engines, zero-gravity seats, and a spacious trunk, it's a dependable choice for long-distance comfort and convenience.",
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
      description:
        "Volkswagen Golf is compact and premium. It offers precise handling, modern infotainment, solid build, and hatchback practicality for both solo travelers and urban families.",
    },
  ]);

  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };

  const handleViewDetails = (car) => {
    setPopupCar(car);
  };

  const closePopup = () => {
    setPopupCar(null);
  };

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
    <div className="cars-page">
      <Link to="/dashboard" className="floating-home-btn">
        <FaHome size={24} />
      </Link>

      <aside className="filters-section">
        <h3>Filters</h3>
        <div className="filter-group">
          <p>Brand</p>
          {[
            "Tesla",
            "BMW",
            "Mercedes",
            "Toyota",
            "Honda",
            "Porsche",
            "Audi",
            "Ford",
            "Jeep",
            "Chevrolet",
            "Nissan",
            "Volkswagen",
          ].map((brand) => (
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

        <div className="filter-group">
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

      <section className="cars-section">
        <div className="cars-header">
          <div>
            <h2>Browse Our Cars</h2>
            <p>Find the perfect vehicle for your journey.</p>
          </div>
          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="car-grid">
          {filteredCars.length === 0 && (
            <p style={{ padding: "20px", fontStyle: "italic" }}>
              No cars found matching your filters.
            </p>
          )}
          {filteredCars.map((car) => (
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
                <button
                  className="view-btn"
                  onClick={() => handleViewDetails(car)}
                >
                  View Details
                </button>
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

      {popupCar && <CarDetailsPopup car={popupCar} onClose={closePopup} />}
    </div>
  );
};

export default PrivCars;
