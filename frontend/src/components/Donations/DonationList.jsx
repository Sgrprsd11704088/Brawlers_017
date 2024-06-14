// import './DonationList.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DonationList = ({ newDonation }) => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     fetchDonations();
//   }, []);

//   useEffect(() => {
//     if (newDonation) {
//       setDonations((prevDonations) => [newDonation, ...prevDonations]);
//     }
//   }, [newDonation]);

//   const fetchDonations = async () => {
//     try {
//       const res = await axios.get('https://brawlers-017.onrender.com/api/donations/');
//       setDonations(res.data);
//     } catch (err) {
//       console.error('Error fetching donations:', err);
//     }
//   };

//   return (
//     <div>
//       <h1>Donations</h1>
//       <ul>
//         {donations.map((donation) => (
//           <li key={donation._id}>
//             <p>Amount: {donation.amount}</p>
//             <p>Donor: {donation.donor}</p>
//             <p>Name: {donation.name}</p>
//             <p>Message: {donation.message}</p>
//             <p>Date: {new Date(donation.date).toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DonationList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonationList.css'; // Import your CSS file for styling (create this file)

const DonationList = ({ newDonation }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  useEffect(() => {
    if (newDonation) {
      setDonations((prevDonations) => [newDonation, ...prevDonations]);
    }
  }, [newDonation]);

  const fetchDonations = async () => {
    try {
      const res = await axios.get('https://brawlers-017.onrender.com/api/donations');
      setDonations(res.data);
    } catch (err) {
      console.error('Error fetching donations:', err);
    }
  };

  return (
    <div className="donation-list-container">
      <h1>Donations</h1>
      <ul className="donation-list">
        {donations.map((donation) => (
          <li key={donation._id} className="donation-card">
            <div className="donation-info">
              <p>Amount: {donation.amount}</p>
              <p>Donor: {donation.donor}</p>
              <p>Name: {donation.name}</p>
              <p>Message: {donation.message}</p>
              <p>Date: {new Date(donation.date).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;

