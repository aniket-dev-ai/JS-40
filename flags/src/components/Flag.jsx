import React from "react";
import { NavLink } from "react-router-dom";

function Flag({ item, setname }) {
  const fetchs = () => {
    setname(item.name.common);
  };

  return (
    <div className="transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer flex justify-center">
      <NavLink
        to="/country-details"
        className="text-2xl font-semibold hover:text-gray-300"
      >
        <img
          onClick={fetchs}
          className="w-full h-60 sm:w-64 sm:h-64 object-contain rounded-xl border-4 border-white transition-all duration-300 hover:border-indigo-400"
          src={item.flags.png}
          alt={item.name.common}
        />
        <p className="text-lg mt-3 text-white font-medium">{item.name.common}</p>
      </NavLink>
    </div>
  );
}

export default Flag;
