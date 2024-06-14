import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../models/userModel.js";
import authenticateToken from "../middleware/authMiddleware.js";
import authorizeRole from "../middleware/authRole.js";

dotenv.config();
const AuthRouter = express.Router();

let refreshTokens = [];

AuthRouter.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      userName,
      email,
      password: hashedPassword,
      role: "student",
    });
    await user.save();
    res.status(201).json("User registered");
  } catch (err) {
    console.log(err);
  }
});

AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).json("Cannot find user");

  if (await bcrypt.compare(password, user.password)) {
    const payload = { email: user.email, role: user.role };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.REFRESH_TOKEN_LIFE,
    });
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
  } else {
    res.json("Password incorrect");
  }
});

AuthRouter.post("/token", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_LIFE }
    );
    res.json({ accessToken });
  });
});

AuthRouter.post("/logout", (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.sendStatus(204);
});

AuthRouter.get(
  "/admin",
  authenticateToken,
  authorizeRole(["admin"]),
  (req, res) => {
    res.json("Admin content");
  }
);

export default AuthRouter;
