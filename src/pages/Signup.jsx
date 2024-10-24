import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      alert('Signup successful');
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <center>
      <h2>Signup</h2>
      </center>
      <form onSubmit={handleSignup}>
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
        <div className="input-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            placeholder="Confirm your password"
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
