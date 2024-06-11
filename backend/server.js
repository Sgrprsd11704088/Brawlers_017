import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";

config();

const app = express();
const port = process.env.PORT || 9090;
const uri = process.env.MONGO_URI || null;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Root Page" });
});

app.listen(port, async () => {
  try {
    await connectDB(uri);
    console.log(`Connection to DB Established`);
    console.log(`Server is listening on http://localhost:${port}/`);
  } catch (error) {
    console.log(error);
  }
});
