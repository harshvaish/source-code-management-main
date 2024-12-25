import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaGithub,
  FaBitbucket,
  FaLinkedin,
  FaGoogle,
  FaGitlab,
  FaMicrosoft,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (email === "abc@gmail.com" && password === "abc@123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-page-container">
      {/* Left Side - Login Form */}
      <div
        className="login-card-container"
        style={{
          width: "40%",
          display: "flex",
          maxHeight: "100vh",
          overflowY: "auto",

          flexDirection: "column",
          alignItems: "flex-start",
          padding: "50px",
        }}
      >
        <div className="login-card" style={{ width: "100%" }}>
          <div
            className="logo-container"
            style={{
              marginBottom: "35px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Devops-toolchain.svg/2560px-Devops-toolchain.svg.png"
              alt="Devops Icon"
              className="logo"
              style={{
                marginTop: "5px",
                marginRight: "5px",
                height: "28px",
                width: "42px",
              }}
            />
            <h2 style={{ fontWeight: "bold" }}>Devops Management</h2>
          </div>

          <h2 className="mt-3">Sign In</h2>
          <p
            style={{
              color: "#555770",
              marginBottom: "35px",
            }}
          >
            and get ship done.
          </p>
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
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "black";
                  e.target.style.boxShadow = "none";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#ccc";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Forgot Password link outside the input field */}
            <div className="d-flex justify-content-end mt-1">
              <a
                href="/forgot-password"
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
                  e.target.style.borderColor = "black";
                  e.target.style.boxShadow = "none";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#ccc";
                  e.target.style.boxShadow = "none";
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
                width: "100%",
              }}
              onClick={handleLogin}
            >
              Sign In
            </button>
            {/* OR or Login with section */}
            <div className="d-flex align-items-center my-3">
              <hr style={{ flex: 1, border: "1px solid #000" }} />
              <span
                style={{
                  margin: "0 10px",
                  fontWeight: "400",
                  color: "#555770",
                }}
              >
                or login with
              </span>
              <hr style={{ flex: 1, border: "1px solid black" }} />
            </div>

            {/* Alternate Login Options */}
            <div className="row">
              {/* GitHub Card */}
              <div
                className="col-4 col-md-2 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/login", "_blank")
                }
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px", // Fixed card height
                  }}
                >
                  <FaGithub size={30} color="#333" />
                </div>
              </div>

              {/* Bitbucket Card */}
              <div
                className="col-4 col-md-2 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://bitbucket.org/account/signin/", "_blank")
                } // Redirect to Bitbucket login
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px", // Fixed card height
                  }}
                >
                  <FaBitbucket size={30} color="#0052cc" />
                </div>
              </div>

              {/* GitLab Card */}
              <div
                className="col-4 col-md-2 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://gitlab.com/users/sign_in", "_blank")
                } // Redirect to GitLab login
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px", // Fixed card height
                  }}
                >
                  <FaGitlab size={30} color="#fc6d26" />
                </div>
              </div>

              {/* LinkedIn Card */}
              <div
                className="col-4 col-md-2 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.linkedin.com/uas/login", "_blank")
                } // Redirect to LinkedIn login
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px", // Fixed card height
                  }}
                >
                  <FaLinkedin size={30} color="#0077b5" />
                </div>
              </div>

              {/* Google Card */}
              <div
                className="col-4 col-md-2 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://accounts.google.com/ServiceLogin",
                    "_blank"
                  )
                }
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px", // Fixed card height
                  }}
                >
                  <FaGoogle size={30} color="#db4437" />
                </div>
              </div>
              {/* Microsoft Card */}
              <div
                className="col-4 col-md-2 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://login.live.com/", "_blank")} // Redirect to Microsoft login
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px", // Fixed card height
                  }}
                >
                  <FaMicrosoft size={30} color="#00a4e4" />{" "}
                  {/* Microsoft icon with blue color */}
                </div>
              </div>
            </div>
          </form>

          <p className="mt-2">
            No Account?
            <Link
              to="/signup"
              style={{
                color: "rgb(2, 120, 213)",
                fontWeight: "400",
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="image-section">
        <img
          className="foreground-image"
          src="https://www.shutterstock.com/image-vector/3d-devops-development-service-continuous-600nw-2313123169.jpg"
          alt="foreground-image"
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            // objectFit:"cover",
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
