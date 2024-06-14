

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DonationLogin.css'; // Ensure this file exists and contains your CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://brawlers-017.onrender.com/api/v1/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/create-donation'); // Navigate to the DonorCreate page
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      <div className="main1">
        <h1 style={{ marginLeft: "100px", fontFamily: "monospace", color: "#55AD9B", position: "absolute", top: "50px", left: "380px", fontWeight: "bolder" }}>
          Welcome to the Donor Portal
        </h1>
        <br /><br />
        <div className="main">
          <div style={{ backgroundColor: "#D8EFD1", width: "50vw", marginTop: "50px" }}>
            <div className="left-side">
              <h3>Quickly Donate to Your Favorite Organizations</h3>
              <p>You can donate without filling out the donation form. Giving has never been easier!</p>
              <br />
              <img style={{ width: "15vw", height: "20vh" }} src='https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2020/02/donation-crowfunding.jpg' alt='' />
              <br /><br />
              <h5>“The best way to find yourself is to lose yourself in the service of others.”</h5>
            </div>
          </div>
          <div className='right-side'>
            <h1>Donor Login</h1>
            <br />
            <form onSubmit={handleSubmit} className="create-donation-form1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <br /><br />
              <button className='login-btn1' type="button">Forget Password</button>
              <button className='login-btn' type="submit">Login</button>
            </form>
          </div>
        </div>
        <h4 style={{ position: "absolute", top: "800px", left: "330px", fontWeight: "bolder" }}>
          Like you, over a million people have donated to support 50 000+ nonprofit causes<br></br> around the world. Thank you for your help in making our world a better place.
        </h4>
      
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "140px" }}>
          <div className="navlink">
            <ul>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">About</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Services</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Meetups</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Trainings</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Seminars</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Marketplace</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Hire a VA</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Success Stories</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Recent Seminars</a></li>
            </ul>
          </div>
          <div className="navlink2">
            <ul>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Blog</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">FAQ</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Team</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Press</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Career</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Our Offices</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Request a Call</a></li>
              <li><a style={{color:"#55AD9B",fontSize:"xx-larger",fontWeight:"bold",fontFamily:"sans-serif"}} href="#">Our Publication</a></li>
            </ul>
          </div>
          <div style={{ marginRight: "30px", marginTop: "10px" }}>
            <h2 style={{ fontSize: "30px", marginRight: "50px" }}>Contact Us</h2>
            <img style={{ width: '5vw', marginBottom: '2vh' }}  src="http://clipart-library.com/new_gallery/377-3776210_facebook-logo-vector-logovectornet-logo-facebook-2019-png.png" alt="LinkedIn" />
            <br />
            <img style={{ width: '5vw', marginBottom: '2vh' }} src="https://www.ifawebpro.com/images/email-icon.png" alt="Email" />
          </div>
        </div>
        <div>
          <p style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh'}}>
            Bright Future Insight Pvt Ltd. Copyright 2020 - All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

