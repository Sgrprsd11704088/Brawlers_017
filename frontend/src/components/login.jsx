import { useState } from 'react';

const Auth = () => {
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
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Signup' : 'Login'}
      </button>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
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
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Auth;

