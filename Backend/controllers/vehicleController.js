const vehicleModel = require("../models/vehicleModel");

const getVehicles = async (req, res) => {
  const vehicles = await vehicleModel.getAllVehicles();
  res.json(vehicles);
};

const createVehicle = async (req, res) => {
  const newVehicle = await vehicleModel.addVehicle(req.body);
  res.status(201).json(newVehicle);
};

const updateVehicle = async (req, res) => {
  const updatedVehicle = await vehicleModel.updateVehicle(
    req.params.id,
    req.body
  );
  res.json(updatedVehicle);
};

const deleteVehicle = async (req, res) => {
  await vehicleModel.deleteVehicle(req.params.id);
  res.status(204).send();
};

module.exports = {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
