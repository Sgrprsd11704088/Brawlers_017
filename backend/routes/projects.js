import express from 'express';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth';
import Project from '../models/Project';
import upload from '../middleware/upload';

const router = express.Router();

// @route    POST api/projects
// @desc     Create a project
router.post('/', [
  auth('student'),
  upload,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('goalAmount', 'Goal amount is required').isNumeric(),
    check('image', 'Image is required').not().isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, category, goalAmount } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newProject = new Project({
      user: req.user.id,
      title,
      description,
      category,
      goalAmount,
      image
    });

    const project = await newProject.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/projects
// @desc     Get all projects
router.get('/', auth('all'), async (req, res) => {
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
router.get('/:id', auth('all'), async (req, res) => {
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
