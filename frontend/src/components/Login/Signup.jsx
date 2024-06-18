import { useState } from 'react';
import Footer from '../Footer'
import "./login.css";
const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); 
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = isLogin ? 'login' : 'register';
    const userDetails = isLogin
      ? { email, password }
      : { userName, email, password };

    try {
      const response = await fetch(`http://localhost:8080/api/v1/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails),
      });
      console.log(userDetails);
      const data = await response.json();

      if (response.ok) {
      
        console.log(`${isLogin ? 'Login' : 'Signup'} successful:`, data);
      } else {
        // Handle errors returned from backend
        setError(data.message || `${isLogin ? 'Login' : 'Signup'} failed`);
      }
    } catch (err) {
      setError('Network error');
      console.error('Error:', err);
    }
  };

  return (
    <div>
    

      
      <div className="main1">
        <h1
          style={{
            marginLeft: "100px",
            fontFamily: "monospace",
            color: "#55AD9B",
            position: "absolute",
            top: "120px",
            left: "380px",
            fontWeight: "bolder",
          }}
        >
          Welcome to the Login Portal
        </h1>
        <br />
        <br />
        <div className="main">
          <div
            style={{
              backgroundColor: "#D8EFD1",
              width: "50vw",
              marginTop: "50px",
            }}
          >
            <div className="left-side">
              <h3>Quickly Donate to Your Favorite Organizations</h3>
              <p>
                You can donate without filling out the donation form. Giving has
                never been easier!
              </p>
              <br />
              <img
                style={{ width: "15vw", height: "20vh" }}
                src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2020/02/donation-crowfunding.jpg"
                alt=""
              />
              <br />
              <br />
              <h5>
                “The best way to find yourself is to lose yourself in the
                service of others.”
              </h5>
            </div>
          </div>
          <div className="right-side">
            <h1>Sign Up</h1>
            <br />
            <form onSubmit={handleSubmit} className="create-donation-form1">
        
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
       
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Create Account</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
          </div>
        </div>
        <h4
          style={{
            position: "absolute",
            top: "800px",
            left: "330px",
            fontWeight: "bolder",
          }}
        >
          Like you, over a million people have donated to support 50 000+
          nonprofit causes<br></br> around the world. Thank you for your help in
          making our world a better place.
        </h4>
        <div style={{ marginTop: "130px" }}>
          <Footer />
        </div>
      </div>
    </div>

  );
};

export default Signup;
