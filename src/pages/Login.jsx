import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { blue } from '@mui/material/colors';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      alert('Login successful');
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <center>
        <h2>Login</h2>
        </center>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input 
            type="text" 
            placeholder="Enter your username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p style={{color:'black'}}>Don't have an account? <Link to="/signup" style={{color:'black'}}>Signup here</Link></p>
    </div>
  );
};

export default Login;
