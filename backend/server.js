import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import basicRoutes from './routes/basicRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import AuthRouter from './routes/auth.js';
import path from "path";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import routes from "./routes/basicRoutes.js";


config(); // Load environment variables from .env file

import Donorrouter from "./routes/DonorRoutes.js";



const app = express();

const port = process.env.PORT || 9090;
const uri = process.env.MONGO_URI || null;

app.use(cors());
app.use(express.json());

// Mounting routes
app.use('/api/v1', basicRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1', AuthRouter);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Root Page' });
});
// Init Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the CrowdFunding API",
    endpoints: {
      users: "/api/users",
      auth: "/api/auth",
      projects: "/api/projects",
      donations: "/api/donations",
    },
  });
});

// Define Routes
app.use("/api/projects", projectRoutes);

app.use("/api/v1", routes);
app.use("/api/v1", AuthRouter);
app.use('/api/donations', Donorrouter );

// Socket.io server setup
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Message received: ', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Connect to MongoDB
connectDB(uri)
  .then(() => {
    console.log('Connection to DB Established');
    // Start server
    server.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  });

// CORS Configuration for frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true // Allow credentials
}));
