import crypto from 'crypto';
import { sendOtpEmail } from '../utils/mailer.js';

const otps = {}; // Store OTPs temporarily

const handlePayment = async (req, res) => {
  const { email, paymentMethod, amount } = req.body;

  // Generate OTP
  const otp = crypto.randomInt(100000, 999999).toString();

  try {
    await sendOtpEmail(email, otp);
    otps[email] = otp;
    res.status(200).send('OTP sent to email');
  } catch (error) {
    res.status(500).send('Error sending OTP email');
  }
};

const verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  if (otps[email] === otp) {
    delete otps[email]; // Remove OTP after verification
    res.status(200).send('Payment verified and completed');
  } else {
    res.status(400).send('Invalid OTP');
  }
};

export { handlePayment, verifyOtp };
