import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";

const app = express();

config();

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

app.listen(port, async () => {
  try {
    await connectDB(uri);
    console.log(`Connected to DB Successfully`);
    console.log(`Server is running at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
