import express from "express";
import Donation from "../models/DonorModel.js";

const Donorrouter = express.Router();

Donorrouter.post("/create", async (req, res) => {
  const { amount, donor, name, message } = req.body;

  // Validate the request body
  if (!amount || !donor || !name) {
    return res
      .status(400)
      .json({
        message: "Please include all required fields: amount, donor, and name",
      });
  }

  try {
    const newDonation = new Donation({ amount, donor, name });
    const savedDonation = await newDonation.save();
    res.status(201).json(savedDonation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

Donorrouter.get("/", async (req, res) => {
  try {
    const donations = await Donation.find()
      .sort({ date: -1 })
      .populate("donor", ["name", "email"]);
    res.json(donations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default Donorrouter;
