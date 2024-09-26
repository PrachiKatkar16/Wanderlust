const express = require('express');
const router = express.Router();
const Image = require('../models/image.model') // Import the Image model

// POST: Add a new image
router.post('/add', async (req, res) => {
  const { imgUrl, title, subtitle, category } = req.body;

  try {
    // Create a new image entry
    const newImage = new Image({
      imgUrl,
      title,
      subtitle,
      category
    });

    // Save the image to the database
    await newImage.save();
    res.status(201).json({ message: 'Image added successfully!', image: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add image', error: error.message });
  }
});

// GET: Fetch all images
router.get('/', async (req, res) => {
  try {
    // Retrieve all images from the database
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve images', error: error.message });
  }
});

module.exports = router;
