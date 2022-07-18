import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "./images/cart.png";
import logo from "./images/full-logo.png";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="links">
        <Link to="/shop">
          <li>SHOP</li>
        </Link>
        <Link to="/aboutus">
          <li>ABOUT US</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
        <img src={cartLogo} alt="cart" />
      </div>
    </nav>
  );
};

export default Nav;
