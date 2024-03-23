// Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/home" className="text-2xl font-bold text-white">
          SellEase
        </Link>

        <div className="flex items-center space-x-4">
          <NavLink
            to="/home"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Cart
          </NavLink>

          <NavLink
            to="/track"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Order Tracking
          </NavLink>
          <NavLink
            to="/history"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Purchase History
          </NavLink>
          <NavLink
            to="/return"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Returns & Exchanges
          </NavLink>
          <NavLink
            to="/signup"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
