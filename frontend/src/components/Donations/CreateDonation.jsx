// import React, { useState } from 'react';
// import axios from 'axios';
// import { 
//   Modal, 
//   ModalOverlay, 
//   ModalContent, 
//   ModalHeader, 
//   ModalFooter, 
//   ModalBody, 
//   ModalCloseButton, 
//   Button, 
//   useDisclosure, 
//   Text 
// } from '@chakra-ui/react';
// import './createdonation.css'; 

// const CreateDonation = ({ onDonationCreated }) => {
//   const [amount, setAmount] = useState('');
//   const [donor, setDonor] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('https://brawlers-017.onrender.com/api/donations/create', { amount, donor, name, message });
//       alert('Thank you for your donation!');
//       setResponseMessage('Donation created successfully');
//       onDonationCreated(res.data); // Notify parent component of the new donation

     
//       setAmount('');
//       setDonor('');
//       setName('');
//       setMessage('');

//       onOpen(); 
//     } catch (err) {
//       setResponseMessage('Error creating donation: ' + (err.response?.data?.message || err.message));
//       onOpen(); 
//     }
//   };

//   return (
//     <>
//     <div style={{backgroundColor:"#f0f4f7"}}>
//       <img style={{width:'100%', height:'40vh'}} src='https://myinvestmentbrokers.com/wp-content/uploads/2019/06/diverse-college-students-e1559577056790.jpg' alt='' />
//       <h4 style={{textAlign:'center'}}>Your Donation Will Provide....</h4>
//       <div className="create-donation-container">
//         <form onSubmit={handleSubmit} className="create-donation-form">
//           <h1>Create Donation</h1>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Amount"
//             required
//           />
//           <input
//             type="text"
//             value={donor}
//             onChange={(e) => setDonor(e.target.value)}
//             placeholder="Donor"
//             required
//           />
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//             required
//           />
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Message"
//             required
//           ></textarea>
//           <button type="submit">Donate</button>
//           {responseMessage && <p className="response-message">{responseMessage}</p>}
//         </form>
//       </div>
//     </div>

//     {/* Chakra UI Modal */}
//     <Modal isCentered isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Donation Status</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Text>{responseMessage}</Text>
//         </ModalBody>
//         <ModalFooter>
//           <Button colorScheme="blue" mr={3} onClick={onClose}>
//             Close
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//     </>
//   );
// };

// export default CreateDonation;


import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody, 
  Button, 
  useDisclosure, 
  Text 
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './createdonation.css'; // Import CSS file

const CreateDonation = ({ onDonationCreated }) => {
  const [amount, setAmount] = useState('');
  const [donor, setDonor] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://brawlers-017.onrender.com/api/donations/create', { amount, donor, name, message });
      alert('Thank you for your donation!');
      setResponseMessage(`Thank you for your donation of $${amount}!`);
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

  const handleClose = () => {
    onClose();
    navigate('/donor/projects'); // Redirect to studentlist page after closing the modal
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
              placeholder="Project Name"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            ></textarea>
            <Link to='/Payment'>
            <button type="submit">Donate</button>
            </Link>
            
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </form>
        </div>
      </div>

      {/* Chakra UI Modal */}
      <Modal isCentered isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent className='ModalContent' w="35vw" h="40vh" bg="#95d2b3">
          <ModalHeader>Thank You</ModalHeader>
          <ModalBody>
            <Text>
              Thanks to the amazing support of our donors, we successfully reached our goal for the student crowdfunding campaign! Your contributions will directly help students. We are so grateful for your belief in the power of education and your commitment to helping students succeed.
            </Text>
            <img src='' alt=''></img>
            <Text mt={4}>
              {responseMessage}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateDonation;
