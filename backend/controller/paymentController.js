import crypto from 'crypto';
import { sendOtpEmail } from '../utils/mailer.js';
import { Payment } from '../models/payment.js';
import { v4 as uuidv4 } from 'uuid';

const otps = {}; // Store OTPs temporarily

const handlePayment = async (req, res) => {
  const { username, email, paymentMethod, amount } = req.body;

  // Generate OTP
  const otp = crypto.randomInt(100000, 999999).toString();
  const transactionId = uuidv4();

  // Create payment document with status 'Pending'
  const payment = new Payment({
    username,
    email,
    amount,
    transactionId,
    payStatus: 'Pending'
  });

  try {
    await payment.save(); // Save payment details in the database
    await sendOtpEmail(email, otp); // Simulate sending OTP email
    otps[email] = otp; // Store OTP temporarily
    res.status(200).json({ message: 'OTP sent to your email', transactionId });
  } catch (error) {
    res.status(500).send('Error processing transaction or sending OTP email');
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp, transactionId } = req.body;

  if (otps[email] === otp) {
    try {
      const payment = await Payment.findOne({ email, transactionId });

      if (!payment) {
        return res.status(404).send('Transaction not found');
      }

      payment.payStatus = 'Completed';
      await payment.save(); // Update payment status in the database

      delete otps[email]; // Remove OTP after verification
      res.status(200).send('Payment verified and completed');
    } catch (error) {
      res.status(500).send('Error verifying payment');
    }
  } else {
    res.status(400).send('Invalid OTP');
  }
};

export { handlePayment, verifyOtp };