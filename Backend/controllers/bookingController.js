const Booking = require("../models/bookingModel");

exports.bookCar = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      pickup_location,
      dropoff_location,
      pickup_date,
      return_date,
      car_id,
    } = req.body;

    const newBooking = await Booking.create({
      name,
      email,
      phone,
      pickup_location,
      dropoff_location,
      pickup_date,
      return_date,
      car_id,
    });

    res.status(201).json({ success: true, data: newBooking });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
