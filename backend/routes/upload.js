const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinaryConfig');
const fileUpload = require('express-fileupload');

router.use(fileUpload());

// Handle POST request to upload image
router.post('/upload', async (req, res) => {
  try {
    // Check if image file is present
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    // Upload image to Cloudinary
    const uploadedFile = req.files.image;
    const result = await cloudinary.uploader.upload(uploadedFile.tempFilePath);

    // Response with Cloudinary image details
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload failed' });
  }
});

module.exports = router;