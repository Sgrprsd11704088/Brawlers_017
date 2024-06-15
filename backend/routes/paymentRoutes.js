import express from "express";
import { handlePayment, verifyOtp } from "../controller/paymentController.js";

const paymentRoutes = express.Router();

paymentRoutes.post("/pay", handlePayment);
paymentRoutes.post("/verify-otp", verifyOtp);

export default paymentRoutes;
