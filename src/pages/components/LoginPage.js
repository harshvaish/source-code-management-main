import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaBitbucket, FaLinkedin, FaGoogle, FaGitlab, FaMicrosoft } from 'react-icons/fa'; // Importing icons
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Clear previous error message
        setError('');

        // Check if fields are empty
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        // Check if credentials match
        if (
            (email === 'abc@gmail.com') &&
            password === 'abc@123'
        ) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');

        } else {
            setError('Invalid credentials');
        }
    };


    return (
        <div
            className="login-page-container"
        >
            {/* Left Side - Login Form */}
            <div
                className="login-card-container"
                style={{
                    width: "40%",
                    display: "flex",
                    maxHeight: "100vh", // Set the max height to 90% of the viewport height
                    overflowY: "auto", // Enable vertical scrolling when content exceeds the maxHeight

                    flexDirection: "column", // Stack content vertically
                    alignItems: "flex-start", // Align all content to the left
                    padding: "50px", // Add padding for spacing
                }}
            >
                <div className="login-card" style={{ width: "100%" }}>
                    {/* Harness Logo */}
                    <div
                        className="logo-container"
                        style={{
                            marginBottom: "35px",
                            display: "flex",
                            alignItems: "flex-start", // Aligns to the left
                        }}
                    >
                        <img
                            src="https://www.mckinsey.com/~/media/Images/Global/SEOImagePlaceholder.ashx"
                            alt="McKinsey"
                            className="logo"
                            style={{
                                width: "40px", // Adjust the icon size
                                marginBottom: "10px", // Add space between icon and text
                            }}
                        />
                        <span></span>
                        <h2 style={{ fontWeight: "bold" }}>McKinsey</h2>
                    </div>


                    {/* Title */}
                    <h2 className="mt-3">
                        Sign In
                    </h2>
                    <p style={{
                        color: "#555770",
                        marginBottom: "35px",
                    }}>and get ship done.</p>
                    {/* Login Form */}
                    <form style={{ width: "100%" }}>
                        {/* Email Input */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}

                                style={{
                                    width: "100%",
                                    border: "1px solid #ccc", // Default border color
                                    borderRadius: "5px", // Rounded corners for the input
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = "black"; // Focus event: change border to black
                                    e.target.style.boxShadow = "none"; // Remove default box-shadow
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#ccc"; // Blur event: revert border color
                                    e.target.style.boxShadow = "none"; // Ensure box-shadow is removed
                                }}
                            />
                        </div>

                        {/* Forgot Password link outside the input field */}
                        <div className="d-flex justify-content-end mt-1">
                            <a
                                href="/" 
                                                              className="text-link"
                                style={{
                                    fontSize: "12px",
                                    textDecoration: "none",
                                    color: "#0278d5",
                                }}
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Password Input */}
                        <div className="form-group mt-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                style={{ width: "100%" }}
                                onChange={(e) => setPassword(e.target.value)}

                                onFocus={(e) => {
                                    e.target.style.borderColor = "black"; // Focus event: change border to black
                                    e.target.style.boxShadow = "none"; // Remove default box-shadow
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#ccc"; // Blur event: revert border color
                                    e.target.style.boxShadow = "none"; // Ensure box-shadow is removed
                                }}
                            />
                        </div>
                        {/* Show Error Message */}
                        {error && (
                            <div className="text-danger" style={{ marginBottom: "10px" }}>
                                {error}
                            </div>
                        )}


                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="btn btn-primary mt-4"
                            style={{
                                backgroundColor: "#0278d5",
                                border: "none",
                                borderRadius: "5px",
                                fontWeight: "400",
                                fontSize: "16px",
                                padding: "10px 0",
                                width: "100%", // Make the button span the full width
                            }}
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                        {/* OR or Login with section */}
                        <div className="d-flex align-items-center my-3">
                            <hr style={{ flex: 1, border: "1px solid #000" }} />
                            <span style={{ margin: "0 10px", fontWeight: "400", color: "#555770" }}>
                                or login with
                            </span>
                            <hr style={{ flex: 1, border: "1px solid black" }} />
                        </div>

                        {/* Alternate Login Options */}
                        <div className="row">
                            {/* GitHub Card */}
                            <div
                                className="col-4 col-md-2 mb-3"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = 'https://github.com/login'} // Redirect to GitHub login
                            >
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50px', // Fixed card height
                                    }}
                                >
                                    <FaGithub size={30} color="#333" />
                                </div>
                            </div>

                            {/* Bitbucket Card */}
                            <div
                                className="col-4 col-md-2 mb-3"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = 'https://bitbucket.org/account/signin/'} // Redirect to Bitbucket login
                            >
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50px', // Fixed card height
                                    }}
                                >
                                    <FaBitbucket size={30} color="#0052cc" />
                                </div>
                            </div>

                            {/* GitLab Card */}
                            <div
                                className="col-4 col-md-2 mb-3"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = 'https://gitlab.com/users/sign_in'} // Redirect to GitLab login
                            >
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50px', // Fixed card height
                                    }}
                                >
                                    <FaGitlab size={30} color="#fc6d26" />
                                </div>
                            </div>

                            {/* LinkedIn Card */}
                            <div
                                className="col-4 col-md-2 mb-3"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = 'https://www.linkedin.com/uas/login'} // Redirect to LinkedIn login
                            >
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50px', // Fixed card height
                                    }}
                                >
                                    <FaLinkedin size={30} color="#0077b5" />
                                </div>
                            </div>

                            {/* Google Card */}
                            <div
                                className="col-4 col-md-2 mb-3"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = 'https://accounts.google.com/ServiceLogin'} // Redirect to Google login
                            >
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50px', // Fixed card height
                                    }}
                                >
                                    <FaGoogle size={30} color="#db4437" />
                                </div>
                            </div>
                            {/* Microsoft Card */}
                            <div
                                className="col-4 col-md-2 mb-3"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = 'https://login.live.com/'} // Redirect to Microsoft login
                            >
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50px', // Fixed card height
                                    }}
                                >
                                    <FaMicrosoft size={30} color="#00a4e4" /> {/* Microsoft icon with blue color */}
                                </div>
                            </div>
                        </div>

                    </form>



                </div>
            </div>


            {/* Right Side - Image Section */}
            <div
                className="image-section"
            >
                <img
                    className="foreground-image"
                    src="https://app.harness.io/auth/assets/saas-fg.ee2d34be.png"
                    alt="foreground-image"
                    aria-hidden="true"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </div>
        </div>
    );
};

export default LoginPage;
