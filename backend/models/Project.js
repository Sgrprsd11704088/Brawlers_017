// server/models/Project.js

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  imageUrl: { type: String } // Store the Cloudinary image URL
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
