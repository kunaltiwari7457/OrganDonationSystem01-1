import React from "react";
import "./DashBoard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="profile-image"
          />
          <h3>SHAURYA GUPTA </h3>
          <p>ijdvvhivsii541@gmail.com</p>
        </div>
        <ul className="menu">
          <li>Donate Now</li>
          <li>Donation History</li>
          <li>Profile</li>
          <li>Change Password</li>
          <li>Logout</li>
        </ul>
      </aside>
      <main className="main-content">
        <div className="cards">
          <div className="card blue">
            <h4>My Total Donations</h4>
            <p>2</p>
            <a href="#">View Details</a>
          </div>
          <div className="card green">
            <h4>My Accepted Donations</h4>
            <p>1</p>
            <a href="#">View Details</a>
          </div>
          <div className="card red">
            <h4>My Rejected Donations</h4>
            <p>0</p>
            <a href="#">View Details</a>
          </div>
          <div className="card yellow">
            <h4>My Pending Donations</h4>
            <p>0</p>
            <a href="#">View Details</a>
          </div>
          <div className="card purple">
            <h4>My Successfully Delivered Donations</h4>
            <p>1</p>
            <a href="#">View Details</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
