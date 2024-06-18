import { useState } from 'react';
import './Payment.css'; // Import the scoped CSS file
import { verifyOtp, sendPaymentDetails } from '../services/paymentService.js';

const PaymentForm = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');

  const handleCardNumberChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(value);
  };

  const handleCvvChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpiryDateChange = (e) => {
    let { value } = e.target;
    value = value.replace(/[^\d/]/g, '');
    if (value.length === 2 && !value.includes('/')) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5);
    }
    setExpiryDate(value);
  };

  const handlePayment = async () => {
    const cleanedCardNumber = cardNumber.replace(/\s/g, '');
    if (cleanedCardNumber.length < 16 || cvv.length < 3 || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setMessage('Please enter valid card details.');
      return;
    }
    try {
      const response = await sendPaymentDetails(email, cleanedCardNumber, expiryDate, cvv, amount);
      setOtpSent(true);
      setMessage(response.data);
    } catch (error) {
      // Display detailed error message
      console.error('Payment error:', error);
      setMessage(`Error sending OTP: ${error.response?.data || error.message}`);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await verifyOtp(email, otp);
      setMessage(response.data);
    } catch (error) {
      console.error('OTP verification error:', error);
      setMessage(`Invalid OTP: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="payment-form-container">
      <h1>Payment Gateway</h1>
      {!otpSent ? (
        <div className="payment-details">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            className="form-input"
          />
          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={handleCvvChange}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
          <button onClick={handlePayment} className="form-button">Pay</button>
        </div>
      ) : (
        <div className="otp-verification">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="form-input"
          />
          <button onClick={handleVerifyOtp} className="form-button">Verify OTP</button>
        </div>
      )}
      <p className="message">{message}</p>
    </div>
  );
};

export default PaymentForm;
