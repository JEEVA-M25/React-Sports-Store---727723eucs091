//ForgorPassword.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../AuthService"; // new function in AuthService
import '../styles/Login.css'; // Import the existing CSS

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try {
            await resetPassword(email);
            setMessage('Password reset successful. You can login now.');
            setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="login-container"> {/* Use the same class for consistency */}
            <h1 className="login-head">Reset Password</h1> {/* Use the same class for the heading */}
            <div className="login-input"> {/* Use the same class for input fields */}
                <div className="login-ip"> {/* Same styling for input fields */}
                    <label>Email
                        <input
                            type="text"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <button className="login-btn" onClick={handleResetPassword}>Reset Password</button> {/* Use the same button class */}
            {message && <p className="login-error">{message}</p>} {/* Use error class for messages */}
            <div className="login-newuser"> {/* Add this for consistent spacing */}
                <Link className="login-link" to="/login">Back to Login</Link>
            </div>
        </div>
    );
}

export default ForgotPassword;
