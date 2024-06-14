
// import React, { useState } from 'react';
// import axios from 'axios';
// import './createdonation.css'; // Import CSS file

// const CreateDonation = ({ onDonationCreated }) => {
//   const [amount, setAmount] = useState('');
//   const [donor, setDonor] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('https://brawlers-017.onrender.com/api/donations/create', { amount, donor, name, message });
//       alert('Thank you for your donation!');
//       setResponseMessage('Donation created successfully');
//       onDonationCreated(res.data); // Notify parent component of the new donation

//       // Clear form fields
//       setAmount('');
//       setDonor('');
//       setName('');
//       setMessage('');
//     } catch (err) {
//       setResponseMessage('Error creating donation: ' + err.response.data.message);
//     }
//   };

//   return (
//     <>
//     <div style={{backgroundColor:"#f0f4f7"}}>
//     <img style={{width:'1470px',height:'40vh',}} src='https://myinvestmentbrokers.com/wp-content/uploads/2019/06/diverse-college-students-e1559577056790.jpg' alt=''></img>
//      <h4 style={{textAlign:'center'}}>Your Donation Will Provide....</h4>
//     <div className="create-donation-container">
//       <form onSubmit={handleSubmit} className="create-donation-form">
//         <h1>Create Donation</h1>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount"
//           required
//         />
//         <input
//           type="text"
//           value={donor}
//           onChange={(e) => setDonor(e.target.value)}
//           placeholder="Donor"
//           required
//         />
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           required
//         />
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Message"
//           required
//         ></textarea>
//         <button type="submit">Donate</button>
//         {responseMessage && <p className="response-message">{responseMessage}</p>}
//       </form>
//     </div>
//     </div>
//     </>
//   );
// };

// export default CreateDonation;


import React, { useState } from 'react';
import axios from 'axios';
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody, 
  ModalCloseButton, 
  Button, 
  useDisclosure, 
  Text 
} from '@chakra-ui/react';
import './createdonation.css'; // Import CSS file

const CreateDonation = ({ onDonationCreated }) => {
  const [amount, setAmount] = useState('');
  const [donor, setDonor] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://brawlers-017.onrender.com/api/donations/create', { amount, donor, name, message });
      alert('Thank you for your donation!');
      setResponseMessage('Donation created successfully');
      onDonationCreated(res.data); // Notify parent component of the new donation

      // Clear form fields
      setAmount('');
      setDonor('');
      setName('');
      setMessage('');

      onOpen(); // Open the modal
    } catch (err) {
      setResponseMessage('Error creating donation: ' + (err.response?.data?.message || err.message));
      onOpen(); // Open the modal to show the error message
    }
  };

  return (
    <>
    <div style={{backgroundColor:"#f0f4f7"}}>
      <img style={{width:'100%', height:'40vh'}} src='https://myinvestmentbrokers.com/wp-content/uploads/2019/06/diverse-college-students-e1559577056790.jpg' alt='' />
      <h4 style={{textAlign:'center'}}>Your Donation Will Provide....</h4>
      <div className="create-donation-container">
        <form onSubmit={handleSubmit} className="create-donation-form">
          <h1>Create Donation</h1>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
          <input
            type="text"
            value={donor}
            onChange={(e) => setDonor(e.target.value)}
            placeholder="Donor"
            required
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Donate</button>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </form>
      </div>
    </div>

    {/* Chakra UI Modal */}
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Donation Status</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{responseMessage}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default CreateDonation;
