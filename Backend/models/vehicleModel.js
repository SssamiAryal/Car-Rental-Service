const pool = require("../config/db");

const getAllVehicles = async () => {
  const result = await pool.query("SELECT * FROM vehicles ORDER BY id DESC");
  return result.rows;
};

const addVehicle = async (vehicle) => {
  const {
    name,
    brand,
    year,
    fuel_type,
    transmission,
    price_per_day,
    image_url,
  } = vehicle;
  const result = await pool.query(
    "INSERT INTO vehicles (name, brand, year, fuel_type, transmission, price_per_day, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, brand, year, fuel_type, transmission, price_per_day, image_url]
  );
  return result.rows[0];
};

const updateVehicle = async (id, vehicle) => {
  const {
    name,
    brand,
    year,
    fuel_type,
    transmission,
    price_per_day,
    image_url,
  } = vehicle;
  const result = await pool.query(
    "UPDATE vehicles SET name=$1, brand=$2, year=$3, fuel_type=$4, transmission=$5, price_per_day=$6, image_url=$7 WHERE id=$8 RETURNING *",
    [name, brand, year, fuel_type, transmission, price_per_day, image_url, id]
  );
  return result.rows[0];
};

const deleteVehicle = async (id) => {
  await pool.query("DELETE FROM vehicles WHERE id = $1", [id]);
};

module.exports = {
  getAllVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
