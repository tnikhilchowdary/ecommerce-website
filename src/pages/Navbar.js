import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"; 

import Logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = ({search, setSearch}) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/jewelery">Jewelery</NavLink>
          <NavLink to="/electonics">Electronics</NavLink>
        </nav>
      </div>
      <div className="navbar-right">
      <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" 
      placeholder="Search Products" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <NavLink to="/cart" className="cart-icon">
      <FaShoppingCart />
      </NavLink>
      </form>
      </div>
      </div>
  );
};

export default Navbar;
