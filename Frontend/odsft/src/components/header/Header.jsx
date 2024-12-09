import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  
  // sub list ka liya 
  const [showAboutOptions, setShowAboutOptions] = useState(false);
  const [showLawsOptions, setShowLawsOptions] = useState(false);

  const handleAboutMouseOver = () => setShowAboutOptions(true);
  const handleAboutMouseLeave = () => setShowAboutOptions(false);
  
  const handleLawsMouseOver = () => setShowLawsOptions(true);
  const handleLawsMouseLeave = () => setShowLawsOptions(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Organ Donation System</h1>
      </div>
      
      <nav className="nav">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li
             onMouseOver={handleAboutMouseOver}
             onMouseLeave={handleAboutMouseLeave}
          >
           <Link to="/about">About</Link>

            {showAboutOptions && ( 
              <ul className="options">
                <li><Link to = "/about">who we are</Link></li>
                <li><Link to ="/wwd">what we do</Link></li>
              
              </ul>
            )}
          </li>

          <li
             onMouseOver={handleLawsMouseOver}
             onMouseLeave={handleLawsMouseLeave}
          >
            <Link to="/laws">Laws & Reports</Link>

            {showLawsOptions && (
              <ul className="options2">
                <li><Link to = "/laws">Transplant Law Made Easy</Link></li>
                <li><a href="https://organindia.org/wp-content/uploads/2014/10/1.THOA-ACT-1994.pdf">THOA Acts</a></li>
                <li><a href="https://www.organindia.org/wp-content/uploads/2014/11/ORGAN-Research-Report.pdf">Full Research Report</a></li>
                <li><a href="/syno">Synopsis Of Report </a></li>
                <li><a href="https://www.organindia.org/wp-content/uploads/2023/06/Report-Team-India-at-World-Transplant-Games-2023.pdf">Team India at WTG 2023</a></li>
              </ul>
            )}
          </li>

          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;