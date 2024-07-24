import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu">
        <div>
          <Link to="/" className="navbar-item">
            HOME
          </Link>
        </div>
        <div>
          <Link to="/eventlist" className="navbar-item">
            EVENT LIST
          </Link>
        </div>
        <div className="navbar-item">BLOG</div>
        <div className="navbar-item">HOT OFFERS</div>
        <div className="navbar-item">CONTACT US</div>
        <div className="navbar-item">ABOUT US</div>
      </div>
    </div>
  );
};

export default Navbar;
