import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/full-logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="links">
        <Link to="/shop">
          <li>SHOP</li>
        </Link>
        <Link to="/about">
          <li>ABOUT US</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
