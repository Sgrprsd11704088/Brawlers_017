import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import routes from "./routes/basicRoutes.js";

config();

const app = express();
const port = process.env.PORT || 9090;
const uri = process.env.MONGO_URI || null;

app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);

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
