import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <NavLink
        to="/"
        className="text-2xl font-semibold hover:text-gray-300"
        end
      >
        Flags
      </NavLink>
      <NavLink
        to="/country-details"
        className="text-2xl font-semibold hover:text-gray-300"
      >
        Details
      </NavLink>
    </div>
  );
}

export default Navbar;
