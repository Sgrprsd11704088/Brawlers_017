import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const sendPaymentDetails = (email, paymentMethod, amount) => {
  return axios.post(`${API_URL}/pay`, { email, paymentMethod, amount });
};

export const verifyOtp = (email, otp) => {
  return axios.post(`${API_URL}/verify-otp`, { email, otp });
};
