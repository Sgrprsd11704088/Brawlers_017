import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Donate = ({ projectId }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [donation, setDonation] = useState({
    amount: '',
    priority: ''
  });

  const { amount, priority } = donation;

  const onChange = e => setDonation({ ...donation, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    };
    try {
      const res = await axios.post('/api/donations', { project: projectId, ...donation }, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Donate</h2>
      <div>
        <label>Amount</label>
        <input type="number" name="amount" value={amount} onChange={onChange} />
      </div>
      <div>
        <label>Priority</label>
        <input type="number" name="priority" value={priority} onChange={onChange} />
      </div>
      <input type="submit" value="Donate" />
    </form>
  );
};

export default Donate;
