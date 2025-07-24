const Vehicle = require("../models/vehicleModel");

const addVehicle = async (req, res) => {
  const {
    name,
    brand,
    price,
    seats,
    fuel,
    transmission,
    rating,
    image_url,
    description,
  } = req.body;
  const vehicle = await Vehicle.create({
    name,
    brand,
    price,
    seats,
    fuel,
    transmission,
    rating,
    image_url,
    description,
  });
  res.status(201).json(vehicle);
};

const getAllVehicles = async (req, res) => {
  const vehicles = await Vehicle.findAll({ order: [["id", "DESC"]] });
  res.json(vehicles);
};

module.exports = { addVehicle, getAllVehicles };
