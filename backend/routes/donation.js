const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Donation = require('../models/Donation');
const Project = require('../models/Project');

// @route    POST api/donations
// @desc     Donate to a project
router.post('/', [
  auth('donor'),
  [
    check('project', 'Project ID is required').not().isEmpty(),
    check('amount', 'Amount is required').isNumeric(),
    check('priority', 'Priority is required').isNumeric()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { project, amount, priority } = req.body;

  try {
    const newDonation = new Donation({
      user: req.user.id,
      project,
      amount,
      priority
    });

    const donation = await newDonation.save();

    // Update project's current amount
    const proj = await Project.findById(project);
    proj.currentAmount += amount;
    await proj.save();

    res.json(donation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/donations
// @desc     Get all donations
router.get('/', auth('all'), async (req, res) => {
  try {
    const donations = await Donation.find().sort({ priority: -1, createdAt: -1 });
    res.json(donations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
