const express = require("express");
const router = express.Router();
const {
  addVehicle,
  getAllVehicles,
} = require("../controllers/vehicleController");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), addVehicle);
router.get("/", getAllVehicles);

module.exports = router;
