import crypto from "crypto";
import { sendOtpEmail } from "../utils/mailer.js";

const otps = {}; // Store OTPs temporarily

const handlePayment = async () => {
  const cleanedCardNumber = cardNumber.replace(/\s/g, ''); // Clean the card number
  if (cleanedCardNumber.length < 16 || cvv.length < 3 || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
    setMessage('Please enter valid card details.');
    return;
  }
  try {
    // Call the updated sendPaymentDetails function with all required parameters
    const response = await sendPaymentDetails(email, cleanedCardNumber, expiryDate, cvv, amount);
    setOtpSent(true);
    setMessage(response.data);
  } catch (error) {
    console.error('Payment error:', error);
    setMessage(`Error sending OTP: ${error.response?.data || error.message}`);
  }
};


// Add the verifyOtp function if it isn't already defined in the previous snippet
const verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  // Debug log the incoming OTP verification request
  console.log('Verifying OTP for email:', email);

  if (otps[email] === otp) {
    // Log successful verification
    console.log('OTP verified successfully for:', email);

    // Remove OTP after verification
    delete otps[email];

    // Respond with success
    res.status(200).send("Payment verified and completed");
  } else {
    // Log the invalid OTP attempt
    console.log('Invalid OTP for:', email);

    // Respond with a bad request status and message
    res.status(400).send("Invalid OTP");
  }
};

export { handlePayment, verifyOtp };
