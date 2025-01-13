import React, { useState, useEffect } from "react";
import axios from "axios";
import Flags from "./components/Flags";
import FlagDetails from "./components/FlagDetails";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing

function App() {
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");
  const [detailed, setdetailed] = useState(null); // Initialize detailed as an object

  const datafetch = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  useEffect(() => {
    console.log(name);
    const selectedCountry = data.find(
      (country) => country.name.common === name
    );
    if (selectedCountry) {
      setdetailed(selectedCountry);
    }
  }, [name, data]);

  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        {/* Define the route for the Flags component */}
        <Route path="/" element={<Flags data={data} name={name} setname={setname} />} />

        {/* Conditionally render FlagDetails only if `detailed` is set */}
        {detailed && (
          <Route path="/country-details" element={<FlagDetails data={detailed} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
