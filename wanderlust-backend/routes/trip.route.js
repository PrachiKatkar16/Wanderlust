const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware'); // Adjust the path as needed
const Trip = require('../models/trip.model');

// Route for adding a trip
router.post('/add', authMiddleware, async (req, res) => {
  const { city, dateRange, tripType, interest } = req.body;

  try {
    const trip = new Trip({
      userId: req.user.userId, // Get userId from the token
      city, // Add city from the request body
      dateRange,
      tripType,
      interest
    });

    await trip.save();
    res.status(201).json({ message: 'Trip created successfully', trip });
  } catch (error) {
    res.status(400).json({ message: 'Trip validation failed', error: error.message });
  }
});

// Route for viewing trips
router.get('/', authMiddleware, async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.userId });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trips', error });
  }
});

module.exports = router;
