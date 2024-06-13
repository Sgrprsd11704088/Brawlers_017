import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import AuthRouter from "./routes/auth.js";

config();

const app = express();
const port = process.env.PORT || 9090;
const uri = process.env.MONGO_URI || null;
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Root Page" });
});
app.use('/api/v1',AuthRouter);

app.listen(port, async () => {
  try {
    await connectDB(uri);
    console.log(`Connection to DB Established`);
    console.log(`Server is listening on http://localhost:${port}/`);
  } catch (error) {
    console.log(error);
  }
});
