import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Menu = () => {
  return (
    <div
      className="menu-container"
      style={{
        backgroundImage: `url('/img14.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="menu-item">
        <Link to="/" className="menu-link">
          HOME
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/eventlist" className="menu-link">
          EVENT LIST
        </Link>
      </div>
      <div className="menu-item">BLOG</div>
      <div className="menu-item">HOT OFFERS</div>
      <div className="menu-item">CONTACT US</div>
      <div className="menu-item">ABOUT US</div>
    </div>
  );
};

export default Menu;
