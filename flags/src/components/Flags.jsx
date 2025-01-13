import React, { useState, useEffect } from 'react';
import Flag from "./Flag";

function Flags({ data, name, setname }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Function to filter the data based on search term and filters
  const filterData = () => {
    return data.filter(item => {
      const matchesSearch = item.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesContinent = selectedContinent ? item.continents && item.continents.includes(selectedContinent) : true;
      const matchesRegion = selectedRegion ? item.region === selectedRegion : true;

      return matchesSearch && matchesContinent && matchesRegion;
    });
  };

  return (
    <div className="bg-emerald-800 text-white py-5">
      <div className="flex justify-center space-x-4 mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by country name"
          className="p-2 text-black placeholder:text-black  rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Continent Filter */}
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="p-2 rounded-md text-black"
        >
          <option value="">Select Continent</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
        </select>

        {/* Region Filter */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="p-2 rounded-md text-black"
        >
          <option value="">Select Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Display the filtered countries */}
      <div className="flex flex-wrap justify-center gap-20">
        {filterData().map((item, key) => (
          <Flag key={key} item={item} name={name} setname={setname} />
        ))}
      </div>
    </div>
  );
}

export default Flags;
