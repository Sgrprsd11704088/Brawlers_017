import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect if logged in
    }
  }, [isAuthenticated]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      // Handle error
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChange} />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="password2" value={password2} onChange={onChange} />
      </div>
      <input type="submit" value="Register" />
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default Register;
