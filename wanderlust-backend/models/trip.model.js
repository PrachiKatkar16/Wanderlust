const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // userId is required
    ref: 'User', // Reference to the User model
  },
  city: {
    type: String,
    required: true, // city is required
  },
  dateRange: {
    startDate: {
      type: Date,
      required: true, // startDate is required
    },
    endDate: {
      type: Date,
      required: true, // endDate is required
    },
  },
  tripType: {
    type: String,
    enum: ['solotrip', 'partnertrip', 'friendstrip', 'familytrip'],
    required: true, // tripType is required
  },
  interest: {
    type: [String], // Array of strings for interests
    required: true, // interests are required
  },
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
