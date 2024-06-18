import axios from 'axios';

const API_URL = 'https://brawlers-017.onrender.com/api';

/**
 * Send payment details to the server for processing and OTP generation.
 * 
 * @param {string} email - User's email address.
 * @param {string} cardNumber - Credit/Debit card number.
 * @param {string} expiryDate - Card expiry date in MM/YY format.
 * @param {string} cvv - Card security code (CVV).
 * @param {number} amount - Payment amount.
 * @returns {Promise} - Promise representing the API response.
 */
export const sendPaymentDetails = (email, cardNumber, expiryDate, cvv, amount) => {
  return axios.post(`${API_URL}/pay`, {
    email,
    cardNumber,
    expiryDate,
    cvv,
    amount
  });
};

/**
 * Verify the OTP sent to the user's email address.
 * 
 * @param {string} email - User's email address.
 * @param {string} otp - OTP received by the user.
 * @returns {Promise} - Promise representing the API response.
 */
export const verifyOtp = (email, otp) => {
  return axios.post(`${API_URL}/verify-otp`, { email, otp });
};
