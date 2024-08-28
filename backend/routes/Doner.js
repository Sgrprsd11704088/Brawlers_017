


import express from 'express';
import Donation from '../models/Doner.js'; // Ensure correct import

const donerrouter = express.Router();

// Define your routes here
donerrouter.post('/', async (req, res) => {
  const { amount, donor, name } = req.body;

  // Validate the request body
  if (!amount || !donor || !name) {
    return res.status(400).json({ message: 'Please include all required fields: amount, donor, and name' });
  }

  try {
    const newDonation = new Donation({ amount, donor, name });
    const savedDonation = await newDonation.save();
    res.status(201).json(savedDonation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default donerrouter;
