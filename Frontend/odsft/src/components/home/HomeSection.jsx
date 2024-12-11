import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "../Slider/Slider"; // Assuming you have a Slider component
import "./HomeSection.css";

function HomeSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);

  useEffect(() => {
    if (location.state?.showLoginModal === true) {
      setShowLoginModal(true);
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate]);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);
  const toggleAdminLoginModal = () => setShowAdminLoginModal(!showAdminLoginModal);

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
    try {
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
        navigate("/db"); // Redirect to the dashboard after successful login
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
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
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleScrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <div className="App">
      <div className="auth-buttons">
        <button className="login-button" onClick={toggleLoginModal}>
          Login
        </button>
        <button className="signup-button" onClick={toggleSignupModal}>
          Sign Up
        </button>
      </div>

      <div className="info-section">
        <h3>Every organ donor has the potential to save up to 8 lives</h3>
        <p>
          <a href="/learn">Learn About Organ Donation</a>
        </p>
      </div>

      <Slider />

      <div className="register-section">
        <button className="register-button" onClick={handleLearnClick}>
          Register to Donate
        </button>
        <div className="scroll-down" onClick={handleScrollDown}>
          <span>❯</span>
        </div>
      </div>

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
            <button className="admin-login-button" onClick={toggleAdminLoginModal}>
              Login as Admin
            </button>
          </div>
        </div>
      )}

      {showAdminLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleAdminLoginModal}>
              &times;
            </span>
            <h2>Admin Login</h2>
            <form>
              <label>Admin ID</label>
              <input type="text" placeholder="Enter your Admin ID" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <button type="submit">Admin Login</button>
            </form>
          </div>
        </div>
      )}

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
