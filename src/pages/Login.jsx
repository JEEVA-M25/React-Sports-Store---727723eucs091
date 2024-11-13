// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../AuthService";
import '../styles/Login.css';

function Login() {
    const [input, setInput] = useState({ email: '', password: '' });
    const [error, setError] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function handleLogin() {
        setError({ email: '', password: '' });
        let hasError = false;
        const newError = { email: '', password: '' };

        if (!input.email) {
            newError.email = 'Email is required';
            hasError = true;
        }

        if (!input.password) {
            newError.password = 'Password is required';
            hasError = true;
        }

        if (hasError) {
            setError(newError);
        } else {
            login(input.email, input.password)
                .then(() => navigate('/'))
                .catch(() => setError({ email: '', password: 'Invalid email or password' }));
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="login-container">
            <h1 className="login-head">Login</h1>
            <div className="login-input">
                <div className="login-ip">
                    <label>Email
                        <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter your email..."
                            value={input.email}
                            name="email"
                        />
                    </label>
                    {error.email && <p className="login-error">{error.email}</p>}
                </div>
                <div className="login-ip">
                    <label>Password
                        <input
                            type="password"
                            onChange={handleChange}
                            placeholder="Enter your password..."
                            value={input.password}
                            name="password"
                        />
                    </label>
                    {error.password && <p className="login-error">{error.password}</p>}
                </div>
            </div>
            <button className="login-btn" onClick={handleLogin}>Login</button>
            <div className="login-forgot-password">
                <Link to="/forgot">Forgot Password?</Link>
            </div>

            <div className="login-newuser">
                <br />
                <p>New User?</p>
                <Link className="login-link" to="/signup"> Create new account</Link>
            </div>
        </div>
    );
}

export default Login;
