const Vehicle = require("../models/vehicleModel");

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({ order: [["id", "DESC"]] });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch vehicles" });
  }
};

const createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: "Failed to create vehicle" });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    console.log("Before update:", vehicle.toJSON());
    console.log("Update data:", req.body);

    await vehicle.update(req.body);
    await vehicle.reload();

    console.log("After update:", vehicle.toJSON());

    res.json(vehicle);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update vehicle" });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    await vehicle.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete vehicle" });
  }
};

module.exports = {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
