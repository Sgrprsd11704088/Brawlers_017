import { useState } from 'react';
import { sendPaymentDetails, verifyOtp } from '../services/paymentService.js';

const PaymentForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handlePayment = async () => {
    try {
      const response = await sendPaymentDetails({ username, email, paymentMethod, amount });
      setOtpSent(true);
      setTransactionId(response.data.transactionId);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await verifyOtp({ email, otp, transactionId });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Invalid OTP');
    }
  };

  return (
    <div>
      <h1>Payment Gateway</h1>
      {!otpSent ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Payment Method (QR/Card)"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handlePayment}>Pay</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
};

export default PaymentForm;
