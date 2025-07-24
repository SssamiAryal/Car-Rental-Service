require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/Booking");
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/vehicle", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("Car Rental Backend Running");
});

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(() => {});
