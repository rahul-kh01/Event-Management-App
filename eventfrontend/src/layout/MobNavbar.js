import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const MobNavbar = () => {
  return (
    <div className="mob-navbar">
      <div className="mob-navbar-menu">
        <Link to="/menu" className="mob-navbar-item">
          <IoMenuOutline />
        </Link>
        <Link to="/cart" className="mob-navbar-item">
          <HiOutlineShoppingBag />
        </Link>
        <Link to="/" className="mob-navbar-item">
          <AiOutlineHome />
        </Link>
        <Link to="/favorites" className="mob-navbar-item">
          <FiHeart />
        </Link>
        <Link to="/apps" className="mob-navbar-item">
          <AiOutlineAppstore />
        </Link>
      </div>
    </div>
  );
};

export default MobNavbar;
