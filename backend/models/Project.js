import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  image: { type: String, required: true }, // Store the image path or URL
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
