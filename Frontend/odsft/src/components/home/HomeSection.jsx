import React, { useState } from "react";
import "./HomeSection.css";
import { useNavigate } from "react-router-dom";

function HomeSection() {
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ email: "", password: "", confirmPassword: "" });

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);

  const handleLearnClick = () => {
    navigate("/register");
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3300/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    alert(result.message);
    if (result.message === "Login successful") {
      setShowLoginModal(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3300/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const result = await response.json();
    alert(result.message);
    if (result.message === "User signed up successfully") {
      setShowSignupModal(false);
    }
  };

  return (
    <div className="App">
      {/* Login and Sign Up Buttons */}
      <div className="auth-buttons">
        <button className="login-button" onClick={toggleLoginModal}>
          Login
        </button>
        <button className="signup-button" onClick={toggleSignupModal}>
          Sign Up
        </button>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleLoginModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleSignupModal}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                placeholder="Enter your password"
              />
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                placeholder="Confirm your password"
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeSection;
