import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ search, setSearch, cartItems }) => {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/jewelery">Jewelery</NavLink>
          <NavLink to="/electronics">Electronics</NavLink>
        </nav>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <NavLink to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{totalQuantity}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
