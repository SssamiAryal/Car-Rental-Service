// models/vehicleModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Vehicle = sequelize.define("Vehicle", {
  name: { type: DataTypes.STRING, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER },
  fuel_type: { type: DataTypes.STRING },
  transmission: { type: DataTypes.STRING },
  price_per_day: { type: DataTypes.FLOAT },
  image_url: { type: DataTypes.STRING },
});

module.exports = Vehicle;
