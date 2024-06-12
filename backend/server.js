import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import connectDB from './config/db.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import donationRoutes from './routes/donations.js';

// Load environment variables from .env file
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

// Root Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the CrowdFunding API",
    endpoints: {
      users: "/api/users",
      auth: "/api/auth",
      projects: "/api/projects",
      donations: "/api/donations"
    }
  });
});

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/donations', donationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
