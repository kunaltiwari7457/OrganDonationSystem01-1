import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeSection.css";
import Slider from "../Slider/Slider";
import HeartGraphic from "./HeartGraphic";

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

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);
  const toggleAdminLoginModal = () => setShowAdminLoginModal(!showAdminLoginModal);

  const handleLearnClick = () => {
    navigate("/register");
  };

  const handleScrollDown = () => {
    const targetSection = document.getElementById("heart-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
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

      {/* Informational Section */}
      <div className="info-section">
        <h3>Every organ donor has the potential to save up to 8 lives</h3>
        <p>
          <a href="/learn">Learn About Organ Donation</a>
        </p>
      </div>

      <Slider />

      {/* Register Section */}
      <div className="register-section">
        <button className="register-button" onClick={handleLearnClick}>
          Register to Donate
        </button>
        <div className="scroll-down" onClick={handleScrollDown}>
          <span>❯</span>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleLoginModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <button type="submit">Login</button>
            </form>
            <button className="admin-login-button" onClick={toggleAdminLoginModal}>
              Login as Admin
            </button>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
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

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleSignupModal}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}

      {/* Heart Section */}
      <div id="heart-section">
        <HeartGraphic />
      </div>
    </div>
  );
}

export default HomeSection;
