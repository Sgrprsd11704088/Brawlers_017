import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import donationRoutes from './routes/donations.js';
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import routes from "./routes/basicRoutes.js";
import AuthRouter from "./routes/auth.js";

// Load environment variables from .env file
dotenv.config();
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


app.use("/api/v1", routes);
app.use("/api/v1", AuthRouter);

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (data) => {
    console.log("Message received: ", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(port, async () => {
  try {
    await connectDB(uri);
    console.log(`Connection to DB Established`);
    console.log(`Server is listening on http://localhost:${port}/`);
  } catch (error) {
    console.log(error);
  }
});
