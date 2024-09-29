const express = require('express');
const CityModel = require('../models/cities.model'); // Adjust the path
const router = express.Router();

// Route to add a city
router.post('/add-city', async (req, res) => {
    const { City, State, District } = req.body;

    if (!City || !State || !District) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a new city instance
        const newCity = new CityModel({ City, State, District });
        
        // Save the city to the database
        await newCity.save();

        res.status(201).json({ message: 'City added successfully', city: newCity });
    } catch (error) {
        res.status(500).json({ error: 'Error adding city', details: error });
    }
});
router.get('/all', async (req, res) => {
    try {
      const cities = await CityModel.find({});
      res.json(cities);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching cities', details: error });
    }
  });
module.exports = router;
