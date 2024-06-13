import express from 'express';
import { check, validationResult } from 'express-validator';
import Project from '../models/Project.js';
import cloudinary from '../config/cloudinaryConfig.js';
import upload from '../config/multerConfig.js'; // Import multer configuration

const router = express.Router();

// @route    POST api/projects
// @desc     Create a project with image upload
router.post('/', upload, async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, category, goalAmount } = req.body;

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new project with Cloudinary image URL
    const newProject = new Project({
      title,
      description,
      category,
      goalAmount,
      imageUrl: result.secure_url // Store secure URL from Cloudinary
    });

    // Save project to database
    await newProject.save();

    // Delete temp file after upload (if needed)
    // fs.unlinkSync(req.file.path);

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create project' });
  }
});

// @route    GET api/projects
// @desc     Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/projects/:id
// @desc     Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    res.json(project);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.status(500).send('Server error');
  }
});

export default router;
