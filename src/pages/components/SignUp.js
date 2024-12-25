import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import {
  FaGithub,
  FaBitbucket,
  FaLinkedin,
  FaGoogle,
  FaGitlab,
  FaMicrosoft,
  FaEnvelope,
} from "react-icons/fa";

const SignUp = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100">
        {/* Left section for image */}
        <Col
          md={6}
          className="d-none d-md-block"
          style={{ backgroundColor: "#0a3364" }}
        >
          <div
            style={{
              height: "100%",
              background: `url('https://png.pngtree.com/png-vector/20220720/ourmid/pngtree-devops-engineers-teamwork-people-engineer-png-image_6028424.png') no-repeat center center`,
              backgroundSize: "cover",
              width: "100%",
            }}
          ></div>
        </Col>

        {/* Right section for form */}
        <Col md={6} lg={4} className="mx-auto">
          <div className="text-start mb-5">
            <h3>Sign up</h3>
            <p>Get started for free. No Credit card required.</p>
          </div>

          {/* Buttons for Continue with Google, GitHub, and Email */}
          <Button
            style={{ backgroundColor: "#0278D5" }}
            className="d-flex align-items-center justify-content-center w-100 mb-3"
          >
            <FaGoogle className="me-2" /> Continue with Google
          </Button>

          <Button
            style={{ backgroundColor: "#0278D5" }}
            className="d-flex align-items-center justify-content-center w-100 mb-3"
          >
            <FaGithub className="me-2" /> Continue with GitHub
          </Button>

          <Button
            variant="light"
            style={{
              color: "#0278D5",
              borderColor: "#0278D5",
              borderWidth: "1px",
            }}
            className="d-flex align-items-center justify-content-center w-100 mb-5"
          >
            <FaEnvelope className="me-2" /> Sign up with Email
          </Button>

          {/* Social login cards */}
          <div className="row justify-content-center mb-2">
            {/* Bitbucket Card */}
            <div
              className="col-4 col-md-2 mb-3 d-flex justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://bitbucket.org/account/signin/", "_blank")
              }
            >
              <div
                className="card"
                style={{
                  width: "45px",
                  height: "45px",
                  padding: "6px",
                  borderRadius: "50%", // Circular card
                  backgroundColor: "#C4C4C41A", // Set the background color
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaBitbucket size={20} color="#0052cc" />
              </div>
            </div>

            {/* GitLab Card */}
            <div
              className="col-4 col-md-2 mb-3 d-flex justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://gitlab.com/users/sign_in", "_blank")
              }
            >
              <div
                className="card"
                style={{
                  width: "45px",
                  height: "45px",
                  padding: "6px",
                  borderRadius: "50%", // Circular card
                  backgroundColor: "#C4C4C41A", // Set the background color
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaGitlab size={20} color="#fc6d26" />
              </div>
            </div>

            {/* LinkedIn Card */}
            <div
              className="col-4 col-md-2 mb-3 d-flex justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/uas/login", "_blank")
              }
            >
              <div
                className="card"
                style={{
                  width: "45px",
                  height: "45px",
                  padding: "6px",
                  borderRadius: "50%", // Circular card
                  backgroundColor: "#C4C4C41A", // Set the background color
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaLinkedin size={20} color="#0077b5" />
              </div>
            </div>

            {/* Microsoft Card */}
            <div
              className="col-4 col-md-2 mb-3 d-flex justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://login.live.com/", "_blank")}
            >
              <div
                className="card"
                style={{
                  width: "45px",
                  height: "45px",
                  padding: "6px",
                  borderRadius: "50%", // Circular card
                  backgroundColor: "#C4C4C41A", // Set the background color
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaMicrosoft size={20} color="#00a4e4" />
              </div>
            </div>
          </div>

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
              or
            </span>
            <hr style={{ flex: 1, border: "1px solid black" }} />
          </div>

          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                Sign in
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
