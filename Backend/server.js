require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/Booking");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Car Rental Backend Running");
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.log("DB connection error:", err));
