import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleResetPassword = (e) => {
    alert("password reset");
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
            <h2 style={{ fontWeight: "600" }}>Devops Management</h2>
          </div>

          <h2 className="mt-3 mb-5">Forgot Password</h2>
          {/* Forgot Password Form */}
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
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            {/* Back Arrow */}
            <a
              href="/" // Modify to match your routing logic (could also be <Link> from react-router-dom)
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#0278d5",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <span style={{ marginRight: "5px", fontSize: "20px", color:"#0278d5" }}>←</span> */}
              Back to Login
            </a>
          </form>
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

export default ForgotPassword;
